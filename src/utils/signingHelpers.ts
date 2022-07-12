import { SIGNING_TYPES as types, DOMAIN as domain } from "./constants";

type Types =
  | "Bid"
  | "RoyaltyInfo"
  | "EIP712Domain"
  | "MintAsk"
  | "Commission"
  | "Ask"
  | "Offer"
  | "Token";

export const signTypedData = async (
  provider: any,
  address: string,
  primaryType: Types,
  message: any
) => {
  return provider.request({
    method: "eth_signTypedData_v4",
    params: [address, JSON.stringify({ types, primaryType, domain, message })],
  });
};
