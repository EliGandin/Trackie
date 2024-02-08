import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  userId: null,
  username: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.userId = action.payload.user_id;
      state.username = action.payload.name;
    },

    clearUser(state) {
      state.userId = null;
      state.username = "";
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export const userDetails = (state: RootState) => {
  return state.user;
};

export default userSlice.reducer;
