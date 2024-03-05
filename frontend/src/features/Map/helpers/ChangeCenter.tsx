import { Marker, useMap } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import {
  cursorMarker,
  getDestination,
  setCursorMarker,
  setDestination,
} from "../../../stores/slices/mapSlice";
import { useEffect } from "react";

export const ChangeCenter = () => {
  const currMarker = useSelector(cursorMarker);
  const destination = useSelector(getDestination);
  const dispatch = useDispatch();
  const map = useMap();

  console.log(destination);

  useEffect(() => {
    // if (destination) {
    //   map.flyTo(destination);
    //   // dispatch(setDestination(undefined));
    // }
    if (currMarker) map.flyTo(currMarker);
    dispatch(setCursorMarker(currMarker));
  }, [currMarker, destination, dispatch, map]);

  if (currMarker) return <Marker position={currMarker} />;
};
