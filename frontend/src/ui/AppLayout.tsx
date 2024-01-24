import { useSelector } from "react-redux";
import Map from "../features/Map/Map";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import { isSideBarExpanded } from "./sidebarSlice";
// import Loader from "./Loader";

const AppLayout = () => {
  const renderSideBar = useSelector(isSideBarExpanded);

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
