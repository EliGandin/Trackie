import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import { isSideBarExpanded } from "../stores/slices/sidebarSlice";
import Map from "../features/Map/Map";

const AppLayout = () => {
  const renderSideBar = useSelector(isSideBarExpanded);

  return (
    <div className="flex h-full flex-col overflow-hidden overflow-y-hidden">
      <NavBar />
      {renderSideBar && <Sidebar />}
      <Outlet />
      <Map />
      <Footer />
    </div>
  );
};

export default AppLayout;
