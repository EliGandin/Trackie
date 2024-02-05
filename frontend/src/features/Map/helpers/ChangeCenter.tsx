import { Marker, useMap } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { cursorMarker, setCursorMarker } from "../../../stores/slices/mapSlice";
import { useEffect } from "react";

export const ChangeCenter = () => {
  const currMarker = useSelector(cursorMarker);
  const dispatch = useDispatch();
  const map = useMap();

  useEffect(() => {
    if (currMarker) map.flyTo(currMarker);
    dispatch(setCursorMarker(currMarker));
  }, [currMarker, dispatch, map]);

  if (currMarker) return <Marker position={currMarker} />;
};
