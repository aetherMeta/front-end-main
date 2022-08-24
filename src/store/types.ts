import {
  CollectionResponse,
  FilterValues,
  NFTResponse,
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
  sortOrder: "asc" | "desc";
  sortField: "createdAt" | "updatedAt" | "name";
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
export interface CollectionDetailState {
  name: string;
  description: string;
  imageUrl: string;
  nfts: NFTResponse[];
  nftCount: number;
  data: Sale[];
  filters: CollectionFilters;
  total: number;
  isLoading: boolean;
  isLoaded: boolean;
  collectionId: string;
  sortField: string;
  sortOrder: string;
}
// Store state
export interface State {
  user: UserState;
  nfts: NftState;
  sales: SaleState;
  collections: CollectionState;
  collectionDetails: CollectionDetailState;
}
