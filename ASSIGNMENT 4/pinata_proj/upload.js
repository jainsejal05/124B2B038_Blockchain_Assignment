const fs = require("fs");
const axios = require("axios");
const FormData = require("form-data");

const PINATA_API_KEY = "5469a4cc96df7d8b6c17";
const PINATA_SECRET_KEY = "b3110b42c3aed30528afa6583e255e54694f729d786aedddeef951ee9c5793a6";


async function uploadFile() {
    try {
        const data = new FormData();
        data.append("file", fs.createReadStream("./sample.txt"));

        const res = await axios.post(
            "https://api.pinata.cloud/pinning/pinFileToIPFS",
            data,
            {
                maxBodyLength: "Infinity",
                headers: {
                    ...data.getHeaders(),
                    pinata_api_key: PINATA_API_KEY,
                    pinata_secret_api_key: PINATA_SECRET_KEY
                }
            }
        );

        console.log("File uploaded successfully!");
        console.log("CID:", res.data.IpfsHash);

    } catch (error) {
        console.error("Error uploading file:", error.message);
    }
}

uploadFile();