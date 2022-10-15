export const getMarketPlaceAddress = () => {
  return process.env.REACT_APP_GOERLI_MARKETPLACE_CONTRACT_ADDRESS;
};

export const truncateWalletAddress = (
  address: string,
  startLength = 4,
  endLength = 4
) => {
  return `${address.substring(0, startLength)}...${address.substring(
    address.length - endLength
  )}`;
};
