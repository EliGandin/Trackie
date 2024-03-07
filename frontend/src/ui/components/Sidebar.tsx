import { useSelector } from "react-redux";

import { getContent } from "../../stores/slices/sidebarSlice";
import NewPost from "../../features/NewPost/NewPost";
import Feed from "../../features/Feed/Feed";
import SinglePost from "../../features/Feed/SinglePost";
import Search from "../../features/Search/Search";
import FriendList from "../../features/Friends/FriendList";
import NewPostButton from "../../features/NewPost/NewPostButton";

const SideBar = () => {
  const content = useSelector(getContent);
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
      </div>
      {(content === "feed" || content === "post") && <NewPostButton />}
    </div>
  );
};

export default SideBar;
