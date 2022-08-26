import { createSlice } from "@reduxjs/toolkit";
import { backend } from "apis/backend";
import { CollectionDetailState } from "store/types";

const initialState: CollectionDetailState = {
  name: "",
  description: "",
  imageUrl: "",
  nfts: [],
  nftCount: 0,
  data: [],
  filters: {},
  total: 0,
  isLoading: false,
  isLoaded: false,
  collectionId: "",
  sortField: "createdAt",
  sortOrder: "desc",
};

// Thunks
export const dispatchCollectionDetailPublicDataAsync =
  (id: string) => async (dispatch, getState) => {
    try {
      dispatch(setLoading());
      const { sortOrder, sortField } = getState().collectionDetails;
      const [collectionRes, res] = await Promise.all([
        backend.collections.collectionsControllerFindOne({
          id,
        }),
        backend.sales.primarySaleControllerFindAll({
          sortOrder,
          sortField,
          take: 10000,
          collection: { some: id },
        }),
      ]);
      dispatch(
        setCollectionDetailPublicData({
          name: collectionRes.name,
          description: collectionRes.description,
          imageUrl: collectionRes.imageUrl,
          nfts: collectionRes.nfts,
          nftCount: collectionRes.nftCount,
          data: [
            ...res.data.map((o) => ({
              ...o,
            })),
          ],
          total: res.total,
        })
      );
      // dispatch(setCollectionDetailTotal({ total: res.total }));
    } catch (e) {
      console.error(e);
    }
  };
export const collectionDetailSlice = createSlice({
  name: "collectionDetails",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },
    setCollectionDetailPublicData: (state, action) => {
      const { payload } = action;
      state.name = payload.name;
      state.description = payload.description;
      state.imageUrl = payload.imageUrl;
      state.nfts = payload.nfts;
      state.nftCount = payload.nftCount;
      state.data = { ...state.data, ...payload.data };
      state.total = payload.total;
      state.isLoading = false;
      state.isLoaded = true;
    },
    resetCollectionDetailData: (state) => {
      state.data = [];
      state.total = 0;
    },
    setCollectionDetailSort: (state, action) => {
      const {
        payload: { sortField, sortOrder },
      } = action;
      state.sortField = sortField;
      state.sortOrder = sortOrder;
    },
    setCollectionDetailTotal: (state, action) => {
      state.total = action.payload.total;
    },
    setCollectionDetailFilters: (state, action) => {
      const newFilters = action.payload;
      state.filters = { ...newFilters };
    },
    setCollectionDetailId: (state, action) => {
      state.collectionId = action.payload;
    },
  },
});

// Actions
export const {
  setCollectionDetailPublicData,
  resetCollectionDetailData,
  setCollectionDetailTotal,
  setCollectionDetailFilters,
  setCollectionDetailId,
  setCollectionDetailSort,
  setLoading,
} = collectionDetailSlice.actions;

export default collectionDetailSlice.reducer;
