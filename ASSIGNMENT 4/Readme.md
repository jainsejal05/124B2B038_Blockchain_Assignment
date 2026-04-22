🚀 Assignment 4: IPFS Integration

🎯 Objective
The objective of this assignment is to implement decentralized file storage using IPFS by uploading and retrieving files through a Node.js-based application.
This helps in understanding how distributed storage works compared to traditional centralized systems.

📖 Description
This project demonstrates how files can be stored on the IPFS network using Pinata and later accessed using a unique Content Identifier (CID).
Instead of storing files on a single server, the data is distributed across multiple nodes, making it more secure, scalable, and reliable.

🌐 IPFS Services Used
🔹 Pinata (IPFS pinning service)
🔹 IPFS Gateway for file retrieval

🛠️ Libraries Used
📌 axios → Used for making HTTP requests to Pinata API
📌 form-data → Helps in handling multipart file uploads
📌 fs (File System) → Reads files from the local system

📂 Project Structure
assignment-4/
│── upload.js
│── retrieve.js
│── sample.txt
│── README.md
│── screenshot/
│── package.json

📤 How Files Are Stored
📄 The file is first read using the Node.js fs module
🔗 It is then sent to the Pinata API using axios
☁️ Pinata uploads (pins) the file to the IPFS network
🔑 A unique CID (Content Identifier) is generated
📌 This CID acts as a permanent reference to access the file

📥 How Files Are Retrieved
🔍 The generated CID is used as an identifier
🌐 A request is made to the IPFS gateway
📡 The file is fetched from the decentralized network
🖥️ The content is displayed in the console or browser
🌍 IPFS Gateway Used
🔗 https://gateway.pinata.cloud/ipfs/Qma1w3UWh2PJ7wtPGcuxADcEfWGQsngvH8d53hB55u8Ms3

🧠 What is CID?
A Content Identifier (CID) is a unique hash generated for a file stored on IPFS.
It is based on the file’s content, so even a small change in the file creates a different CID.
CIDs allow files to be retrieved from decentralized networks without relying on a specific location or server.

🔑 CID
Qma1w3UWh2PJ7wtPGcuxADcEfWGQsngvH8d53hB55u8Ms3
