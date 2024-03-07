import { useDispatch } from "react-redux";
import { renderContent } from "../../stores/slices/sidebarSlice";

const NewPostButton = () => {
  const dispatch = useDispatch();

  return (
    <div className="self-center">
      <button
        className="absolute bottom-5 w-[32px] rounded-full border border-solid bg-neutral-600 pb-1 text-lg font-bold"
        onClick={() => {
          dispatch(
            renderContent({
              content: "newPost",
            }),
          );
        }}
      >
        +
      </button>
    </div>
  );
};

export default NewPostButton;
