import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import userReducer from "./user";
import nftsReducer from "./nfts";
import salesReducer from "./sales";
import collectionsReducer from "./collections";
import collectionDetailReducer from "./collectionDetails";

const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: {
    user: userReducer,
    nfts: nftsReducer,
    sales: salesReducer,
    collections: collectionsReducer,
    collectionDetails: collectionDetailReducer,
  },
});

/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
 */
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
