import { createSlice } from "@reduxjs/toolkit";
import { User, UserState } from "store/types";
import backend from "../../apis/backend";
import client from "../../apis/backend/client";

const initialState: UserState = {
  data: {
    pendingEmail: "",
    email: "",
    username: "",
    address: "",
    firstName: "",
    lastName: "",
    role: "USER",
    twitterHandle: "",
    metaverseAccess: false,
  },
  userDataLoaded: false,
};

// Thunks
export const dispatchUserPublicDataAsync = () => async (dispatch) => {
  try {
    if (client.defaults.headers.common.Authorization) {
      const { data: userData } = await backend.user.userControllerGet();
      dispatch(setUserPublicData(userData));
    }
  } catch (e) {
    console.error(e);
  }
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserPublicData: (state, action) => {
      const userData: User = action.payload;
      state.data = { ...state.data, ...userData };
      state.userDataLoaded = true;
    },
  },
});

// Actions
export const { setUserPublicData } = userSlice.actions;

export default userSlice.reducer;
