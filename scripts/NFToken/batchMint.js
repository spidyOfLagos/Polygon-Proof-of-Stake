
const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const BuffaloNFTFactory = await hre.ethers.getContractFactory(
    "BuffaloNFT"
  );
  const buffaloNFT = await BuffaloNFTFactory.attach(
    process.env.CONTRACT_ADDRESS
  );

  const mintTx = await buffaloNFT.safeMint(5);
  await mintTx.wait();

  console.log(
    "Successfully minted: " +
      (await buffaloNFT.balanceOf(process.env.WALLET_ADDRESS)) +
      " buffaloNFT NFTs to " +
      process.env.WALLET_ADDRESS
  );
  console.log(await buffaloNFT.promptDescription());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
