import { createSlice } from "@reduxjs/toolkit";
import { Marker } from "leaflet";

type Markers = {
  userMarkers: Marker[];
  // friendsMarkers: Marker[] //TODO:
};

const initialState: Markers = {
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
        (marker) => marker !== action.payload
      );
    },
  },
});

export default mapSlice.reducer;
