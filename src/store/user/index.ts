import { createSlice } from "@reduxjs/toolkit";
import { backend, client } from "apis/backend";
import { UserResponseDto } from "apis/backend/generated";
import { User, UserState } from "store/types";

const initialState: UserState = {
  data: {
    pendingEmail: "",
    email: "",
    username: "",
    address: "",
    firstName: "",
    lastName: "",
    role: UserResponseDto.role.USER,
    twitterHandle: "",
    metaverseAccess: false,
    metaverseAllowanceExceeded: true,
  },
  userDataLoaded: false,
};

// Thunks
export const dispatchUserPublicDataAsync = () => async (dispatch) => {
  try {
    if (client.TOKEN) {
      const userData = await backend.user.userControllerGet();
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
