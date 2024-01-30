import { FieldValues, useForm } from "react-hook-form";
import { useMap } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { cursorMarker, setCursorMarker } from "../Map/mapSlice";

const NewPost = () => {
  const currMarker = useSelector(cursorMarker);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    // formState: { isSubmitting },
  } = useForm();

  const flyToLocation = (e: React.MouseEvent) => {
    e.preventDefault();
    // if (currMarker) map.flyTo(currMarker);
  };

  // const onSubmit = async (data: FieldValues) => {
  //   const res = await fetch("http://localhost:8000/signup", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   });
  //   console.log(res);
  // };

  return (
    <div className="flex flex-col text-stone-800">
      <form
        className="flex flex-col"
        // onSubmit={handleSubmit(onSubmit)}
        onSubmit={(e) => {
          e.preventDefault();
          console.log("GOOD");
        }}
      >
        <p className="mb-1 text-neutral-300">Location</p>
        <div className="mb-3 flex">
          <input
            className="rounded px-4 py-2"
            placeholder="Tokyo, Japan"
            {...register("locationName")}
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
          // disabled={isSubmitting}
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
    </div>
  );
};

export default NewPost;
