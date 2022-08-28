import { getMarketPlaceAddress } from "utils/addressHelpers";

// ABI
import marketplaceAbi from "config/abi/AetherMarketplace.json";
import { ethers } from "ethers";

const getContract = (
  abi: any,
  address: string,
  signer: ethers.Signer | ethers.providers.Provider
) => {
  const signerOrProvider = signer;
  return new ethers.Contract(address, abi, signerOrProvider);
};

export const getMarketplaceContract = (
  signer?: ethers.Signer | ethers.providers.Provider
) => {
  return getContract(marketplaceAbi, getMarketPlaceAddress(), signer);
};
