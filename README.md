# Blockchain Developer Test

![image](https://github.com/user-attachments/assets/9889e53e-c262-4e16-a1cb-4ce3bcad561a)

This project is a result of the blockchain developer test assigned by **Nico Yudhanto** (<nico.yudhanto@anantla.com>) on **December 12, 2024**. The objective was to demonstrate blockchain development skills by completing the tasks listed in the test case. The project was completed on **December 15, 2024**, and update on **December 16, 2024** for final Result of the test.

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
- In this update, we added **persistent storage** locally by using **Hardhat's deploy and deployment scripts**. This ensures that the deployment data remains available across sessions.

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

3. **Persistent Deployment**:
   - Deployment scripts were updated to ensure contract deployments are saved persistently in the local storage.

4. **Frontend Features**:
   - Wallet connection via MetaMask.
   - Input fields for:
     - Recipient address.
     - Amount to transfer.
   - Display of:
     - Token balance.
     - Equivalent fiat values in USDC and USD.

---

## **How to Run Locally**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/hendri2808/testbdkrakenteam.git
   cd testbdkrakenteam
   ```

2. **Install Dependencies: Navigate to the frontend-dapp folder for the frontend**:

```bash
cd frontend-dapp
npm install
```

3. **Run the Project: Start all processes simultaneously**:

```bash
npm run start:all
```

4. **Mint Tokens: Run the minting script manually**:

```bash
npx hardhat run mintTokens.js --network localhost
Access the UI: Open http://localhost:3000 in your browser.
```

---

## **Demo Application Flow**

1. **Start the application**:
```bash
npm run start:all
```

2. **Run the minting script**:
```bash
npx hardhat run mintTokens.js --network localhost
```

3. **Open the browser and visit**:
```arduino
http://localhost:3000
```

4. **Test features**:
- Connect Wallet using MetaMask.
- Fetch Token Balance.
- Execute token transfers.
- View balance converted to USDC and USD.

---

## **Troubleshooting**

### **Updated Flow for Troubleshooting**:

1. **Run all services**:
```bash
npm run start:all
```

2. **Mint tokens: Run the script**:

```bash
npx hardhat run mintTokens.js --network localhost
```

3. **Access UI: Open the frontend**:
```bash
http://localhost:3000
```

4. **Verify the flow**:
- Connect Wallet.
- Fetch Balance.
- Test Token Transfer.
- Verify USD and USDC conversion.

5. **Deployment Notes**:
- Ensure ABI and contract addresses are updated in the frontend after redeployment.
- Update deployAddress.json and abis.js files if the contract address changes.

---

## **Conclusion**
This update introduces persistent storage for local deployments and streamlines the troubleshoot workflow. It ensures the development and testing flow is smooth, reliable, and replicable.

Cheers,
Kraken (a.k.a Hendri)

---

## **Snapshot Library**

1. **Connect Wallet**:
   - ![image](https://github.com/user-attachments/assets/c70108eb-340f-43bc-ab32-ae4bb4a18a65)
   - ![image](https://github.com/user-attachments/assets/a1f7db57-4435-4842-9456-fee7d2d7032e)

2. **Fetch Balance & Conversion USDC,USD**:
   - ![image](https://github.com/user-attachments/assets/3cb1805b-5678-4a45-a5d8-b1ac224ddc8f)
   - ![image](https://github.com/user-attachments/assets/59572122-c606-4bc3-b065-c1b658d4d780)
   - ![image](https://github.com/user-attachments/assets/0c259781-fe23-48b6-b7af-705d487196b7)

3. **Transfer Token on Local Harhat Sepolia Fork**
   - ![image](https://github.com/user-attachments/assets/7ee7d023-02d6-44b2-b3f7-2c033c6e1319)
   - ![image](https://github.com/user-attachments/assets/2fd6a758-480c-4113-99b3-625c2b229b77)
   - ![image](https://github.com/user-attachments/assets/4f27eb9e-a28c-4095-949b-b399fc31204a)
   - ![image](https://github.com/user-attachments/assets/8ed867e6-237a-4781-9634-7cf2d82574f8)
   - ![image](https://github.com/user-attachments/assets/bb931caa-7f0a-40ae-a4b7-299b350b3190)
   - ![image](https://github.com/user-attachments/assets/5f0a9bb4-23f3-444a-8c33-cbff4f516f57)






