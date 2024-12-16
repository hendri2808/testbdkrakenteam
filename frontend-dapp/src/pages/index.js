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
  const [selectedToken, setSelectedToken] = useState("MTK");
  const [tokenBalance, setTokenBalance] = useState("");
  const [convertedUSDC, setConvertedUSDC] = useState(0);
  const [convertedFIAT, setConvertedFIAT] = useState(0);

  useEffect(() => {
    console.log("Wallet connected:", address);
  }, [address]);

  // Fungsi untuk mendapatkan saldo token
  async function fetchTokenBalance() {
    try {
      const tokenAddress = deployAddresses[selectedToken];
      if (!tokenAddress) {
        alert("Invalid token selected.");
        return;
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.ready; // Pastikan provider siap

      const contract = new ethers.Contract(tokenAddress, MockERC20, provider);
      const balance = await contract.balanceOf(address);
      const formattedBalance = ethers.utils.formatUnits(balance, 18);
      setTokenBalance(formattedBalance);

      // Hitung konversi ke USDC dan FIAT
      const usdcRate = await fetchUSDCConversionRate();
      setConvertedUSDC(parseFloat(formattedBalance) * usdcRate);
      setConvertedFIAT(parseFloat(formattedBalance) * usdcRate);
      alert(`Your Balance: ${formattedBalance} ${selectedToken}`);
    } catch (error) {
      console.error("Error fetching token balance:", error);
      alert("Failed to fetch token balance.");
    }
  }

  // Fungsi untuk konversi nilai dari API Coingecko
  async function fetchUSDCConversionRate() {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=usd"
      );
      const data = await response.json();
      return data.tether.usd || 1;
    } catch (error) {
      console.error("Error fetching conversion rate:", error);
      return 1;
    }
  }

  // Fungsi untuk transfer token
  async function transferTokens() {
    try {
      if (!recipient || !amount) {
        alert("Please fill in all fields.");
        return;
      }

      const tokenAddress = deployAddresses[selectedToken];
      if (!tokenAddress) {
        alert("Invalid token selected.");
        return;
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.ready; // Tunggu provider siap

      const signer = provider.getSigner();
      const contract = new ethers.Contract(tokenAddress, MockERC20, signer);

      // Delay untuk memastikan transaksi nonce sinkron
      console.log("Preparing transaction...");
      const parsedAmount = ethers.utils.parseUnits(amount, 18);
      const tx = await contract.transfer(recipient, parsedAmount);
      await tx.wait(); // Tunggu konfirmasi transaksi
      alert("Transfer successful!");
    } catch (error) {
      console.error("Error transferring tokens:", error);
      alert("Failed to transfer tokens. Check console for details.");
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-gray-300 p-6">
      {/* Header */}
      <header className="flex items-center justify-center gap-4 mb-10">
        {/* Logo */}
        <div>
          <Image
            src="/kraken-logo.png"
            alt="Kraken logo"
            width={70}
            height={70}
            priority
          />
        </div>

        {/* Judul */}
        <div>
          <h1 className="text-4xl font-extrabold text-gray-800">
            Demo Transfer Token
          </h1>
          <p className="text-gray-600 mt-1">
            Aplikasi Sederhana untuk Transfer MTK
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col gap-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Wallet Connection */}
        {!address ? (
          <button
            onClick={connectWithMetamask}
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-200"
          >
            Connect Wallet
          </button>
        ) : (
          <div className="text-center">
            <p className="font-semibold text-gray-700 mb-2">
              Connected Wallet Address:
            </p>
            <code className="block bg-gray-100 text-gray-600 p-2 rounded-md">
              {address}
            </code>
          </div>
        )}

        {/* Input Fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-600">
              Recipient Address
            </label>
            <input
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="0xRecipientAddress"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600">
              Amount
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4">
          <button
            onClick={transferTokens}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-md transition duration-200"
          >
            Transfer Tokens
          </button>
          <button
            onClick={fetchTokenBalance}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md transition duration-200"
          >
            Fetch Token Balance
          </button>
        </div>

        {/* Display Balance */}
        {address && tokenBalance && (
          <div className="text-center mt-4">
            <p className="text-gray-700 font-bold">
              Your Balance: {tokenBalance} {selectedToken}
            </p>
            <p className="text-gray-600">~ {convertedUSDC} USDC</p>
            <p className="text-gray-600">~ {convertedFIAT} USD</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center mt-6 text-gray-500 text-sm">
        Made by: Kraken (a.k.a Hendri)
      </footer>
    </div>
  );
}
