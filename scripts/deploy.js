async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const MockERC20 = await ethers.getContractFactory("MockERC20");
  const mockERC20 = await MockERC20.deploy("MyToken", "MTK", ethers.utils.parseUnits("1000", 18));
  await mockERC20.deployed();
  console.log("MockERC20 deployed to:", mockERC20.address);

  const TokenTransfer = await ethers.getContractFactory("TokenTransfer");
  const tokenTransfer = await TokenTransfer.deploy();
  await tokenTransfer.deployed();
  console.log("TokenTransfer deployed to:", tokenTransfer.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
