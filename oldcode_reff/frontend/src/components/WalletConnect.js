import React, { useState } from "react";
import { connectToBlockchain } from "../utils/web3";

const WalletConnect = ({ onWalletConnected }) => {
    const [account, setAccount] = useState(null);
    const [error, setError] = useState(null);

    const connectWallet = async () => {
        try {
            const { provider, signer } = await connectToBlockchain();
            const accounts = await provider.listAccounts();
            setAccount(accounts[0]);
            onWalletConnected(accounts[0]);
            setError(null); // Clear any errors
        } catch (err) {
            console.error("Failed to connect wallet:", err);
            setError(err.message || "Failed to connect to the blockchain.");
        }
    };

    return (
        <div>
            {account ? (
                <p>Connected Account: {account}</p>
            ) : (
                <button onClick={connectWallet}>Connect Wallet</button>
            )}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default WalletConnect;
