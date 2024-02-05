import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/questionSlice";

export const store = configureStore({
  reducer: productReducer,
});
