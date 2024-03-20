import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "./shelf/shelfSlice";

export const store = configureStore({
  reducer: {
    shelf: sliceReducer,
  },
});
