import { Link } from "react-router-dom";

const HomeNav = () => {
  return (
    <nav className="fixed z-40 flex h-12 w-full justify-end bg-stone-600 text-stone-200">
      <Link
        to="/login"
        className="mx-4 mt-2 h-7 w-20 rounded-md bg-emerald-500 px-2 text-center align-middle hover:bg-emerald-600"
      >
        Login
      </Link>
      <Link
        to="/signup"
        className="mx-4 mt-2 h-7 w-20  rounded-md bg-emerald-500 px-2 text-center align-middle hover:bg-emerald-600"
      >
        Sign Up
      </Link>
    </nav>
  );
};

export default HomeNav;
