import { useDispatch, useSelector } from "react-redux";
import { getContent, renderContent } from "../../stores/slices/sidebarSlice";
import NewPost from "../../features/NewPost/NewPost";
import Feed from "../../features/Feed/Feed";
import SinglePost from "../../features/Feed/SinglePost";

const SideBar = () => {
  const content = useSelector(getContent);
  const dispatch = useDispatch();

  return (
    <div
      className="absolute top-[40px] z-40 flex h-[881px] w-96 flex-col items-center rounded-br-lg rounded-tr-lg border border-neutral-900 
    bg-neutral-600 text-neutral-100"
    >
      <div className="relative ml-10 w-[600px]">
        <img src="/trackie-no-bg.png" alt="trackie" />
      </div>
      {content === "feed" && <Feed />}
      {content === "post" && <SinglePost />}
      {content === "newPost" && <NewPost />}
      {/* {content === "notification" && <Noti} */}
      {/* {content === "search" && (<Search />)} */}
      {/* {content === "set" && (<Settings />)} */}
      {content !== "newPost" && (
        <button
          className="flex w-[32px] items-center justify-center gap-2 rounded-full border border-solid bg-neutral-600 pb-1 text-lg font-bold"
          onClick={() => dispatch(renderContent({ content: "newPost" }))}
        >
          +
        </button>
      )}
    </div>
  );
};

export default SideBar;
