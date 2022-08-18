import { createSlice } from "@reduxjs/toolkit";
import { NftState, Nft } from "store/types";
import { backend } from "../../apis/backend";

const initialState: NftState = {
  data: [],
  userDataLoaded: false,
};

// Thunks
export const dispatchNftPublicDataAsync = (address) => async (dispatch) => {
  try {
    const nftData = await backend.nfts.nftsControllerFindUserNft({ address });
    dispatch(setNftPublicData(nftData));
  } catch (e) {
    console.error(e);
  }
};

export const nftSlice = createSlice({
  name: "nfts",
  initialState,
  reducers: {
    setNftPublicData: (state, action) => {
      const nftData: Nft[] = action.payload;
      state.data = { ...state.data, ...nftData };
      state.userDataLoaded = true;
    },
  },
});

// Actions
export const { setNftPublicData } = nftSlice.actions;

export default nftSlice.reducer;
