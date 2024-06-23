import { createPublicClient, createWalletClient, http } from "viem";
import { sepolia } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";
import { abi, address } from "./abi";
import dotenv from "dotenv";

dotenv.config();

const account = privateKeyToAccount(`0x${process.env.PRIVATE_KEY}`);

const rpc = process.env.ETH_RPC_URL;

const walletClient = createWalletClient({
  account,
  chain: sepolia,
  transport: http(rpc),
});

const client = createPublicClient({
  chain: sepolia,
  transport: http(rpc),
});

async function main() {
  // const blockNumber = await client.getBlockNumber();
  // console.log(blockNumber);
  getNumber();

  const hash = await walletClient.writeContract({
    address,
    abi,
    functionName: "setNumber",
    args: [BigInt(100)],
  });

  console.log("The hash is:", hash);

  const receipt = await client.waitForTransactionReceipt({ hash });

  console.log("receipt info:", receipt);

  receipt && getNumber();
}

async function getNumber() {
  const number = await client.readContract({
    address,
    abi,
    functionName: "number",
  });

  console.log("The number is:", number);
}

main();
