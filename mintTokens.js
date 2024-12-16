const { ethers } = require("hardhat");

async function main() {
  const [owner] = await ethers.getSigners(); // Ambil address pertama di Hardhat node

  // Alamat MockERC20 di Hardhat
  const mockERC20Address = "0x18e56c4717e2e5ff74a23a8e05e9d4cd5f165e3e";

  // ABI dari MockERC20
  const mockERC20ABI = [
    "function mint(address to, uint256 amount) public",
    "function balanceOf(address account) public view returns (uint256)"
  ];

  // Buat instance kontrak MockERC20
  const mockERC20 = new ethers.Contract(mockERC20Address, mockERC20ABI, owner);

  // Address tujuan (yang akan menerima token)
  const recipient = "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC";

  // Jumlah token (dalam satuan wei, sesuai decimals)
  const amount = ethers.utils.parseUnits("1000", 18); // 1000 MTK

  console.log("Minting token...");
  const tx = await mockERC20.mint(recipient, amount);
  await tx.wait();
  console.log("Minting berhasil!");

  // Cek saldo
  const balance = await mockERC20.balanceOf(recipient);
  console.log(`Balance of recipient: ${ethers.utils.formatUnits(balance, 18)} MTK`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
