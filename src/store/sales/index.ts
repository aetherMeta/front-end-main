import { createSlice } from "@reduxjs/toolkit";
import { backend } from "apis/backend";
import { ASK_TYPE } from "apis/backend/constants";
import { SaleState, Sale } from "store/types";

const initialState: SaleState = {
  data: {},
  filters: {},
  total: 0,
  isLoading: false,
  isLoaded: false,
  currentPage: 1,
  pageSize: 12,
};

// Thunks
export const dispatchPrimarySalePublicDataAsync =
  (page: number) => async (dispatch, getState) => {
    const { pageSize, filters, sortOrder, sortField } = getState().sales;
    // TODO find missing items,
    try {
      dispatch(setLoading());
      const res = await backend.sales.primarySaleControllerFindAll({
        name: filters.name,
        skip: (page - 1) * pageSize,
        take: pageSize,
        sortField,
        sortOrder,
        availability: filters.availability,
        price: filters.price,
        createdAt: filters.createdAt,
        updatedAt: filters.updatedAt,
      });
      dispatch(
        setPrimarySalesPublicData({
          [page]: [
            ...res.data.map((o) => ({
              ...o,
              askType: ASK_TYPE.PrimarySale,
            })),
          ],
        })
      );
      dispatch(setSaleTotal({ total: res.total }));
    } catch (e) {
      console.error(e);
    }
  };

// export const dispatchSecondarySalePublicDataAsync =
//   (page: number) => async (dispatch, getState) => {
//     const { pageSize } = getState().sales;
//     try {
//       const { data: secondarySaleData } =
//         await backend.sales.secondarySaleControllerFindAll(
//           undefined,
//           page * pageSize,
//           pageSize
//         );

//       dispatch(
//         setSecondarySalesPublicData({
//           [page]: [
//             ...secondarySaleData.data.map((o) => ({
//               ...o,
//               askType: ASK_TYPE.SecondarySale,
//             })),
//           ],
//         })
//       );
//     } catch (e) {
//       console.error(e);
//     }
//   };

export const saleSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },
    setSalePublicData: (state, action) => {
      const { payload } = action;
      const primarySaleData = payload.data.reduce(
        (acc, val) => ({ ...acc, [val.id]: val }),
        {}
      );
      state.data = primarySaleData;
      state.total = payload.total;
      state.isLoading = false;
      state.isLoaded = true;
    },
    setPrimarySalesPublicData: (state, action) => {
      const saleData: Record<number, Sale[]> = action.payload;
      state.data = { ...state.data, ...saleData };
      state.isLoading = false;
      state.total = action.payload.total;
      state.isLoaded = true;
    },
    setSaleSort: (state, action) => {
      const { sortField, sortOrder } = action.payload;
      state.sortField = sortField;
      state.sortOrder = sortOrder;
    },
    setSaleTotal: (state, action) => {
      state.total = action.payload.total;
    },
    setSalePageSize: (state, action) => {
      state.data = {};
      state.pageSize = action.payload;
    },
    setSalePage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSaleFilters: (state, action) => {
      const newFilters = action.payload;
      state.filters = { ...newFilters };
    },
  },
});

// Actions
export const {
  setPrimarySalesPublicData,
  setSaleTotal,
  setSalePageSize,
  setSalePage,
  setSaleSort,
  setSaleFilters,
  setLoading,
} = saleSlice.actions;

export default saleSlice.reducer;
