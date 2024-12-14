import { ethers } from "ethers";

console.log("Ethers Library:", ethers);

export async function connectToBlockchain() {
    if (!window.ethereum) {
        throw new Error("MetaMask is not installed");
    }

    console.log("Window Ethereum:", window.ethereum);

    await window.ethereum.request({ method: "eth_requestAccounts" });

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log("Provider:", provider);

    const signer = provider.getSigner();
    console.log("Signer Address:", await signer.getAddress());

    return { provider, signer };
}

export const getContractInstance = async (abi, address) => {
    const { signer } = await connectToBlockchain();
    return new ethers.Contract(address, abi, signer);
};
