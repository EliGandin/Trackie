import { useDispatch, useSelector } from "react-redux";
import { clearPost, getPost } from "../../stores/slices/sidebarSlice";
import { useQuery } from "@tanstack/react-query";
import { getSinglePost } from "../../services/postServices";

const SinglePost = () => {
  const post = useSelector(getPost);
  const dispatch = useDispatch();

  const {
    data: image,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["image"],
    queryFn: async () => {
      const res = await getSinglePost(post.postId);
      return res.image;
    },
  });

  return (
    <div className="m-4 flex h-auto w-80 flex-col rounded-lg bg-neutral-500 px-3 pt-1 text-left">
      <p className="">{post.author}'s post from:</p>

      <span className="text-left text-xl">
        {post.location?.name}
        <button className="absolute right-10 rounded border border-neutral-100 px-2 align-middle text-lg">
          Fly To Location
        </button>
      </span>

      <p className="py-2">{post.story} </p>

      <img className="h-36 w-36" src={image.toString()} />

      <button
        className="border-stone-10 absolute bottom-16 self-center rounded border px-2 text-neutral-100"
        onClick={() => dispatch(clearPost())}
      >
        Show feed
      </button>
    </div>
  );
};

export default SinglePost;
