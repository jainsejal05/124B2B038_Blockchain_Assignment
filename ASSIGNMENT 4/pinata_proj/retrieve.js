const axios = require("axios");

const CID = "Qma1w3UWh2PJ7wtPGcuxADcEfWGQsngvH8d53hB55u8Ms3";

async function retrieveFile() {
    try {
        const url = `https://gateway.pinata.cloud/ipfs/${CID}`;
        const res = await axios.get(url);

        console.log("File content:");
        console.log(res.data);

    } catch (error) {
        console.error("Error retrieving file:", error.message);
    }
}

retrieveFile();