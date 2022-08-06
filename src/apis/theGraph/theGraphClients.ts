import { ApolloClient, InMemoryCache } from "@apollo/client/core";

import { subgraphEndpoints } from "constants/subgraphEndpoints";

/**
 * Marketplace
 */

export const theGraphAetherMarketplaceClient = new ApolloClient({
  uri: subgraphEndpoints.AetherMarketplaceRinkeby,
  cache: new InMemoryCache(),
});
