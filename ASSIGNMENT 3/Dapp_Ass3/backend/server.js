// backend/server.js

require("dotenv").config();
const path    = require("path");
const express = require("express");
const cors    = require("cors");
const { ethers } = require("ethers");
const { CONTRACT_ADDRESS, CONTRACT_ABI } = require("./contract");

const app  = express();
const PORT = process.env.PORT || 3000;

// ── Middleware ─────────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend")));

// ── Ethers Setup ───────────────────────────────────────

// ✅ FIXED RPC (reliable)
const RPC_URL = process.env.RPC_URL || "https://ethereum-sepolia-rpc.publicnode.com";

// ⚠️ IMPORTANT: add PRIVATE_KEY in .env
const PRIVATE_KEY = process.env.PRIVATE_KEY;

let provider, signer, contract;

async function initEthers() {
  try {
    provider = new ethers.JsonRpcProvider(RPC_URL);

    // 🔍 Test connection
    const blockNumber = await provider.getBlockNumber();
    console.log(`✅ Connected to RPC → Block: ${blockNumber}`);

    // Wallet setup
    if (!PRIVATE_KEY) {
      console.warn("⚠️ PRIVATE_KEY missing → Only read operations will work");
    } else {
      signer = new ethers.Wallet(PRIVATE_KEY, provider);
      console.log(`🔑 Wallet connected: ${signer.address}`);
    }

    // Contract setup
    contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);

    if (signer) {
      contract = contract.connect(signer);
    }

    console.log(`📄 Contract loaded: ${CONTRACT_ADDRESS}`);

  } catch (err) {
    console.error("❌ Ethers initialization failed:", err.message);
  }
}

initEthers();

// ── Helper ─────────────────────────────────────────────
function isInvalidAddress(addr) {
  return !addr || addr.length < 10;
}

// ── Routes ─────────────────────────────────────────────

/**
 * POST /store
 */
app.post("/store", async (req, res) => {
  console.log("📩 /store request:", req.body);

  if (isInvalidAddress(CONTRACT_ADDRESS)) {
    return res.status(500).json({
      success: false,
      error: "Invalid contract address",
    });
  }

  const { name, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({
      success: false,
      error: "Name and message required",
    });
  }

  if (!signer) {
    return res.status(500).json({
      success: false,
      error: "PRIVATE_KEY missing in .env",
    });
  }

  try {
    console.log("⛓ Sending transaction...");

    const tx = await contract.setData(name, message);
    console.log("📝 TX Hash:", tx.hash);

    const receipt = await tx.wait();
    console.log("✅ Confirmed in block:", receipt.blockNumber);

    res.json({
      success: true,
      txHash: tx.hash,
      block: receipt.blockNumber,
    });

  } catch (err) {
    console.error("❌ Store error:", err);
    res.status(500).json({
      success: false,
      error: err.reason || err.message,
    });
  }
});

/**
 * GET /get
 */
app.get("/get", async (_req, res) => {
  console.log("📥 Fetching data...");

  if (isInvalidAddress(CONTRACT_ADDRESS)) {
    return res.status(500).json({
      success: false,
      error: "Invalid contract address",
    });
  }

  try {
    const [name, message] = await contract.getData();

    console.log("📦 Data:", name, message);

    res.json({
      success: true,
      name,
      message,
    });

  } catch (err) {
    console.error("❌ Fetch error:", err);
    res.status(500).json({
      success: false,
      error: err.reason || err.message,
    });
  }
});

// Serve frontend
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// ── Start Server ───────────────────────────────────────
app.listen(PORT, () => {
  console.log(`
🚀 Server running → http://localhost:${PORT}

Frontend → http://localhost:${PORT}
POST     → /store
GET      → /get
`);
});