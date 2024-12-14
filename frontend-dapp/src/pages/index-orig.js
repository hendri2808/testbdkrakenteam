"use client";

import { useState, useEffect } from "react";
import { useMetamask, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import { ethers } from "ethers";
import { MockERC20 } from "../utils/abis";
import deployAddresses from "../utils/deployAddress.json";

export default function Home() {
  const connectWithMetamask = useMetamask(); 
  const address = useAddress(); 

  const [recipient, setRecipient] = useState(""); 
  const [amount, setAmount] = useState(""); 
  const [tokenBalance, setTokenBalance] = useState(""); 
  const [convertedUSDC, setConvertedUSDC] = useState(0); 
  const [convertedFIAT, setConvertedFIAT] = useState(0); 

  // ** Ambil harga MTK dari Coingecko API **
  useEffect(() => {
    async function fetchConversionRate() {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=usd"
        );
        const data = await response.json();
        const usdtPrice = data.tether.usd || 1; 
        const mtkToUSD = parseFloat(amount || "0"); 
        setConvertedUSDC(mtkToUSD * usdtPrice); 
        setConvertedFIAT(mtkToUSD * usdtPrice); 
      } catch (error) {
        console.error("Error fetching conversion rate:", error);
      }
    }
    fetchConversionRate();
  }, [amount]);

  // ** Fungsi untuk Fetch Token Balance **
  async function fetchTokenBalance() {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        deployAddresses.MTK, 
        MockERC20, 
        provider
      );

      const balance = await contract.balanceOf(address);
      const formattedBalance = ethers.utils.formatUnits(balance, 18);
      setTokenBalance(formattedBalance);
      alert(`Your Balance: ${formattedBalance} MTK`);
    } catch (error) {
      console.error("Error fetching token balance:", error);
      alert("Failed to fetch token balance.");
    }
  }

  // ** Fungsi untuk Transfer Token **
  async function transferTokens() {
    try {
      if (!recipient || !amount) {
        alert("Please fill in all fields.");
        return;
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        deployAddresses.MTK, 
        MockERC20, 
        signer
      );

      const parsedAmount = ethers.utils.parseUnits(amount, 18);
      const tx = await contract.transfer(recipient, parsedAmount);
      console.log("Transfer successful:", tx);
      alert("Transfer successful!");
    } catch (error) {
      console.error("Error transferring tokens:", error);
      alert("Failed to transfer tokens. Check console for details.");
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-gray-50 p-8">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-4">Selamat Datang!</h1>
        <p className="text-lg text-gray-600">Demo Transfer Token</p>
      </header>

      <main className="flex flex-col items-center gap-6 w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <Image
          src="/kraken-logo.png"
          alt="Kraken logo"
          width={50}
          height={50}
          priority
          className="mb-4"
        />

        {!address ? (
          <button
            onClick={connectWithMetamask}
            className="rounded-lg bg-blue-500 text-white px-12 py-3 text-lg font-semibold hover:bg-blue-600 transition"
          >
            Connect Wallet
          </button>
        ) : (
          <div className="text-center">
            <p className="text-gray-800 mb-2">Connected Wallet Address:</p>
            <code className="block bg-gray-100 text-gray-800 p-2 rounded-md">
              {address}
            </code>
          </div>
        )}

        <div className="w-full flex flex-col gap-4">
          <label className="text-sm font-semibold text-gray-600">
            Recipient Address:
          </label>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="0xRecipientAddress"
            className="p-2 border rounded-lg"
          />

          <label className="text-sm font-semibold text-gray-600">
            Amount:
          </label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="p-2 border rounded-lg"
          />

          <button
            onClick={transferTokens}
            className="rounded-lg bg-red-500 text-white px-8 py-2 text-lg font-semibold hover:bg-red-600 transition"
          >
            Transfer Tokens
          </button>

          <button
            onClick={fetchTokenBalance}
            className="rounded-lg bg-green-500 text-white px-8 py-2 text-lg font-semibold hover:bg-green-600 transition"
          >
            Fetch Token Balance
          </button>
        </div>

        {address && tokenBalance && (
          <div className="text-center mt-4">
            <p className="text-gray-800 font-bold">Your Balance:</p>
            <p className="text-lg">{tokenBalance} MTK</p>
            <p className="text-sm text-gray-600">~ {convertedUSDC} USDC</p>
            <p className="text-sm text-gray-600">~ {convertedFIAT} USD</p>
          </div>
        )}
      </main>

      <footer className="text-center mt-12">
        <p className="text-xs font-bold text-gray-700">
          Made by: Kraken (a.k.a Hendri)
        </p>
      </footer>
    </div>
  );
}
