import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  isExpanded: false,
  content: "",
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleVisible(state) {
      state.isExpanded = !state.isExpanded;
    },

    renderContent(state, action) {
      if (state.content === action.payload.content) {
        sidebarSlice.caseReducers.toggleVisible(state);
      } else {
        state.isExpanded = true;
        state.content = action.payload.content;
      }
    },
  },
});

export const isSideBarExpanded = (state: RootState) => {
  return state.sidebar.isExpanded;
};

export const getContent = (state: RootState) => {
  return state.sidebar.content;
};

export const { toggleVisible, renderContent } = sidebarSlice.actions;

export default sidebarSlice.reducer;
