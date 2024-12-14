"use client";

import React, { useState } from "react";
import WalletConnect from "../components/WalletConnect";
import ErrorBoundary from "../components/ErrorBoundary";
import { getContractInstance } from "../utils/web3";
import { MockERC20ABI, TokenTransferABI } from "../abis/abis";
import deployAddress from "../abis/deployAddress.json";
import { ethers } from "ethers";

const Home = () => {
  const [connectedAccount, setConnectedAccount] = useState(null);
  const [tokenBalance, setTokenBalance] = useState(0);
  const [transferAmount, setTransferAmount] = useState("");
  const [recipient, setRecipient] = useState("");

const fetchBalance = async () => {
  try {
    const contract = await getContractInstance(MockERC20ABI, deployAddress.MockERC20);
    const balance = await contract.balanceOf(connectedAccount);
    const decimals = await contract.decimals(); // Ambil desimal dari token
    setTokenBalance(ethers.utils.formatUnits(balance, decimals)); // Konversi dari WEI ke token unit
  } catch (error) {
    console.error("Failed to fetch balance:", error);
  }
};


  const transferTokens = async () => {
    const contract = await getContractInstance(TokenTransferABI, deployAddress.TokenTransfer);
    const tx = await contract.transferToken(
      deployAddress.MockERC20,
      recipient,
      ethers.utils.parseEther(transferAmount)
    );
    await tx.wait();
    alert("Transfer successful!");
  };

  return (
    <ErrorBoundary>
      <div>
        <WalletConnect onWalletConnected={setConnectedAccount} />
        {connectedAccount && (
          <>
            <p>Token Balance: {tokenBalance}</p>
            <button onClick={fetchBalance}>Fetch Balance</button>
            <div>
              <input
                type="text"
                placeholder="Amount"
                value={transferAmount}
                onChange={(e) => setTransferAmount(e.target.value)}
              />
              <input
                type="text"
                placeholder="Recipient Address"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
              />
              <button onClick={transferTokens}>Transfer</button>
            </div>
          </>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default Home;
