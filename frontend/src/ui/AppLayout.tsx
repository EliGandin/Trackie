// import { useNavigation } from "react-router-dom";
import Map from "../features/Map/Map";
import Footer from "./Footer";
import NavBar from "./NavBar";
// import SideBar from "./Sidebar";
// import Loader from "./Loader";

const AppLayout = () => {
  return (
    <div>
      <NavBar />
      <Map />
      <Footer />
    </div>
  );
};

export default AppLayout;
