import definedOrThrow from "utils/definedOrThrow";

/**
 * The Graph subgraph endpoints
 */

export const subgraphEndpoints = {
  // Token
  AetherMarketplaceRinkeby: definedOrThrow(
    process.env.REACT_APP_RINKEBY_MARKETPLACE_SUBGRAPH_API,
    "REACT_APP_RINKEBY_MARKETPLACE_SUBGRAPH_API"
  ),
};
