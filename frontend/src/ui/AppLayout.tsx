// import { useNavigation } from "react-router-dom";
import { useSelector } from "react-redux";
import Map from "../features/Map/Map";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import { isVisible } from "./sidebarSlice";
// import Loader from "./Loader";

const AppLayout = () => {
  const renderSideBar = useSelector(isVisible);

  return (
    <div className="flex h-full flex-col">
      <NavBar />
      {renderSideBar && <Sidebar />}
      <Map />
      <Footer />
    </div>
  );
};

export default AppLayout;
