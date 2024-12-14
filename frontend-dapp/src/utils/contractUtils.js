// src/utils/contractUtils.js
import { MockERC20ABI, TokenTransferABI } from './abis';
import addresses from './deployAddress.json';
import { ethers } from 'ethers';

export function getContractInstance(contractName, providerOrSigner) {
  const abi =
    contractName === 'MockERC20' ? MockERC20ABI : TokenTransferABI;
  const address = addresses[contractName];

  if (!address) {
    throw new Error(`Contract ${contractName} is not deployed on this network.`);
  }

  return new ethers.Contract(address, abi, providerOrSigner);
}
