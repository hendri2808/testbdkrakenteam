const { ethers } = require("ethers");

// Import ABI dan alamat kontrak
const mockERC20Abi = require("./frontend-dapp/src/utils/abis").MockERC20;
const deployAddresses = require("./frontend-dapp/src/utils/deployAddress.json");

async function testContract() {
    const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545"); // Koneksi ke Hardhat RPC
    const contractAddress = deployAddresses.MockERC20; // Alamat MockERC20
    const walletAddress = "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"; // Ganti dengan alamat wallet kamu

    // Inisialisasi kontrak menggunakan ethers.js
    const contract = new ethers.Contract(contractAddress, mockERC20Abi, provider);

    try {
        // Fetch balance dari kontrak
        const balance = await contract.balanceOf(walletAddress);
        console.log("Balance:", ethers.utils.formatUnits(balance, 18), "MTK");
    } catch (error) {
        console.error("Error fetching balance:", error);
    }
}

testContract();
