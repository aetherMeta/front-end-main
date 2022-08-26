import {
  FilterValues,
  PrimarySaleResponse,
  UserNFTResponse,
  UserResponseDto,
} from "../apis/backend/generated";

export type User = UserResponseDto;
export type Nft = UserNFTResponse;
export type Sale = PrimarySaleResponse;
export type Availability = "AVAILABLE" | "SOLD" | "ALL";
export type SortOrder = "asc" | "desc";
export type SortField = "createdAt" | "updatedAt" | "name" | "price";

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
  sortOrder?: SortOrder;
  sortField?: SortField;
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
  availability?: Availability;
}
// Store state
export interface State {
  user: UserState;
  nfts: NftState;
  sales: SaleState;
}
