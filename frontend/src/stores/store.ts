import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import mapSlice from "./slices/mapSlice";
import sidebarSlice from "./slices/sidebarSlice";
import userSlice from "./slices/userSlice";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  map: mapSlice,
  sidebar: sidebarSlice,
  user: userSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export { store, persistor };
