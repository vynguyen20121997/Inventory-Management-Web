import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  fetchShelfResources: {},
};

const shelfSlice = createSlice({
  name: "shelf",
  initialState,
  reducers: {
    shelfInfo: (state, { payload }) => {
      state.fetchShelfResources = payload;
    },
  },
});

export const { shelfInfo } = shelfSlice.actions;

export default shelfSlice.reducer;
