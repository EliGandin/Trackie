import { FaHome, FaSearch, FaBell } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
  return (
    <nav className="flex w-auto bg-emerald-500 text-emerald-10 items-center justify-around">
      <button className="text-2xl w-10 h-10 flex items-center justify-around text-emerald-100 hover:ease-in-out  transition duration-[200] hover:-translate-y-1">
        <RxHamburgerMenu />
      </button>
      <button className="text-2xl w-10 h-10 flex items-center justify-around text-emerald-100 hover:ease-in-out  transition duration-[200] hover:-translate-y-1">
        <FaHome />
      </button>
      <button className="text-2xl w-10 h-10 flex items-center justify-around text-emerald-100 hover:ease-in-out  transition duration-[200] hover:-translate-y-1">
        <FaBell />
      </button>
      <button className="text-2xl w-10 h-10 flex items-center justify-around text-emerald-100 hover:ease-in-out  transition duration-[200] hover:-translate-y-1">
        <FaSearch />
      </button>
      <button className="text-2xl w-10 h-10 flex items-center justify-around text-emerald-100 hover:ease-in-out  transition duration-[200] hover:-translate-y-1">
        <FaGear />
      </button>
    </nav>
  );
};

export default NavBar;
