import { createSlice } from "@reduxjs/toolkit";
import { User, UserState, Role } from "store/types";
import { fetchUserData } from "./fetchUser";

const initialState: UserState = {
  data: {
    pendingEmail: "",
    email: "",
    username: "",
    address: "",
    firstName: "",
    lastName: "",
    role: Role.USER,
    twitterHandle: "",
  },
  userDataLoaded: false,
};

// Thunks
export const dispatchUserPublicDataAsync = () => async (dispatch) => {
  const userData: User = await fetchUserData();
  dispatch(setUserPublicData(userData));
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
