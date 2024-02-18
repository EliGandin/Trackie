import { useDispatch, useSelector } from "react-redux";
import { getContent, renderContent } from "../../stores/slices/sidebarSlice";
import NewPost from "../../features/NewPost/NewPost";
import Feed from "../../features/Feed/Feed";
import SinglePost from "../../features/Feed/SinglePost";
import Search from "../../features/Search/Search";
import FriendList from "../../features/Friends/FriendList";

const SideBar = () => {
  const content = useSelector(getContent);
  const dispatch = useDispatch();

  return (
    <div
      className="absolute top-[40px] z-40 flex h-[881px] w-96 flex-col items-center overflow-hidden rounded-br-lg rounded-tr-lg border
    border-neutral-900 bg-neutral-600 text-neutral-100 2xl:h-[881px]"
    >
      <div className="relative z-10 ml-10 w-[600px]">
        <img src="/backgrounds/trackie-no-bg.png" alt="trackie" />
      </div>
      <div className="mt-[-65px]">
        {content === "feed" && <Feed />}
        {content === "post" && <SinglePost />}
        {content === "newPost" && <NewPost />}
        {content === "friendList" && <FriendList />}
        {/* {content === "notification" && <Noti} */}
        {content === "search" && <Search />}
        {/* {content === "set" && (<Settings />)} */}
      </div>
      {(content === "feed" || content === "post") && (
        <button
          className="absolute bottom-5 w-[32px] rounded-full border border-solid bg-neutral-600 pb-1 text-lg font-bold"
          onClick={() => dispatch(renderContent({ content: "newPost" }))}
        >
          +
        </button>
      )}
    </div>
  );
};

export default SideBar;
