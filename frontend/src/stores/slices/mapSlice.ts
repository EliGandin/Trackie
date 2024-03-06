import { createSlice } from "@reduxjs/toolkit";
import { LatLngTuple, Marker } from "leaflet";
import { RootState } from "../store";

type MapUtil = {
  cursorMarker: LatLngTuple | undefined;
  locationName: string | null;
  postId: number;
  userMarkers: Marker[];
  // friendsMarkers: Marker[] //TODO:
};

const initialState: MapUtil = {
  cursorMarker: undefined,
  locationName: null,
  userMarkers: [],
  postId: 0,
  // friendsMarkers: Marker[] //TODO:
};

const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    addMarker(state, action) {
      console.log(action.payload);
      const coordinates = action.payload.currMarker;
      const postId = action.payload.postId;
      state.userMarkers.push(action.payload);
    },

    deleteMarker(state, action) {
      state.userMarkers = state.userMarkers.filter(
        (marker) => marker !== action.payload,
      );
    },

    setCursorMarker(state, action) {
      state.cursorMarker = action.payload;
    },

    clearCursorMarker(state) {
      state.cursorMarker = undefined;
    },

    setLocationName(state, action) {
      state.locationName = action.payload;
    },
  },
});

export const cursorMarker = (state: RootState) => {
  return state.map.cursorMarker;
};

export const getLocationName = (state: RootState) => {
  return state.map.locationName;
};

export const userMarkers = (state: RootState) => {
  return state.map.userMarkers;
};

export const {
  addMarker,
  deleteMarker,
  setCursorMarker,
  clearCursorMarker,
  setLocationName,
} = mapSlice.actions;

export default mapSlice.reducer;
