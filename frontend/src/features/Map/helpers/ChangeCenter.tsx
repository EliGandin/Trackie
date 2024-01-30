import { Marker, useMap } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { cursorMarker, setCursorMarker } from "../mapSlice";

export const ChangeCenter = () => {
  const currMarker = useSelector(cursorMarker);
  const dispatch = useDispatch();
  const map = useMap();
  if (currMarker) map.flyTo(currMarker);
  dispatch(setCursorMarker(currMarker));

  if (currMarker) return <Marker position={currMarker} />;
};
