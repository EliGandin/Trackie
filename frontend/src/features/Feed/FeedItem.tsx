import { LatLngTuple } from "leaflet";
import { Link } from "react-router-dom";

interface FeedItemProps {
  location: { name: string; coordinates: LatLngTuple };
  // author: string;
  author: number;
}

const FeedItem = ({ location, author }: FeedItemProps) => {
  return (
    <Link
      to="/app"
      className="m-4 flex h-20 w-80 flex-col rounded-lg bg-neutral-500 px-3 pt-1 text-left"
    >
      {/* <img/> */}

      <p className="">{author}'s post from:</p>
      <span className="text-center text-xl">{location.name}</span>
    </Link>
  );
};

export default FeedItem;
