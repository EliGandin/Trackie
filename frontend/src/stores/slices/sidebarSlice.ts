import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  isExpanded: false,
  content: "",
  post: {
    postId: 0,
    location: { name: "", coordinates: { lat: 0, lng: 0 } },
    author: "",
    story: "",
  },
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

    setDisplayedPost(state, action) {
      state.content = "post";
      const { post_id, location, author, story } = action.payload;
      state.post.postId = post_id;
      state.post.location = location;
      state.post.author = author;
      state.post.story = story;
    },

    clearPost(state) {
      state.content = "feed";
      state.post = { ...initialState.post };
    },
  },
});

export const isSideBarExpanded = (state: RootState) => {
  return state.sidebar.isExpanded;
};

export const getContent = (state: RootState) => {
  return state.sidebar.content;
};

export const getPost = (state: RootState) => {
  return state.sidebar.post;
};

export const { toggleVisible, renderContent, setDisplayedPost, clearPost } =
  sidebarSlice.actions;

export default sidebarSlice.reducer;
