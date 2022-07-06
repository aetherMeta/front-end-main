import { createSlice } from "@reduxjs/toolkit";
import { SaleState, Sale } from "store/types";
import backend from "../../apis/backend";

const initialState: SaleState = {
  data: [],
};

// Thunks
export const dispatchSalePublicDataAsync = () => async (dispatch) => {
  try {
    const { data: primarySaleData } =
      await backend.sales.primarySaleControllerFindAll();
    const { data: secondarySaleData } =
      await backend.sales.secondarySaleControllerFindAll();
    dispatch(setSalePublicData([...primarySaleData, ...secondarySaleData]));
  } catch (e) {
    console.error(e);
  }
};

export const saleSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    setSalePublicData: (state, action) => {
      const saleData: Sale[] = action.payload;
      state.data = { ...state.data, ...saleData };
    },
  },
});

// Actions
export const { setSalePublicData } = saleSlice.actions;

export default saleSlice.reducer;
