import { FaHome, FaSearch, FaBell } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar";
import { useState } from "react";

const NavBar = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState<boolean>(false);

  const expendSideBar = (): void => {
    return setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <>
      <nav className="flex w-screen z-40 bg-neutral-600 items-center justify-around relative">
        <button className="text-2xl w-10 h-10 flex items-center justify-around text-neutral-200 hover:ease-in-out  transition duration-[200] hover:-translate-y-1">
          <RxHamburgerMenu onClick={expendSideBar} />
        </button>

        <button className="text-2xl w-10 h-10 flex items-center justify-around text-neutral-200 hover:ease-in-out  transition duration-[200] hover:-translate-y-1">
          <FaHome onClick={expendSideBar} />
        </button>

        <button className="text-2xl w-10 h-10 flex items-center justify-around text-neutral-200 hover:ease-in-out  transition duration-[200] hover:-translate-y-1">
          <FaBell onClick={expendSideBar} />
        </button>

        <button className="text-2xl w-10 h-10 flex items-center justify-around text-neutral-200 hover:ease-in-out  transition duration-[200] hover:-translate-y-1">
          <FaSearch onClick={expendSideBar} />
        </button>

        <button className="text-2xl w-10 h-10 flex items-center justify-around text-neutral-200 hover:ease-in-out  transition duration-[200] hover:-translate-y-1">
          <FaGear onClick={expendSideBar} />
        </button>
      </nav>

      {isSidebarExpanded && <Sidebar />}
    </>
  );
};

export default NavBar;
