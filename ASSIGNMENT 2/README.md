📘 Assignment 2: Smart Contract Deployment on Polygon Network
📌 Objective

The goal of this assignment is to deploy a Solidity-based smart contract on the Polygon test network using tools like Remix IDE and MetaMask.
This exercise helps in understanding blockchain deployment, wallet interaction, and transaction confirmation.

📂 Project Structure
contract.sol → Contains the Solidity smart contract code
README.md → Documentation explaining the deployment steps
Screenshots/ → Evidence of successful deployment and transactions

⚙️ Tools & Technologies Used
Remix IDE for writing and compiling the contract
MetaMask for wallet connection and transaction signing
Polygon Amoy Testnet for deployment

🌐 Network Configuration
Parameter	Details
Network Name	Polygon Amoy
RPC URL	https://rpc-amoy.polygon.technology

Chain ID	80002
Native Currency	POL
Block Explorer	https://amoy.polygonscan.com

🚀 Step-by-Step Deployment Process
🔹 Step 1: Open Remix IDE
Navigate to Remix IDE in your browser
Create a new Solidity file named contract.sol
Paste your smart contract code into the file
🔹 Step 2: Compile the Smart Contract
Go to the Solidity Compiler tab
Select compiler version 0.8.x
Click on Compile contract.sol
Ensure there are no compilation errors
🔹 Step 3: Configure MetaMask
Install and open MetaMask
Add the Polygon Amoy network using the configuration above
Switch your active network to Polygon Amoy
Make sure your wallet has test POL tokens from a faucet
🔹 Step 4: Connect Wallet to Remix
Open the Deploy & Run Transactions tab in Remix
Select Injected Provider - MetaMask as environment
Approve the connection request in MetaMask
🔹 Step 5: Deploy the Contract
Click on the Deploy button
Confirm the transaction in MetaMask
Wait for the transaction to be mined successfully
The deployed contract will appear under “Deployed Contracts”
🔹 Step 6: Verify on Blockchain Explorer
Copy the deployed contract address

Visit the Polygon explorer:
https://amoy.polygonscan.com
Paste the contract address to view transaction details and status

📍 Deployed Contract Address
0xed626229dF11B55eb6f1702a003261D7c46f19A9

📝 Additional Notes
Deployment requires gas fees paid in test POL tokens
Transactions may take a few seconds depending on network congestion
Smart contracts once deployed are immutable unless designed otherwise