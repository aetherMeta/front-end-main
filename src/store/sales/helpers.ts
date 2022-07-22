import { ethers } from "ethers";
import { splitSignature } from "ethers/lib/utils";
import { signTypedData } from "../../utils/signingHelpers";

export enum ASK_TYPES {
  PRIMARY_SALE = 0,
  PRIMARY_AUCTION = 1,
  SECONDARY_SALE = 2,
  SECONDARY_AUCTION = 3,
}

export const generatePrimarySale = async (
  provider: ethers.providers.Provider,
  address: string,
  data: {
    askType: number;
    currency: string;
    amount: string;
    price: string;
    nonce: string;
    royaltyRecipient: string;
    royaltyValue: number;
    uri: string;
    chainId: number;
    expiresAt: string;
  }
) => {
  const {
    askType,
    currency,
    amount,
    price,
    nonce,
    royaltyRecipient,
    royaltyValue,
    uri,
    chainId,
    expiresAt,
  } = data;

  const msg = {
    askType,
    signer: address,
    currency,
    amount,
    price,
    nonce,
    royaltyInfo: {
      recipient: royaltyRecipient,
      value: royaltyValue,
    },
  };

  const rawSig = await signTypedData(provider, address, "MintAsk", msg);
  const splitSig = splitSignature(rawSig);
  return {
    currency,
    amount,
    price,
    nonce,
    v: splitSig.v,
    r: splitSig.r,
    s: splitSig.s,
    uri,
    expiresAt: expiresAt.toString(),
    royaltyValue,
    royaltyRecipient,
    chainId,
  };
};
