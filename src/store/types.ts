import {
  CollectionResponse,
  FilterValues,
  PrimarySaleResponse,
  UserNFTResponse,
  UserResponseDto,
} from "../apis/backend/generated";

export type User = UserResponseDto;
export type Nft = UserNFTResponse;
export type Sale = PrimarySaleResponse;
export type Collection = CollectionResponse;

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

export interface CollectionState {
  data: { [key: number]: Collection[] };
  filters: CollectionFilters;
  total: number;
  isLoading: boolean;
  isLoaded: boolean;
  currentPage: number;
  pageSize: number;
}

export interface CollectionFilters {
  updatedAt?: FilterValues;
  createdAt?: FilterValues;
  price?: FilterValues;
}
// Store state
export interface State {
  user: UserState;
  nfts: NftState;
  sales: SaleState;
  collections: CollectionState;
}
