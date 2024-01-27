import { useMapEvents } from "react-leaflet";
import { useNavigate } from "react-router-dom";

export const DetectClick = () => {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => {
      navigate(`?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
  return null;
};
