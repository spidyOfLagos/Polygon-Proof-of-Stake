// SPDX-License-Identifier: UNLICENSED 
pragma solidity 0.8.20;

import "erc721a/contracts/ERC721A.sol";

contract BuffaloNFT is ERC721A {
    uint8 public maxSupply = 5;

    constructor() ERC721A("BuffaloNFT", "BNFT") {}

    function safeMint(uint8 _quantity) external payable {
        _safeMint(msg.sender, _quantity);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmRoB8DC7kNaziGR6n85FRdMRnm2rWfeVrJhk1ecTTMJtp/";
    }

    function promptDescription() external pure returns (string memory) {
        return "Cartoon avatars of a buffalo";
    }

    function balanceOf(address owner) public view override returns (uint256) {
        return super.balanceOf(owner);
    }
}