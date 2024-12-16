const { network } = require("hardhat");

async function main() {
  console.log("Creating EVM snapshot...");
  
  // Membuat snapshot
  const snapshotId = await network.provider.request({
    method: "evm_snapshot",
    params: [],
  });

  console.log(`Snapshot created. ID: ${snapshotId}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
