Assignment 3: Web Interface + MetaMask Integration

📌 Objective

The objective of this assignment is to develop a web-based interface that interacts with an Ethereum smart contract using MetaMask.
This project demonstrates how frontend and backend systems can communicate with blockchain networks.

📂 Files Included
frontend/index.html → User interface
frontend/script.js → Frontend logic and API calls
frontend/style.css → UI styling
backend/server.js → Node.js Express server
backend/contract.js → Blockchain interaction logic
contract/contract.sol → Smart contract
README.md → Documentation
screenshots/ → Output proof

⚙️ Tools & Technologies Used
Node.js + Express.js (backend server)
MetaMask (wallet connection & transaction signing)
Remix IDE (contract deployment)
Ethers.js (blockchain interaction library)

🚀 Steps to Run the Project
🔹 Step 1: Deploy Smart Contract
Open Remix IDE
Create contract.sol and paste the contract code
Compile using Solidity 0.8.x
Deploy using Injected Provider - MetaMask
Copy the deployed contract address

🔹 Step 2: Configure Backend
Open backend/contract.js
Paste the deployed contract address
Add contract ABI

🔹 Step 3: Install Dependencies
npm install

🔹 Step 4: Start Server
node backend/server.js

Server will run on: http://localhost:3000

🔹 Step 5: Open Frontend
Open browser and go to: http://localhost:3000

🔹 Step 6: Connect MetaMask
Click Connect Wallet
Approve connection in MetaMask
Ensure correct network is selected

🔹 Step 7: Store and Retrieve Data
Enter user details (name and message)
Click Store Data → transaction sent to blockchain
Click Get Data → retrieves stored data

🎯 Result

The web application successfully interacts with the blockchain by:
Connecting wallet using MetaMask
Sending transactions to store user data
Retrieving and displaying stored data on the UI

