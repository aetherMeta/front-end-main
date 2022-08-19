import { createSlice } from "@reduxjs/toolkit";
import { backend } from "apis/backend";
import { CollectionState, Collection } from "store/types";

const initialState: CollectionState = {
  data: {},
  filters: {},
  total: 0,
  isLoading: false,
  isLoaded: false,
  currentPage: 1,
  pageSize: 12,
};

// Thunks
export const dispatchPrimaryCollectionPublicDataAsync =
  (page: number) => async (dispatch, getState) => {
    const { pageSize, filters } = getState().collections;
    // TODO find missing items,
    try {
      dispatch(setLoading());
      const res = await backend.collections.collectionsControllerFindAll({
        name: filters.name,
        skip: (page - 1) * pageSize,
        take: pageSize,
        createdAt: filters.createdAt,
        updatedAt: filters.updatedAt,
      });
      dispatch(
        setPrimaryCollectionsPublicData({
          [page]: [
            ...res.data.map((o) => ({
              ...o,
            })),
          ],
        })
      );
      dispatch(setCollectionTotal({ total: res.total }));
    } catch (e) {
      console.error(e);
    }
  };
export const collectionSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },
    setCollectionPublicData: (state, action) => {
      const { payload } = action;
      const collectionData = payload.data.reduce(
        (acc, val) => ({ ...acc, [val.id]: val }),
        {}
      );
      state.data = collectionData;
      state.total = payload.total;
      state.isLoading = false;
      state.isLoaded = true;
    },
    setPrimaryCollectionsPublicData: (state, action) => {
      const collectionData: Record<number, Collection[]> = action.payload;
      state.data = { ...state.data, ...collectionData };
      state.isLoading = false;
      state.total = action.payload.total;
      state.isLoaded = true;
    },
    setCollectionTotal: (state, action) => {
      state.total = action.payload.total;
    },
    setCollectionPageSize: (state, action) => {
      state.data = {};
      state.pageSize = action.payload;
    },
    setCollectionPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setCollectionFilters: (state, action) => {
      const newFilters = action.payload;
      state.filters = { ...newFilters };
    },
  },
});

// Actions
export const {
  setPrimaryCollectionsPublicData,
  setCollectionTotal,
  setCollectionPageSize,
  setCollectionPage,
  setCollectionFilters,
  setLoading,
} = collectionSlice.actions;

export default collectionSlice.reducer;
