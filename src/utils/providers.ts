import { ethers } from "ethers";

import sample from "lodash/sample";

// Array of available nodes to connect to
export const nodes = [
  process.env.REACT_APP_NODE_1,
  process.env.REACT_APP_NODE_2,
  process.env.REACT_APP_NODE_3,
  process.env.REACT_APP_NODE_4,
];

const getNodeUrl = () => {
  return sample(nodes);
};

const RPC_URL = getNodeUrl();

export const simpleRpcProvider = new ethers.providers.JsonRpcProvider(RPC_URL);

export default null;
