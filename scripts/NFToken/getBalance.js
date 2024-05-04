const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const BuffaloNFT = await hre.ethers.getContractFactory("BuffaloNFT");

  const buffaloNFT = await BuffaloNFT.attach(process.env.CONTRACT_ADDRESS);
  const balance = (
    await buffaloNFT.balanceOf(process.env.WALLET_ADDRESS)
  ).toString();

  console.log("Balance: ", balance);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});