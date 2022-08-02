import { useMemo } from "react";
import { AddressZero } from "@ethersproject/constants";
import { getMarketplaceContract } from "utils/contractHelpers";
import { JsonRpcSigner, Web3Provider } from "@ethersproject/providers";

// Imports below migrated from Exchange useContract.ts
import { Contract } from "@ethersproject/contracts";
import { isAddress } from "ethers/lib/utils";
import useActiveWeb3React from "./useActiveWeb3React";

export function getContract(
  address: string,
  ABI: any,
  library: Web3Provider,
  account?: string
): Contract {
  if (!isAddress(address) || address === AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }

  return new Contract(
    address,
    ABI,
    getProviderOrSigner(library, account) as any
  );
}

// account is not optional
export function getSigner(
  library: Web3Provider,
  account: string
): JsonRpcSigner {
  return library.getSigner(account).connectUnchecked();
}

// account is optional
export function getProviderOrSigner(
  library: Web3Provider,
  account?: string
): Web3Provider | JsonRpcSigner {
  return account ? getSigner(library, account) : library;
}

/**
 * Helper hooks to get specific contracts (by ABI)
 */

export const useMarketplace = () => {
  const { library } = useActiveWeb3React();
  return useMemo(() => getMarketplaceContract(library.getSigner()), [library]);
};
