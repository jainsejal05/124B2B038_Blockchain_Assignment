Assignment 4: IPFS Integration
Objective

The objective of this assignment is to implement decentralized file storage using IPFS by uploading and retrieving files through a Node.js-based application. This helps in understanding how distributed storage works compared to traditional centralized systems.

Description

This project demonstrates how files can be stored on the IPFS network using the Pinata pinning service and later accessed using a unique Content Identifier (CID).
Instead of storing files on a single server, the data is distributed across multiple nodes, making it more secure and reliable.

IPFS Service Used
Pinata (IPFS pinning service)
IPFS Gateway for file retrieval
Libraries Used
axios → Used for making HTTP requests to Pinata API
form-data → Helps in handling multipart file uploads
fs (File System) → Reads files from the local system

Project Structure
assignment-4/
│── upload.js
│── retrieve.js
│── sample.txt
│── README.md
│── screenshot/
│── package.json

How Files Are Stored
1. The file is first read using the Node.js fs module
2. It is then sent to the Pinata API using axios
3. Pinata uploads (pins) the file to the IPFS network
4. A unique CID (Content Identifier) is generated for that file
5. This CID acts as a permanent reference to access the file

How Files Are Retrieved
1. The generated CID is used as an identifier
2. A request is made to the IPFS gateway
3. The file is fetched from the decentralized IPFS network
4. The content is displayed in the console or browser
5. IPFS Gateway Used

https://gateway.pinata.cloud/ipfs/Qma1w3UWh2PJ7wtPGcuxADcEfWGQsngvH8d53hB55u8Ms3

CID

CID: Qma1w3UWh2PJ7wtPGcuxADcEfWGQsngvH8d53hB55u8Ms3

Additional Notes
The CID is generated based on the file content, so even a small change will produce a different CID
Files stored on IPFS are immutable (cannot be modified after upload)
Pinata ensures availability of files by keeping them pinned on the network
This approach eliminates dependency on centralized storage systems
