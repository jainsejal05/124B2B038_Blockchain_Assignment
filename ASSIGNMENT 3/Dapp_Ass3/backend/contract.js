// backend/contract.js
// ─────────────────────────────────────────────────────────────────────────────
// STEP 1 ─ Deploy contract.sol on Remix (https://remix.ethereum.org)
//           using "Injected Provider – MetaMask" (Sepolia testnet recommended).
// STEP 2 ─ After deployment, copy the deployed contract address and paste it
//           into CONTRACT_ADDRESS below (replace the placeholder string).
// ─────────────────────────────────────────────────────────────────────────────

const CONTRACT_ADDRESS = "0x820D5c3fE8c4D70D3aB80e583a420A6741112f40"; // ← PASTE HERE

// ABI generated from contract.sol – keep in sync if you change the Solidity source
const CONTRACT_ABI = [
  {
    "inputs": [
      { "internalType": "string", "name": "_name",    "type": "string" },
      { "internalType": "string", "name": "_message", "type": "string" }
    ],
    "name": "setData",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getData",
    "outputs": [
      { "internalType": "string", "name": "name",    "type": "string" },
      { "internalType": "string", "name": "message", "type": "string" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": false, "internalType": "string",  "name": "name",    "type": "string" },
      { "indexed": false, "internalType": "string",  "name": "message", "type": "string" },
      { "indexed": true,  "internalType": "address", "name": "sender",  "type": "address" }
    ],
    "name": "DataStored",
    "type": "event"
  }
];

module.exports = { CONTRACT_ADDRESS, CONTRACT_ABI };
