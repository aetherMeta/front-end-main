import client from "apis/backend/client";
import {
  AuctionApi,
  AuthenticationApi,
  CollectionsApi,
  ContactApi,
  NFTsApi,
  SalesApi,
  SocialsApi,
  UserApi,
} from "./generated";

export default {
  auction: new AuctionApi(
    null,
    process.env.REACT_APP_PUBLIC_API_BASE_URL,
    client
  ),
  authentication: new AuthenticationApi(
    null,
    process.env.REACT_APP_PUBLIC_API_BASE_URL,
    client
  ),
  collections: new CollectionsApi(
    null,
    process.env.REACT_APP_PUBLIC_API_BASE_URL,
    client
  ),
  contact: new ContactApi(
    null,
    process.env.REACT_APP_PUBLIC_API_BASE_URL,
    client
  ),
  nfts: new NFTsApi(null, process.env.REACT_APP_PUBLIC_API_BASE_URL, client),
  sales: new SalesApi(null, process.env.REACT_APP_PUBLIC_API_BASE_URL, client),
  socials: new SocialsApi(
    null,
    process.env.REACT_APP_PUBLIC_API_BASE_URL,
    client
  ),
  user: new UserApi(null, process.env.REACT_APP_PUBLIC_API_BASE_URL, client),
};
