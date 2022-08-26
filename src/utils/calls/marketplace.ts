import { ethers } from "ethers";
import { ASK_TYPE } from "../../apis/backend/constants";
import { PrimarySaleResponse } from "../../apis/backend/generated";

export const primaryBuy = async (
  marketPlaceContract,
  sale: PrimarySaleResponse,
  purchaseAmount: number
) => {
  const {
    amount,
    commission,
    currency,
    id,
    nonce,
    price,
    r,
    s,
    sellerAddress,
    token,
    v,
    royalty: { recipient, value },
  } = sale;
  const mintAsk = [
    ASK_TYPE.PrimarySale,
    sellerAddress,
    currency,
    amount,
    price,
    nonce,
    [recipient, value],
    v,
    Buffer.from(r.substring(2), "hex"),
    Buffer.from(s.substring(2), "hex"),
  ];

  const tx = await marketPlaceContract.primaryBuy(
    mintAsk,
    [
      id,
      commission.commissionBPS,
      commission.v,
      Buffer.from(commission.r.substring(2), "hex"),
      Buffer.from(commission.s.substring(2), "hex"),
    ],
    [
      id,
      token.uri,
      token.v,
      Buffer.from(token.r.substring(2), "hex"),
      Buffer.from(token.s.substring(2), "hex"),
    ],
    purchaseAmount,
    {
      value: currency === ethers.constants.AddressZero ? price : "0",
    }
  );
  const receipt = await tx.wait();
  return receipt;
};
