"use client";

import { useState } from "react";
import { useMetamask, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import { ethers } from "ethers";
import { MockERC20 } from "../utils/abis";
import deployAddresses from "../utils/deployAddress.json";

export default function Home() {
  const connectWithMetamask = useMetamask(); // Koneksi MetaMask
  const address = useAddress(); // Alamat Wallet

  // State untuk input pengguna
  const [recipient, setRecipient] = useState(""); // Alamat penerima
  const [amount, setAmount] = useState(""); // Jumlah token
  const [selectedToken, setSelectedToken] = useState("MTK"); // Token yang dipilih
  const [tokenBalance, setTokenBalance] = useState(""); // Saldo token
  const [convertedUSDC, setConvertedUSDC] = useState(0); // Konversi ke USDC
  const [convertedFIAT, setConvertedFIAT] = useState(0); // Konversi ke FIAT

  // Fungsi untuk mendapatkan saldo token
  async function fetchTokenBalance() {
    try {
      const tokenAddress = deployAddresses[selectedToken];
      if (!tokenAddress) {
        alert("Invalid token selected.");
        return;
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(tokenAddress, MockERC20, provider);

      const balance = await contract.balanceOf(address);
      const formattedBalance = ethers.utils.formatUnits(balance, 18);
      setTokenBalance(formattedBalance);

      // ** Hitung konversi ke USDC dan FIAT **
      const usdcRate = await fetchUSDCConversionRate();
      const fiatRate = usdcRate; // Dalam kasus ini, kita asumsikan FIAT sama dengan USDC
      setConvertedUSDC(parseFloat(formattedBalance) * usdcRate);
      setConvertedFIAT(parseFloat(formattedBalance) * fiatRate);

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
      return data.tether.usd || 1; // Jika gagal, gunakan default 1
    } catch (error) {
      console.error("Error fetching conversion rate:", error);
      return 1; // Gunakan default 1 jika API gagal
    }
  }

  // Fungsi untuk transfer token
  async function transferTokens() {
    console.log("Transfer tokens clicked");
    console.log("Selected Token:", selectedToken);

    try {
      if (!recipient || !amount) {
        alert("Please fill in all fields.");
        return;
      }

      const tokenAddress = deployAddresses[selectedToken];
      console.log("Token Address:", tokenAddress);

      if (!tokenAddress) {
        alert("Invalid token selected.");
        return;
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(tokenAddress, MockERC20, signer);

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
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-4">Selamat Datang!</h1>
        <p className="text-lg text-gray-600">Demo Transfer Token</p>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center gap-6 w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        {/* Logo */}
        <Image
          src="/kraken-logo.png"
          alt="Kraken logo"
          width={50}
          height={50}
          priority
          className="mb-4"
        />

        {/* Wallet Connection */}
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

        {/* Form Input Transfer */}
        <div className="w-full flex flex-col gap-4">
          {/* Input Alamat Penerima */}
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

          {/* Input Jumlah Token */}
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

          {/* Tombol Transfer */}
          <button
            onClick={transferTokens}
            className="rounded-lg bg-red-500 text-white px-8 py-2 text-lg font-semibold hover:bg-red-600 transition"
          >
            Transfer Tokens
          </button>

          {/* Tombol Fetch Balance */}
          <button
            onClick={fetchTokenBalance}
            className="rounded-lg bg-green-500 text-white px-8 py-2 text-lg font-semibold hover:bg-green-600 transition"
          >
            Fetch Token Balance
          </button>
        </div>

        {/* Display Balance */}
        {address && tokenBalance && (
          <div className="text-center mt-4">
            <p className="text-gray-800 font-bold">Your Balance:</p>
            <p className="text-lg">{tokenBalance} {selectedToken}</p>
            <p className="text-sm text-gray-600">~ {convertedUSDC} USDC</p>
            <p className="text-sm text-gray-600">~ {convertedFIAT} USD</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center mt-12">
        <p className="text-xs font-bold text-gray-700">
          Made by: Kraken (a.k.a Hendri)
        </p>
      </footer>
    </div>
  );
}
