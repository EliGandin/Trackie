import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isExpanded: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    visible(state) {
      state.isExpanded = !state.isExpanded;
    },
  },
});

export default sidebarSlice.reducer;
