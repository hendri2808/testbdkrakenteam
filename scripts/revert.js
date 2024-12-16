const { network } = require("hardhat");

async function main() {
  const snapshotId = "0x4"; // Ganti dengan ID snapshot yang dibuat sebelumnya
  
  console.log(`Reverting to snapshot ID: ${snapshotId}...`);
  
  await network.provider.request({
    method: "evm_revert",
    params: [snapshotId],
  });

  console.log("Reverted to snapshot.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
