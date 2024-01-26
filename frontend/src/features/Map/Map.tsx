import { LatLngTuple } from "leaflet";
import { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useNavigate } from "react-router-dom";

// import { useGeolocation } from "../../hooks/useGeolocation";
import { useUrlPosition } from "../../hooks/useUrlPosition";
import { clearCursorMarker, cursorMarker, setCursorMarker } from "./mapSlice";
import { useDispatch, useSelector } from "react-redux";

const Map = () => {
  const currMarker = useSelector(cursorMarker);
  const dispatch = useDispatch();

  const [centerMapPosition, setCenterMapPosition] = useState<LatLngTuple>([
    40, 0,
  ]);
  const [lat, lng] = useUrlPosition().map(Number);
  // const {
  //   isLoading,
  //   position: geoLocationPosition,
  //   getPosition,
  // } = useGeolocation();

  useEffect(() => {
    if (lat && lng) {
      setCenterMapPosition([lat, lng]);
    }
  }, [lat, lng]);

  // useEffect(() => {
  //   if (geoLocationPosition) {
  //     setCenterMapPosition([geoLocationPosition.lat, geoLocationPosition.lng]);
  //   }
  // }, [geoLocationPosition]);

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
        <ChangeCenter position={centerMapPosition} />
        <DetectClick />
      </MapContainer>
    </>
  );
};

const ChangeCenter = ({ position }: { position: LatLngTuple }) => {
  const currMarker = useSelector(cursorMarker);
  const dispatch = useDispatch();
  const map = useMap();
  map.flyTo(position);
  dispatch(setCursorMarker(position));
  return <Marker position={position} />;
};

const DetectClick = () => {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => {
      navigate(`?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
  return null;
};

export default Map;
