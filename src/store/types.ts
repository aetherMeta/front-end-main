import {
  GetPrimarySaleResponse,
  GetSecondarySaleResponse,
  GetUserResponseDtoRoleEnum,
  UserNFTResponse,
} from "../apis/backend/generated";

export interface User {
  pendingEmail: string;
  email: string;
  username: string;
  address: string;
  firstName?: string;
  lastName?: string;
  role: GetUserResponseDtoRoleEnum;
  twitterHandle: string;
}

export type Nft = UserNFTResponse;
export type Sale = GetPrimarySaleResponse | GetSecondarySaleResponse;

export interface UserState {
  data: User;
  userDataLoaded: boolean;
}

export interface NftState {
  data: Nft[];
  userDataLoaded: boolean;
}

export interface SaleState {
  data: Sale[];
}

// Store state
export interface State {
  user: UserState;
  nfts: NftState;
  sales: SaleState;
}
