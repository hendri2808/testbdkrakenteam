"use client";

import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css"; // Tambahkan style jika diperlukan

const hardhatFork = {
  chainId: 31337, // Hardhat Network
  rpc: "http://127.0.0.1:8545", // URL RPC dari Hardhat node
  nativeCurrency: {
    name: "HardhatETH",
    symbol: "ETH",
    decimals: 18,
  },
  name: "Hardhat Fork Sepolia",
};

export default function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      supportedChains={[hardhatFork]} // Tambahkan jaringan
      activeChain={hardhatFork} // Atur sebagai chain aktif
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}
