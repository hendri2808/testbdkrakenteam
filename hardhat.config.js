require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("hardhat-deploy");

module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      saveDeployments: true, // Menyimpan state deployment agar persist
      forking: {
        url: process.env.ALCHEMY_SEPOLIA_URL, // Fork dari jaringan Sepolia
      },
      accounts: [
        {
          privateKey: process.env.OWNER_PRIVATE_KEY,
          balance: "1000000000000000000000000", // 1,000,000 ETH
        },
        {
          privateKey: process.env.TEST1_PRIVATE_KEY,
          balance: "1000000000000000000000", // 1,000 ETH
        },
        {
          privateKey: process.env.TEST2_PRIVATE_KEY,
          balance: "1000000000000000000000", // 1,000 ETH
        },
      ],
      chainId: 31337, // Tetap gunakan ID chain Hardhat
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      saveDeployments: true,
    },
  },
  namedAccounts: {
    deployer: {
      default: 0, // Akun pertama sebagai deployer
    },
    test1: {
      default: 1, // Akun kedua
    },
    test2: {
      default: 2, // Akun ketiga
    },
  },
};
