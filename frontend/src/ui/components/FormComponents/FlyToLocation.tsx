import { useDispatch, useSelector } from "react-redux";

import {
  getLocationCoordinates,
  setCursorMarker,
} from "../../../stores/slices/mapSlice";

const FlyToLocation = () => {
  const coordinates = useSelector(getLocationCoordinates);
  const dispatch = useDispatch();

  return (
    <div className="relative right-0 top-28 self-center rounded border border-neutral-100 px-2 text-lg">
      <button onClick={() => dispatch(setCursorMarker(coordinates))}>
        Fly To Location
      </button>
    </div>
  );
};

export default FlyToLocation;
