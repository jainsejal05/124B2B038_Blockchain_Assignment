# 🚀 Blockchain Lab Assignments


## 👤 Student Details

- **Name:** Sejal Sanjay Jain  
- **PRN:** 124B2B038  
- **Course Name:** Blockchain Lab  

---

## 📌 Overview

This repository contains a collection of **Blockchain Lab Assignments** covering fundamental concepts of **Web3 development**, including smart contracts, decentralized applications (DApps), IPFS-based storage, and DAO governance.  

Each assignment demonstrates practical implementation using modern blockchain tools and technologies.



## 📁 Assignment Descriptions

### 🔹 Assignment 1: Smart Contract Development  
Developed a basic smart contract using Solidity to **store and retrieve a numeric value**, demonstrating core concepts like state variables and functions.  



### 🔹 Assignment 2: Polygon Deployment  
Deployed the smart contract on the Polygon Amoy Testnet, highlighting benefits such as **low transaction fees and faster processing** compared to Ethereum.  



### 🔹 Assignment 3: Web Interface + MetaMask Integration  
Built a simple decentralized web application (DApp) using HTML, CSS, and JavaScript that interacts with the blockchain via MetaMask and Ethers.js.  



### 🔹 Assignment 4: IPFS Integration  
Implemented decentralized file storage using IPFS via Pinata, allowing users to upload and retrieve files using a unique Content Identifier (CID).  



### 🔹 Assignment 5: DAO Smart Contract  
Created a basic Decentralized Autonomous Organization (DAO) where users can create proposals, vote on them, and execute decisions based on voting results.  

---

## 🛠️ Tech Stack Used

- Solidity  
- Remix IDE  
- MetaMask  
- Ethers.js  
- HTML, CSS, JavaScript  
- Sepolia Testnet  
- Polygon Amoy Testnet  
- IPFS (Pinata)  

---

## 🚀 How to Run Each Assignment

---

### ▶️ Assignment 1 & 2 (Smart Contracts)

1. Open Remix IDE: https://remix.ethereum.org  
2. Open the `.sol` file  
3. Compile the contract  
4. Go to Deploy & Run Transactions  
5. Select Injected Provider - MetaMask  
6. Connect MetaMask wallet  
7. Choose network:  
   - Sepolia (Assignment 1)  
   - Polygon Amoy (Assignment 2)  
8. Click Deploy and confirm  

**Result:** Smart contract successfully deployed and executed on the selected blockchain network.  

---

### ▶️ Assignment 3 (Web DApp)

1. Open terminal in `assignment-3` folder  
2. Run:  python -m http.server 3000
3. Open browser: http://127.0.0.1:3000
4. Connect MetaMask
5. Store and retrieve data

**Result:** Frontend successfully interacts with the blockchain using MetaMask.

---

### ▶️ Assignment 4: IPFS File Storage

1. Open `index.html` (or use Live Server)  
2. Upload a file  
3. Copy generated CID  
4. Paste CID to retrieve file  

**Result:** Files are successfully stored and retrieved from IPFS using CID.  

---

### ▶️ Assignment 5: DAO Smart Contract

1. Open Remix IDE  
2. Compile `dao.sol`  
3. Deploy using MetaMask  
4. Interact with:  
   - `createProposal`  
   - `vote`  
   - `executeProposal`  
5. View results using `getProposal()`  

**Result:** DAO system successfully manages proposals, voting, and execution on blockchain.  

---
