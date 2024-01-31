import { LatLngTuple } from "leaflet";
import { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

// import { useGeolocation } from "../../hooks/useGeolocation";
import { ChangeCenter } from "./helpers/ChangeCenter";
import { DetectClick } from "./helpers/DetectClick";
import { useDispatch, useSelector } from "react-redux";
import { cursorMarker, setCursorMarker } from "../../stores/slices/mapSlice";

const Map = () => {
  const currMarker = useSelector(cursorMarker);
  const dispatch = useDispatch();

  const [centerMapPosition] = useState<LatLngTuple | undefined>([40, 40]);

  useEffect(() => {
    if (currMarker) {
      dispatch(setCursorMarker(currMarker));
    }
  }, [currMarker, dispatch]);

  return (
    <>
      <MapContainer
        className="z-10 h-[900px] w-full"
        center={centerMapPosition}
        zoom={5}
        scrollWheelZoom={true}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]} />
        <ChangeCenter />
        <DetectClick />
      </MapContainer>
    </>
  );
};

export default Map;
