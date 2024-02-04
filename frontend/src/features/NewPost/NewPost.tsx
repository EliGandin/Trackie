import { FieldValues, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addMarker, cursorMarker } from "../../stores/slices/mapSlice";
import { renderContent } from "../../stores/slices/sidebarSlice";
import FieldValueError from "../../pages/FieldValueError";
import { userDetails } from "../../stores/slices/userSlice";

const NewPost = () => {
  const currMarker = useSelector(cursorMarker);
  const user = useSelector(userDetails);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const flyToLocation = (e: React.MouseEvent) => {
    e.preventDefault();

    // if (currMarker) map.flyTo(currMarker);
  };

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    console.log(currMarker);
    if (!currMarker) return;

    const location = {
      name: data.locationName,
      coordinates: currMarker,
    };

    const postData = {
      location,
      story: data.story,
      userId: user.userId,
    };

    console.log(postData);

    const res = await fetch("http://localhost:8000/addPost", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...postData }),
    });

    console.log(res);

    const parsedRes = await res.json();
    console.log(parsedRes);

    if (res.ok) {
      dispatch(addMarker({ currMarker, postId: parsedRes.data }));
      dispatch(renderContent({ content: "feed" }));
    }
  };

  return (
    <div className="flex flex-col text-stone-800">
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <p className="mb-1 text-neutral-300">Location</p>
        <div className="mb-3 flex">
          <input
            className="rounded px-4 py-2"
            placeholder="Tokyo, Japan"
            {...register("locationName", {
              required: "please provide a location",
            })}
          />

          <button className="ml-2 rounded border border-stone-100 bg-zinc-600 p-2 text-stone-100">
            Fly To Location
          </button>
        </div>

        <p className="mb-1 text-neutral-300">Story</p>
        <textarea
          className="h-32 rounded px-4 py-2 text-start"
          placeholder="Tell us about this place"
          {...register("story")}
        />

        <button
          type="button"
          className="mt-5 w-24 self-center rounded-lg border bg-emerald-500 py-1 text-neutral-100 hover:bg-emerald-600 disabled:bg-neutral-600 disabled:text-neutral-400"
          disabled={isSubmitting}
          onClick={(e) => flyToLocation(e)}
        >
          Upload Photos
        </button>

        <p className="mt-2 self-center text-neutral-400">
          upload up to 3 photos
        </p>

        <button className="mt-5 w-20 self-center rounded-lg border bg-emerald-500 py-1 text-neutral-100 hover:bg-emerald-600 disabled:bg-neutral-600 disabled:text-neutral-400">
          Post
        </button>
      </form>
      <ul className="mt-2">
        {errors.locationName && (
          <FieldValueError error={`${errors.locationName.message}`} />
        )}
      </ul>

      <button
        className="fixed bottom-12 rounded border px-2 py-1 text-lg text-neutral-100 hover:bg-neutral-700"
        onClick={() => dispatch(renderContent({ content: "feed" }))}
      >
        &#8592; Back to feed
      </button>
    </div>
  );
};

export default NewPost;
