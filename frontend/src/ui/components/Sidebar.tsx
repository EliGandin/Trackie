import { useSelector } from "react-redux";
import { getContent } from "../sidebarSlice";
import Feed from "../../features/Feed/Feed";

const SideBar = () => {
  const content = useSelector(getContent);

  return (
    <div
      className="absolute top-[40px] z-40 flex h-[881px] w-96 flex-col items-center justify-between space-y-4 rounded-br-lg rounded-tr-lg border border-neutral-900 
    bg-neutral-600 p-14 text-neutral-100"
    >
      <img className="" src="/logo-color.svg" alt="trackie" /> //TODO: Style
      {content === "feed" && <Feed />}
      {/* {content === "notification" && <Noti} */}
      {/* {content === "feed" && (<Search />)} */}
      {/* {content === "feed" && (<Settings />)} */}
      <button className="flex w-[32px] items-center justify-center gap-2 rounded-full border border-solid bg-neutral-600 pb-1 text-lg font-bold">
        {/* onClick={to="newpostform"}> TODO:*/}+
      </button>
    </div>
  );
};

export default SideBar;
