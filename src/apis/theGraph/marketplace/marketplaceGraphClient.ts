import { gql } from "@apollo/client";

import { theGraphAetherMarketplaceClient } from "apis/theGraph/theGraphClients";

export const getPrimarySalesInfoByAskHash = async (
  askHash: string
): Promise<{
  primaryBuyHistories: {
    id: string;
    tokenId: string;
    tokenBuyAmount: string;
    paymentAmount: string;
    buyTimestamp: string;
    buyer: string;
    primaryListing: { seller: string };
  }[];
}> => {
  const query = `
    {
      primaryBuyHistories(where: {askHash: "${askHash}"}) {
        id
        tokenId
        tokenBuyAmount
        paymentAmount
        buyTimestamp
        buyer,
        primaryListing {
          seller
        }
      }
    }
  `;

  const response = await theGraphAetherMarketplaceClient.query({
    query: gql(query),
  });

  return response.data;
};
