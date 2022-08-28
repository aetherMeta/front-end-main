export const getMarketPlaceAddress = () => {
  return "0xA62e19c35f0A9495d5712f7eee1a4FEBf4b0De8B";
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
