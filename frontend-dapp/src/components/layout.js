"use client";

import { ThirdwebSDKProvider } from "@thirdweb-dev/react";

export default function RootLayout({ children }) {
  // Ambil Client ID dari environment variable
  const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID;

  // Validasi jika Client ID tidak ada
  if (!clientId) {
    console.error("Thirdweb Client ID not found. Please set the NEXT_PUBLIC_THIRDWEB_CLIENT_ID environment variable.");
    return <div>Error: Missing Thirdweb Client ID</div>; // Atau tampilkan pesan error yang lebih baik
  }

  const hardhatFork = {
    chainId: 31337, // ID dari Hardhat default network
    rpc: ["http://127.0.0.1:8545"], // Alamat RPC dari Hardhat node
    nativeCurrency: {
      name: "HardhatETH",
      symbol: "ETH",
      decimals: 18,
    },
    name: "Hardhat Fork Sepolia", // Nama custom untuk jaringan
  };

  return (
    <html lang="en">
      <body>
        <ThirdwebSDKProvider sdkOptions={{ clientId }} activeChain={hardhatFork}>
          {children}
        </ThirdwebSDKProvider>
      </body>
    </html>
  );
}
