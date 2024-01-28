import { FaHome, FaSearch, FaBell } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { isSideBarExpanded, renderContent } from "../sidebarSlice";

const NavBar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="z-40 flex  w-screen items-center justify-around bg-neutral-600">
      <button className="flex h-10 w-10 items-center justify-around text-2xl text-neutral-200 transition  duration-[200] hover:-translate-y-1 hover:ease-in-out">
        <RxHamburgerMenu
          onClick={() => dispatch(renderContent({ content: "feed" }))}
        />
      </button>

      <button className="flex h-10 w-10 items-center justify-around text-2xl text-neutral-200 transition  duration-[200] hover:-translate-y-1 hover:ease-in-out">
        <FaHome onClick={() => dispatch(renderContent({ content: "home" }))} />
      </button>

      <button className="flex h-10 w-10 items-center justify-around text-2xl text-neutral-200 transition  duration-[200] hover:-translate-y-1 hover:ease-in-out">
        <FaBell
          onClick={() => dispatch(renderContent({ content: "notifications" }))}
        />
      </button>

      <button className="flex h-10 w-10 items-center justify-around text-2xl text-neutral-200 transition  duration-[200] hover:-translate-y-1 hover:ease-in-out">
        <FaSearch
          onClick={() => dispatch(renderContent({ content: "search" }))}
        />
      </button>

      <button className="flex h-10 w-10 items-center justify-around text-2xl text-neutral-200 transition  duration-[200] hover:-translate-y-1 hover:ease-in-out">
        <FaGear
          onClick={() => dispatch(renderContent({ content: "settings" }))}
        />
      </button>
    </nav>
  );
};

export default NavBar;
