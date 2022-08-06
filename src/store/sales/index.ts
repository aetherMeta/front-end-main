import { createSlice } from "@reduxjs/toolkit";
import { SaleState, Sale } from "store/types";
import backend from "../../apis/backend";

const initialState: SaleState = {
  data: {},
  total: 0,
  isLoading: false,
  isLoaded: false,
};

// Thunks
export const dispatchSalePublicDataAsync = () => async (dispatch) => {
  try {
    const { data: primarySaleData } =
      await backend.sales.primarySaleControllerFindAll();
    dispatch(
      setSalePublicData({
        data: primarySaleData.data,
        total: primarySaleData.total,
      })
    );
  } catch (e) {
    console.error(e);
  }
};

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
        (a, v) => ({ ...a, [v.id]: v }),
        {}
      );
      state.data = primarySaleData;
      state.total = payload.total;
      state.isLoading = false;
      state.isLoaded = true;
    },
  },
});

// Actions
export const { setSalePublicData } = saleSlice.actions;

export default saleSlice.reducer;
