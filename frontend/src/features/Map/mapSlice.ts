import { createSlice } from "@reduxjs/toolkit";
import { LatLngTuple, Marker } from "leaflet";
import { RootState } from "../../store";

type Markers = {
  cursorMarker: LatLngTuple | undefined;
  userMarkers: Marker[];
  // friendsMarkers: Marker[] //TODO:
};

const initialState: Markers = {
  cursorMarker: undefined,
  userMarkers: [],
  // friendsMarkers: Marker[] //TODO:
};

const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    addMarker(state, action) {
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
  },
});

export const cursorMarker = (state: RootState) => {
  return state.map.cursorMarker;
};

export const { addMarker, deleteMarker, setCursorMarker, clearCursorMarker } =
  mapSlice.actions;

export default mapSlice.reducer;
