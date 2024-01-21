// import { useNavigation } from "react-router-dom";
import Map from "../features/Map/Map";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
// import Loader from "./Loader";

const AppLayout = () => {
  return (
    <div className="flex flex-col h-full">
      <NavBar />
      <Sidebar />
      <Map />
      <Footer />
    </div>
  );
};

export default AppLayout;
