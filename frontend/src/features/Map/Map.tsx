import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import SideBar from "../../ui/Sidebar";

const Map = () => {
  return (
    <MapContainer
      className="w-full h-[900px] z-10"
      center={[40, 40]}
      zoom={5}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
