/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    hardhat: {
      forking: {
        url: process.env.ALCHEMY_SEPOLIA_URL,
      },
      accounts: [
        {
          privateKey: process.env.OWNER_PRIVATE_KEY,
          balance: "1000000000000000000000000", // 1,000,000 ETH for owner
          tokens: "100000000000000000000000" // 100,000 tokens
        },
        {
          privateKey: process.env.TEST1_PRIVATE_KEY,
          balance: "1000000000000000000000", // 1,000 ETH for test account 1
          tokens: "10000000000000000000000" // 10,000 tokens
        },
        {
          privateKey: process.env.TEST2_PRIVATE_KEY,
          balance: "1000000000000000000000", // 1,000 ETH for test account 2
          tokens: "10000000000000000000000" // 10,000 tokens
        },
      ],
    },
  },
};
