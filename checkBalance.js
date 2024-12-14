const { ethers } = require("ethers");

// Konfigurasi provider dari Hardhat
const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");

// ABI untuk kontrak MockERC20
const abi = [
  {
    "inputs": [
      { "internalType": "address", "name": "account", "type": "address" }
    ],
    "name": "balanceOf",
    "outputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

// Alamat kontrak dan wallet
const contractAddress = "0x0946C0490bA465e995Af6B0BAd5F2316E4C6B7B8"; // Ganti dengan alamat MockERC20 terbaru
const walletAddress = "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"; // Ganti dengan alamat wallet dari MetaMask

// Fungsi untuk mengecek saldo
async function checkBalance() {
  try {
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const balance = await contract.balanceOf(walletAddress);
    console.log(`Balance: ${ethers.utils.formatUnits(balance, 18)} MTK`);
  } catch (error) {
    console.error("Error checking balance:", error.message);
  }
}

// Panggil fungsi
checkBalance();
