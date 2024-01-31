import { configureStore } from "@reduxjs/toolkit";
import mapSlice from "./slices/mapSlice";
import sidebarSlice from "./slices/sidebarSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
  reducer: {
    map: mapSlice,
    sidebar: sidebarSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
