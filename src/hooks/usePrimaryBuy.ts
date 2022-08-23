import { useCallback } from "react";
import { useMarketplace } from "hooks/useContract";
import { primaryBuy } from "utils/calls/marketplace";

const usePrimaryBuy = () => {
  const marketplaceContract = useMarketplace();

  const handleBuy = useCallback(
    async (sale, amount) => {
      const txHash = await primaryBuy(marketplaceContract, sale, amount);
      console.info(txHash);
    },
    [marketplaceContract]
  );

  return { onBuy: handleBuy };
};

export default usePrimaryBuy;
