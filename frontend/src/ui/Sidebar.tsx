import NewPostForm from "./NewPostForm/NewPostForm";

const SideBar = () => {
  return (
    <div
      className="absolute top-10 z-40 flex h-[901px] w-96 flex-col items-center justify-between space-y-4 rounded-br-lg rounded-tr-lg border border-neutral-900 
    bg-neutral-600 p-14 text-neutral-100"
    >
      {/* sidebar placeholder */}
      <NewPostForm />
      <button className="flex w-[32px] items-center justify-center gap-2 rounded-full border border-solid bg-neutral-600 pb-1 text-lg font-bold">
        {/* onClick={to="newpostform"}> TODO:*/}+
      </button>
    </div>
  );
};

export default SideBar;
