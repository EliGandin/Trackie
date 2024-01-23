import { configureStore } from "@reduxjs/toolkit";
import mapSlice from "./features/Map/mapSlice";
import sidebarSlice from "./ui/sidebarSlice";

const store = configureStore({
  reducer: {
    map: mapSlice,
    sidebar: sidebarSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
