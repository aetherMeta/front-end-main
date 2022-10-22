import {
  AuctionService,
  AuthenticationService,
  CollectionsService,
  ContactService,
  IpfsService,
  NfTsService,
  OpenAPI,
  SalesService,
  ShoppingCartService,
  SocialsService,
  UserService,
} from "./generated";

OpenAPI.BASE = process.env.REACT_APP_PUBLIC_API_BASE_URL;

export const backend = {
  auctions: AuctionService,
  authentication: AuthenticationService,
  collections: CollectionsService,
  contact: ContactService,
  ipfs: IpfsService,
  nfts: NfTsService,
  sales: SalesService,
  shoppingCard: ShoppingCartService,
  socials: SocialsService,
  user: UserService,
};

export const client = OpenAPI;
