// frontend/script.js
// ─────────────────────────────────────────────────────────────────────────────
// All blockchain interactions go through the Express backend.
// MetaMask is used here only for wallet identity (address display).
// ─────────────────────────────────────────────────────────────────────────────

"use strict";

// ── Config ────────────────────────────────────────────────────────────────────
const API_BASE   = "http://localhost:3000";
const SEPOLIA_ID = "0xaa36a7"; // chain ID for Sepolia testnet (hex)

// ── DOM refs ──────────────────────────────────────────────────────────────────
const connectBtn    = document.getElementById("connectBtn");
const storeBtn      = document.getElementById("storeBtn");
const getBtn        = document.getElementById("getBtn");
const walletAddress = document.getElementById("walletAddress");
const networkBadge  = document.getElementById("networkBadge");
const inputName     = document.getElementById("inputName");
const inputMessage  = document.getElementById("inputMessage");
const txReceipt     = document.getElementById("txReceipt");
const txHashLink    = document.getElementById("txHashLink");
const txBlock       = document.getElementById("txBlock");
const resultBox     = document.getElementById("resultBox");
const statusBar     = document.getElementById("statusBar");
const statusDot     = document.getElementById("statusDot");
const statusMsg     = document.getElementById("statusMsg");

// ── State ─────────────────────────────────────────────────────────────────────
let walletConnected = false;

// ── Helpers ───────────────────────────────────────────────────────────────────

/**
 * Update the status bar at the bottom of the page.
 * @param {string} msg   - Human-readable message
 * @param {'idle'|'pending'|'success'|'error'|'info'} type
 */
function setStatus(msg, type = "idle") {
  statusMsg.textContent = msg;
  statusDot.className   = `status-dot ${type}`;
  console.log(`[status:${type}] ${msg}`);
}

/** Shorten a full Ethereum address → 0x1234…abcd */
function shortAddr(addr) {
  return `${addr.slice(0, 6)}…${addr.slice(-4)}`;
}

/** Show an error inside the result box */
function showResultError(msg) {
  resultBox.innerHTML = `<div class="result-empty" style="color:var(--danger)">${msg}</div>`;
}

// ── 1. Connect MetaMask ───────────────────────────────────────────────────────

connectBtn.addEventListener("click", async () => {
  if (!window.ethereum) {
    alert("MetaMask is not installed.\nPlease install it from https://metamask.io and reload.");
    return;
  }

  try {
    setStatus("Requesting wallet access …", "pending");
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    console.log("[MetaMask] Accounts:", accounts);

    await handleAccountsChanged(accounts);
    await checkNetwork();

  } catch (err) {
    console.error("[MetaMask] Connection error:", err);
    setStatus(`Wallet connection failed: ${err.message}`, "error");
  }
});

async function handleAccountsChanged(accounts) {
  if (!accounts || accounts.length === 0) {
    walletConnected = false;
    walletAddress.classList.add("hidden");
    connectBtn.classList.remove("hidden");
    storeBtn.disabled = true;
    networkBadge.textContent = "Not Connected";
    networkBadge.classList.remove("connected");
    setStatus("Wallet disconnected.", "idle");
    return;
  }

  walletConnected = true;
  const addr = accounts[0];
  walletAddress.textContent = shortAddr(addr);
  walletAddress.classList.remove("hidden");
  connectBtn.classList.add("hidden");
  storeBtn.disabled = false;
  setStatus(`Connected: ${addr}`, "success");
}

async function checkNetwork() {
  const chainId = await window.ethereum.request({ method: "eth_chainId" });
  console.log("[MetaMask] Chain ID:", chainId);

  if (chainId === SEPOLIA_ID) {
    networkBadge.textContent = "Sepolia";
    networkBadge.classList.add("connected");
    setStatus("Connected to Sepolia testnet ✓", "success");
  } else {
    networkBadge.textContent = "Wrong Network";
    networkBadge.classList.remove("connected");
    setStatus("⚠ Wrong network – please switch MetaMask to Sepolia.", "error");
  }
}

// Handle MetaMask account/chain changes after the page is loaded
if (window.ethereum) {
  window.ethereum.on("accountsChanged", handleAccountsChanged);
  window.ethereum.on("chainChanged", (_chainId) => {
    console.log("[MetaMask] Chain changed to", _chainId);
    window.location.reload(); // safest approach on chain switch
  });

  // Auto-connect if already permitted
  window.ethereum
    .request({ method: "eth_accounts" })
    .then((accs) => { if (accs.length > 0) handleAccountsChanged(accs).then(checkNetwork); })
    .catch(console.warn);
}

// ── 2. Store Data (POST /store) ───────────────────────────────────────────────

storeBtn.addEventListener("click", async () => {
  const name    = inputName.value.trim();
  const message = inputMessage.value.trim();

  if (!name || !message) {
    setStatus("Please fill in both Name and Message.", "error");
    return;
  }

  setStatus("Sending transaction to backend …", "pending");
  storeBtn.disabled = true;
  txReceipt.classList.add("hidden");

  try {
    const response = await fetch(`${API_BASE}/store`, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify({ name, message }),
    });

    const data = await response.json();
    console.log("[/store] Response:", data);

    if (!data.success) throw new Error(data.error || "Unknown error from server.");

    // Show receipt
    const explorerBase = "https://sepolia.etherscan.io/tx/";
    txHashLink.href        = `${explorerBase}${data.txHash}`;
    txHashLink.textContent = shortAddr(data.txHash);
    txBlock.textContent    = `#${data.blockNumber}`;
    txReceipt.classList.remove("hidden");

    setStatus(`Transaction confirmed in block #${data.blockNumber} ✓`, "success");

  } catch (err) {
    console.error("[/store] Error:", err);
    setStatus(`Store failed: ${err.message}`, "error");
  } finally {
    storeBtn.disabled = !walletConnected;
  }
});

// ── 3. Get Data (GET /get) ────────────────────────────────────────────────────

getBtn.addEventListener("click", async () => {
  setStatus("Fetching data from contract …", "pending");
  resultBox.innerHTML = `<div class="result-empty">Loading …</div>`;

  try {
    const response = await fetch(`${API_BASE}/get`);
    const data     = await response.json();
    console.log("[/get] Response:", data);

    if (!data.success) throw new Error(data.error || "Unknown error from server.");

    if (!data.name && !data.message) {
      resultBox.innerHTML = `<div class="result-empty">Contract has no data yet.<br/>Store something first!</div>`;
      setStatus("No data found in contract.", "info");
      return;
    }

    resultBox.innerHTML = `
      <div class="result-data">
        <div class="result-field">
          <span class="result-field-label">Name</span>
          <span class="result-field-value">${escapeHtml(data.name)}</span>
        </div>
        <div class="result-field">
          <span class="result-field-label">Message</span>
          <span class="result-field-value">${escapeHtml(data.message)}</span>
        </div>
      </div>`;

    setStatus("Data retrieved from contract ✓", "success");

  } catch (err) {
    console.error("[/get] Error:", err);
    showResultError(`Error: ${err.message}`);
    setStatus(`Get failed: ${err.message}`, "error");
  }
});

// ── Utility ───────────────────────────────────────────────────────────────────

/** Prevent XSS when injecting chain data into innerHTML */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
