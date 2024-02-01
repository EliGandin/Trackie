import { FaHome, FaSearch, FaBell } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { renderContent } from "../../stores/slices/sidebarSlice";
import { userDetails } from "../../stores/slices/userSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const userData = useSelector(userDetails);

  return (
    <nav className="z-40 flex  w-screen items-center justify-around bg-neutral-600">
      <button className="flex h-10 w-10 items-center justify-around text-2xl text-neutral-200 transition duration-[200] hover:-translate-y-1 hover:ease-in-out">
        <RxHamburgerMenu
          onClick={() => dispatch(renderContent({ content: "feed" }))}
        />
      </button>

      <button className="flex h-10 w-10 items-center justify-around text-2xl text-neutral-200 transition duration-[200] hover:-translate-y-1 hover:ease-in-out">
        <FaHome onClick={() => dispatch(renderContent({ content: "home" }))} />
      </button>

      <button className="flex h-10 w-10 items-center justify-around text-2xl text-neutral-200 transition duration-[200] hover:-translate-y-1 hover:ease-in-out">
        <FaBell
          onClick={() => dispatch(renderContent({ content: "notifications" }))}
        />
      </button>

      <button className="flex h-10 w-10 items-center justify-around text-2xl text-neutral-200 transition duration-[200] hover:-translate-y-1 hover:ease-in-out">
        <FaSearch
          onClick={() => dispatch(renderContent({ content: "search" }))}
        />
      </button>

      <button
        className="text-md rounded border px-2 text-neutral-100"
        onClick={() => dispatch(renderContent({ content: "settings" }))}
      >
        Hello {userData.username}
      </button>
    </nav>
  );
};

export default NavBar;
