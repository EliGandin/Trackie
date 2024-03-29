import { LatLngTuple } from "leaflet";
import { useDispatch, useSelector } from "react-redux";
import {
  getPost,
  renderContent,
  setDisplayedPost,
} from "../../stores/slices/sidebarSlice";

interface FeedItemProps {
  postId: number;
  location: { name: string; coordinates: LatLngTuple };
  author: string;
  story: string;
}

const FeedItem = ({ postId, location, author, story }: FeedItemProps) => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(renderContent({ content: "post" }));
        dispatch(setDisplayedPost({ postId, location, author, story }));
      }}
      className="m-4 flex h-20 w-80 flex-col rounded-lg bg-neutral-500 px-3 pt-1 text-left"
    >
      {/* <img/> */}

      <p className="">{author}'s post from:</p>
      <span className="text-center text-xl">{location?.name}</span>
    </button>
  );
};

export default FeedItem;
