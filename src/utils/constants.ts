import { getMarketPlaceAddress } from "./addressHelpers";

export const SIGNING_TYPES = {
  EIP712Domain: [
    { name: "name", type: "string" },
    { name: "version", type: "string" },
    { name: "chainId", type: "uint256" },
    { name: "verifyingContract", type: "address" },
  ],
  MintAsk: [
    { name: "askType", type: "uint8" },
    { name: "signer", type: "address" },
    { name: "currency", type: "address" },
    { name: "amount", type: "uint256" },
    { name: "price", type: "uint256" },
    { name: "nonce", type: "uint256" },
    { name: "royaltyInfo", type: "RoyaltyInfo" },
  ],
  RoyaltyInfo: [
    { name: "recipient", type: "address" },
    { name: "value", type: "uint16" },
  ],

  Commission: [
    { name: "askHash", type: "bytes32" },
    { name: "amount", type: "uint16" },
  ],

  Bid: [
    { name: "askHash", type: "bytes32" },
    { name: "signer", type: "address" },
    { name: "price", type: "uint256" },
  ],

  Ask: [
    { name: "askType", type: "uint8" },
    { name: "signer", type: "address" },
    { name: "currency", type: "address" },
    { name: "tokenId", type: "uint256" },
    { name: "amount", type: "uint256" },
    { name: "price", type: "uint256" },
    { name: "nonce", type: "uint256" },
  ],

  Offer: [
    { name: "signer", type: "address" },
    { name: "currency", type: "address" },
    { name: "tokenId", type: "uint256" },
    { name: "amount", type: "uint256" },
    { name: "price", type: "uint256" },
  ],

  Token: [
    { name: "askHash", type: "bytes32" },
    { name: "uri", type: "string" },
  ],
};

export const DOMAIN = {
  name: "AetherMarketplace",
  version: "1",
  chainId: 4,
  verifyingContract: getMarketPlaceAddress(),
};
