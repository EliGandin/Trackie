import { FaHome, FaSearch, FaBell } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { isVisible, toggleVisible } from "./sidebarSlice";

const NavBar = () => {
  const isSidebarVisible = useSelector(isVisible);
  const dispatch = useDispatch();

  return (
    <nav className="z-40 flex  w-screen items-center justify-around bg-neutral-600">
      <button className="flex h-10 w-10 items-center justify-around text-2xl text-neutral-200 transition  duration-[200] hover:-translate-y-1 hover:ease-in-out">
        <RxHamburgerMenu
          onClick={() => dispatch(toggleVisible(!isSidebarVisible))}
        />
      </button>

      <button className="flex h-10 w-10 items-center justify-around text-2xl text-neutral-200 transition  duration-[200] hover:-translate-y-1 hover:ease-in-out">
        <FaHome />
      </button>

      <button className="flex h-10 w-10 items-center justify-around text-2xl text-neutral-200 transition  duration-[200] hover:-translate-y-1 hover:ease-in-out">
        <FaBell />
      </button>

      <button className="flex h-10 w-10 items-center justify-around text-2xl text-neutral-200 transition  duration-[200] hover:-translate-y-1 hover:ease-in-out">
        <FaSearch />
      </button>

      <button className="flex h-10 w-10 items-center justify-around text-2xl text-neutral-200 transition  duration-[200] hover:-translate-y-1 hover:ease-in-out">
        <FaGear />
      </button>
    </nav>
  );
};

export default NavBar;
