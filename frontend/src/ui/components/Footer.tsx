import { useDispatch } from "react-redux";
import { clearCursorMarker } from "../../stores/slices/mapSlice";

const Footer = () => {
  const dispatch = useDispatch();

  return (
    <footer className="fixed bottom-0 z-10 flex h-8 w-screen items-center justify-center bg-neutral-600 text-neutral-200">
      <button
        className="rounded border border-stone-200 px-1"
        onClick={() => dispatch(clearCursorMarker())}
      >
        Clear Marker
      </button>
    </footer>
  );
};

export default Footer;
