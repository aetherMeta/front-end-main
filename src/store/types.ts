import {
  FilterValues,
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
  data: { [key: number]: Sale[] };
  filters: SaleFilters;
  total: number;
  isLoading: boolean;
  isLoaded: boolean;
  currentPage: number;
  pageSize: number;
}

export interface SaleFilters {
  updatedAt?: FilterValues;
  createdAt?: FilterValues;
  price?: FilterValues;
}
// Store state
export interface State {
  user: UserState;
  nfts: NftState;
  sales: SaleState;
}
