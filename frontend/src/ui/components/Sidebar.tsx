import { useSelector } from "react-redux";
import { getContent } from "../sidebarSlice";
import NewPost from "../../features/NewPost/NewPost";

const SideBar = () => {
  const content = useSelector(getContent);

  return (
    <div
      className="absolute top-[40px] z-40 flex h-[881px] w-96 flex-col items-center rounded-br-lg rounded-tr-lg border border-neutral-900 
    bg-neutral-600 text-neutral-100"
    >
      <div className="relative ml-10 w-[600px]">
        <img src="/trackie-no-bg.png" alt="trackie" />
      </div>
      <NewPost />
      {/* {content === "feed" && <Feed />}
      {content === "post" && <SinglePost />} */}
      {/* {content === "notification" && <Noti} */}
      {/* {content === "feed" && (<Search />)} */}
      {/* {content === "feed" && (<Settings />)} */}
      {content !== "newPost" && (
        <button className="flex w-[32px] items-center justify-center gap-2 rounded-full border border-solid bg-neutral-600 pb-1 text-lg font-bold"></button>
      )}
    </div>
  );
};

export default SideBar;
