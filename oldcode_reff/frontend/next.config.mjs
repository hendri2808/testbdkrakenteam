/** @type {import('next').NextConfig} */
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import dotenv from 'dotenv';

// Simulate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env from root folder
dotenv.config({ path: resolve(__dirname, '../.env') });

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    ALCHEMY_SEPOLIA_URL: process.env.ALCHEMY_SEPOLIA_URL,
    OWNER_PRIVATE_KEY: process.env.OWNER_PRIVATE_KEY,
    TEST1_PRIVATE_KEY: process.env.TEST1_PRIVATE_KEY,
    TEST2_PRIVATE_KEY: process.env.TEST2_PRIVATE_KEY,
    NEXT_PUBLIC_USDT_CONTRACT: process.env.NEXT_PUBLIC_USDT_CONTRACT,
    NEXT_PUBLIC_TRANSFER_CONTRACT: process.env.NEXT_PUBLIC_TRANSFER_CONTRACT,
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  },
};

export default nextConfig;
