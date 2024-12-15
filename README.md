# Blockchain Developer Test

This project is a result of the blockchain developer test assigned by **Nico Yudhanto** (<nico.yudhanto@anantla.com>) on **December 12, 2024**. The objective was to demonstrate blockchain development skills by completing the tasks listed in the test case. The project was completed on **December 15, 2024**.
This test was carried out by Kraken (a.k.a Hendri) himself for 2 days.

---

## **Test Case**

### **Requirements**
1. **Blockchain Integration**:
   - Use Ethereum or another EVM-compatible blockchain.
   - Create a smart contract to handle token transfers (e.g., USDT/USDC).

2. **Stablecoin Support**:
   - Interact with testnet versions of USDT or USDC.
   - Implement a feature for a user to specify the amount and destination wallet address for the transfer.

3. **Fiat Conversion**:
   - Simulate fiat conversion rates (hardcoded or fetched from a mock API).
   - Show the equivalent fiat value of the transferred amount in the UI.

4. **Frontend**:
   - Build a simple React/Next.js interface to interact with the smart contract.
   - Include:
     - Wallet connection (e.g., MetaMask, Trust Wallet).
     - Input fields for token amount, recipient address, and fiat equivalent.

5. **Backend (Optional)**:
   - Use Node.js/NestJS to manage fiat conversion logic and simulate API communication for rates.

6. **Deployment**:
   - Deploy the smart contract to a testnet (e.g., Goerli or Sepolia).
   - Host the frontend on a platform like Vercel or Netlify.

---

## **Project Deliverables**

### **Source Code**
- GitHub repository: [testbdkrakenteam](https://github.com/hendri2808/testbdkrakenteam)

### **Frontend Deployment**
- Hosted frontend on Netlify: [Kraken Team Demo](https://demokrakenteam.netlify.app/)

### **Smart Contract Deployment**
- Due to the lack of access to Sepolia faucet tokens, the smart contract was not deployed to a testnet. Instead, we utilized **Hardhat Forking** to fork the Sepolia blockchain locally. This allowed us to simulate a realistic blockchain environment for development and testing.

---

## **Project Details**

### **Tools and Technologies Used**
1. **Languages**:
   - Solidity: Smart contract development.
   - JavaScript/React.js: Frontend development.
   - Node.js: Backend integration.
   
2. **Frameworks**:
   - **Hardhat**: For compiling, deploying, and testing smart contracts. Also used for forking Sepolia blockchain.
   - **Next.js**: For building the React-based frontend application.

3. **Dependencies**:
   - `ethers.js`: For interacting with Ethereum blockchain and smart contracts.
   - `@thirdweb-dev/react`: For MetaMask wallet integration.
   - `TailwindCSS`: For styling the user interface.
   - `coingecko-api`: Used for fetching the live USDT-to-USD conversion rate.

4. **Blockchain Environment**:
   - Local blockchain created using **Hardhat Forking** (forking Sepolia).

5. **Wallet**:
   - MetaMask was used for user wallet connection and transaction signing.

---

### **Features Implemented**
1. **Token Transfer**:
   - A smart contract (`MockERC20`) was developed to handle the token transfer functionality.
   - Users can specify:
     - Token amount.
     - Recipient wallet address.
   - Transactions are signed via MetaMask.

2. **Token to Fiat Conversion**:
   - The UI displays the equivalent USDC and USD value for the token balance.
   - Conversion assumes 1 MTK = 1 USDT for simplicity.

3. **Frontend Features**:
   - Wallet connection via MetaMask.
   - Input fields for:
     - Recipient address.
     - Amount to transfer.
   - Display of:
     - Token balance.
     - Equivalent fiat values in USDC and USD.

4. **Backend (Simulated)**:
   - Fiat conversion rates are fetched from **CoinGecko API**.
   - USDT/USD pairing is hardcoded as 1:1 for simplicity in token-to-fiat conversion.

---

### **Challenges Faced**
1. **Testnet Deployment**:
   - The smart contract could not be deployed to Sepolia testnet due to the lack of Sepolia faucet tokens. A minimum of 0.001 ETH is required to execute contract deployments and interact with the testnet.
   - Attempts to obtain tokens via Discord community support were unsuccessful.

2. **Solution**:
   - Hardhat Forking was used to simulate the Sepolia blockchain locally, providing an environment similar to the actual blockchain for development and testing.

---

### **How to Run Locally**

1. **Clone the Repository**:
```
git clone https://github.com/hendri2808/testbdkrakenteam.git
cd testbdkrakenteam
```

2. **Install Dependencies**:
Navigate to the frontend-dapp folder for the frontend:

```
cd frontend-dapp
npm install
```

3. **Run Hardhat Node**:
Start a local blockchain fork:
```
npx hardhat node
```

4. **Deploy Smart Contracts**:
Deploy the MockERC20 contract:
```
npx hardhat run scripts/deploy.js --network localhost
```

5. **Run the Frontend**:
Start the development server:
```
npm run dev
```
Open http://localhost:3000 in your browser.

---

### **Demo Application Flow**

1. Connect your wallet using MetaMask.
2. View your current token balance.
3. Enter:
- Recipient address.
- Amount to transfer.
4. View the fiat equivalent of your token balance in USDC and USD.
5. Execute a token transfer.

---

### **Approach and Tools Used**

1. **Smart Contract Development**:
Created a basic ERC-20 token contract (MockERC20) to simulate stablecoin transfers.
Deployed locally using Hardhat.

2. **Frontend Development**:
Used React/Next.js to create a user-friendly interface.
Integrated wallet connection and smart contract interaction.

3. **Fiat Conversion**:
Used CoinGecko API to fetch the latest USDT/USD rate.
Simulated fiat conversion in the frontend.

4. **Blockchain Simulation**:
Hardhat Forking provided a reliable test environment without requiring actual ETH for deployment.

---

### **Conclusion**
This project demonstrates the ability to integrate blockchain functionality into a complete DApp solution. Key features include smart contract development, wallet integration, token transfer functionality, and fiat conversion. While the absence of Sepolia faucet tokens limited testnet deployment, Hardhat Forking enabled a realistic testing environment.
The project is fully functional and meets the requirements outlined in the test case. It is hosted on Netlify for easy access: [Kraken Team Demo](https://demokrakenteam.netlify.app/)
For any questions or feedback, please feel free to reach out.

---

## Notes for the Reviewer:

This demo application uses **Hardhat Local Network** for testing purposes. Due to the nature of Hardhat, all data (including token balances) resets when the node restarts. To ensure the application works properly, please follow these steps:

1. **Start Hardhat Node**:
```
   npx hardhat node
```

2. **Re-Deploy the Smart Contract: Run the script to deploy the smart contract**:
```
npx hardhat run scripts/deploy.js --network localhost
```

3. **Mint Tokens: After deployment, run the minting script to distribute tokens**:
```
npx hardhat run scripts/mint.js --network localhost
```

4. **Run the Frontend: Start the frontend and connect the wallet to Hardhat Local Network**:
```
npm run dev
```

5. **Test the Application**:
Connect Wallet using MetaMask.
Fetch Token Balance and verify the UI displays the balance and conversion rates.
Perform token transfers as described.

---

## Troubleshooting:

- "Failed to fetch token balance": Ensure the smart contract is deployed and tokens are minted.

Make sure your hardhat running:
```
npx hardhat node
```

use script for mint on hardhat, exampel:
```
// mintTokens.js
async function main() {
  const [deployer] = await ethers.getSigners();

  const Token = await ethers.getContractFactory("YourTokenName");
  const token = await Token.attach("NEW_ADDRESS_CONTRACT");

  // Mint token to wallet
  const recipient = "YOUR_WALLET_ADDRESS"; 
  const amount = ethers.utils.parseUnits("1000", 18); // Mint 1000 token

  const tx = await token.mint(recipient, amount);
  await tx.wait();

  console.log(`Minted 1000 tokens to ${recipient}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
```

Then, you can do the minting. Run the minting
```
$ npx hardhat run mintTokens.js --network localhost
```

- "Hardhat node reset": Restart the steps from deploying the contract to minting tokens.


Cheers,
Kraken
