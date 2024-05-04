const hre = require("hardhat");

async function main() {
  const BuffaloNFT = await hre.ethers.getContractFactory("BuffaloNFT");

  const buffaloNFT = await BuffaloNFT.deploy();

  console.log("BuffaloNFT NFT deployed to: ", buffaloNFT.target);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});