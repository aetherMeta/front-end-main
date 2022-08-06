import {
  PrimarySaleResponse,
  UserNFTResponse,
  UserResponseDto,
} from "../apis/backend/generated";

export type User = UserResponseDto;
export type Nft = UserNFTResponse;
export type Sale = PrimarySaleResponse;

export interface UserState {
  data: User;
  userDataLoaded: boolean;
}

export interface NftState {
  data: Nft[];
  userDataLoaded: boolean;
}

export interface SaleState {
  data: { [key: string]: Sale };
  total: number;
  isLoading: boolean;
  isLoaded: boolean;
}

// Store state
export interface State {
  user: UserState;
  nfts: NftState;
  sales: SaleState;
}
