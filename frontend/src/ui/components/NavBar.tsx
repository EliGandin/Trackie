import { FaHome, FaSearch, FaBell } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { isSideBarExpanded, toggleVisible } from "../sidebarSlice";

const NavBar = () => {
  const isSidebarVisible = useSelector(isSideBarExpanded);
  const dispatch = useDispatch();

  return (
    <nav className="z-40 flex  w-screen items-center justify-around bg-neutral-600">
      <button className="flex h-10 w-10 items-center justify-around text-2xl text-neutral-200 transition  duration-[200] hover:-translate-y-1 hover:ease-in-out">
        <RxHamburgerMenu
          onClick={() => dispatch(toggleVisible(!isSidebarVisible))}
        />
      </button>

      <button className="flex h-10 w-10 items-center justify-around text-2xl text-neutral-200 transition  duration-[200] hover:-translate-y-1 hover:ease-in-out">
        <FaHome onClick={() => dispatch(toggleVisible(!isSidebarVisible))} />
      </button>

      <button className="flex h-10 w-10 items-center justify-around text-2xl text-neutral-200 transition  duration-[200] hover:-translate-y-1 hover:ease-in-out">
        <FaBell onClick={() => dispatch(toggleVisible(!isSidebarVisible))} />
      </button>

      <button className="flex h-10 w-10 items-center justify-around text-2xl text-neutral-200 transition  duration-[200] hover:-translate-y-1 hover:ease-in-out">
        <FaSearch onClick={() => dispatch(toggleVisible(!isSidebarVisible))} />
      </button>

      <button className="flex h-10 w-10 items-center justify-around text-2xl text-neutral-200 transition  duration-[200] hover:-translate-y-1 hover:ease-in-out">
        <FaGear onClick={() => dispatch(toggleVisible(!isSidebarVisible))} />
      </button>
    </nav>
  );
};

export default NavBar;
