import { LatLngTuple } from "leaflet";
import { Marker, useMap } from "react-leaflet";
import { useDispatch } from "react-redux";
import { setCursorMarker } from "../mapSlice";

export const ChangeCenter = ({ position }: { position: LatLngTuple }) => {
  // const currMarker = useSelector(cursorMarker);
  const dispatch = useDispatch();
  const map = useMap();
  map.flyTo(position);
  dispatch(setCursorMarker(position));
  return <Marker position={position} />;
};
