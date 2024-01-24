import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  isExpanded: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleVisible(state, action) {
      state.isExpanded = action.payload;
    },
  },
});

export const isSideBarExpanded = (state: RootState) => {
  return state.sidebar.isExpanded;
};

export const { toggleVisible } = sidebarSlice.actions;

export default sidebarSlice.reducer;
