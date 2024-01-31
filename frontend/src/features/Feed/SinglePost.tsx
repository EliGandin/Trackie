import { useDispatch, useSelector } from "react-redux";
import { clearPost, getPost } from "../../stores/slices/sidebarSlice";

const SinglePost = () => {
  const post = useSelector(getPost);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   async function fetchPost() {
  //     const res = await fetch(`http://localhost:8000/post/${postId}`);
  //     console.log(res);
  //     const data = await res.json();
  //     console.log(data);
  //   }
  //   fetchPost();
  // }, [postId]);

  return (
    <div className="m-4 flex h-20 w-80 flex-col rounded-lg bg-neutral-500 px-3 pt-1 text-left">
      <p className="">{post.author}'s post from:</p>
      <span className="text-center text-xl">{post.location.name}</span>

      <button onClick={() => dispatch(clearPost())}>Show feed</button>
    </div>
  );
};

export default SinglePost;
