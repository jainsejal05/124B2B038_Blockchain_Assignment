📄 Smart Contract Documentation
🔍 Overview

This smart contract is designed to store and retrieve a numeric value on the blockchain. It serves as a simple example to understand core Solidity concepts like state variables, writing data, and reading data from the contract.

⚙️ Core Functionalities
Function	Purpose
set(uint256 value)	Saves a number to the blockchain
get()	Fetches the currently stored number

🧠 How It Works
The contract maintains a single state variable.
When set() is called, the value is permanently stored on-chain.
The get() function allows anyone to read the stored value.

🚀 Deployment Guide (Using Remix)
1. Open Remix IDE in your browser.
2. Create a new file (e.g., SimpleStorage.sol).
3. Paste your smart contract code into the file.
4. Compile the contract using Solidity version 0.8.x.
5. Navigate to the Deploy & Run Transactions tab.
6. Select Injected Provider - MetaMask as the environment.
7. Connect your wallet and ensure the correct network is selected.
8. Click Deploy and confirm the transaction in MetaMask.

📝 Notes
The stored value remains on the blockchain until updated.
Reading data (get()) does not require gas.
Writing data (set()) requires a transaction fee.