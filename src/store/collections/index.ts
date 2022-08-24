import { createSlice } from "@reduxjs/toolkit";
import { backend } from "apis/backend";
import { CollectionState } from "store/types";

const initialState: CollectionState = {
  data: {},
  filters: {},
  total: 0,
  isLoading: false,
  isLoaded: false,
  currentPage: 1,
  pageSize: 12,
  sortField: "createdAt",
  sortOrder: "desc",
};

// Thunks
export const dispatchCollectionPublicDataAsync =
  (page: number) => async (dispatch, getState) => {
    const { sortOrder, sortField, pageSize, filters } = getState().collections;
    try {
      dispatch(setLoading());
      const res = await backend.collections.collectionsControllerFindAll({
        sortOrder,
        sortField,
        name: filters.name,
        skip: (page - 1) * pageSize,
        take: pageSize,
        createdAt: filters.createdAt,
        updatedAt: filters.updatedAt,
      });
      dispatch(
        setCollectionPublicData({
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
    setCollectionSort: (state, action) => {
      const {
        payload: { sortField, sortOrder },
      } = action;
      state.sortField = sortField;
      state.sortOrder = sortOrder;
    },
    setCollectionPublicData: (state, action) => {
      const { payload } = action;
      state.data = { ...state.data, ...payload };
      state.total = payload.total;
      state.isLoading = false;
      state.isLoaded = true;
    },
    resetCollectionData: (state) => {
      state.data = {};
      state.total = 0;
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
  setCollectionSort,
  setCollectionPublicData,
  resetCollectionData,
  setCollectionTotal,
  setCollectionPageSize,
  setCollectionPage,
  setCollectionFilters,
  setLoading,
} = collectionSlice.actions;

export default collectionSlice.reducer;
