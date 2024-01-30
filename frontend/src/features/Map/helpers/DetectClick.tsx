import { useMapEvents } from "react-leaflet";
import { useDispatch } from "react-redux";
import { setCursorMarker } from "../mapSlice";

export const DetectClick = () => {
  const dispatch = useDispatch();

  useMapEvents({
    click: (e) => {
      dispatch(setCursorMarker([e.latlng.lat, e.latlng.lng]));
    },
  });
  return null;
};
