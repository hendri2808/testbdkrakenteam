module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, get } = deployments;
  const { deployer } = await getNamedAccounts();

  // Cek jika sudah ada deployment sebelumnya
  const existingDeployment = await get("MockERC20").catch(() => null);

  if (!existingDeployment) {
    console.log("Deploying MockERC20 contract with the account:", deployer);

    await deploy("MockERC20", {
      from: deployer,
      args: ["Mock Token", "MTK", ethers.utils.parseUnits("1000000", 18)],
      log: true,
    });

    console.log("MockERC20 deployed successfully!");
  } else {
    console.log("MockERC20 already deployed at:", existingDeployment.address);
  }
};
