import { useForm } from "react-hook-form";

const NewPost = () => {
  const {
    register,
    handleSubmit,
    // formState: { isSubmitting },
  } = useForm();

  //   const onSubmit = async (data: FieldValues) => {
  // const res = await fetch("http://localhost:8000/signup", {
  //   method: "POST",
  //   headers: {
  //     "content-type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // });

  // if (res.ok) navigate("/login");
  //   };

  return (
    <div className="flex flex-col text-stone-800">
      <form
        className="flex flex-col"
        // onSubmit={handleSubmit(onSubmit)}
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
          type="submit"
          className="mt-5 w-24 self-center rounded-lg border bg-emerald-500 py-1 text-neutral-100 hover:bg-emerald-600 disabled:bg-neutral-600 disabled:text-neutral-400"
          // disabled={isSubmitting}
        >
          Upload Photos
        </button>
        <p className="mt-2 self-center text-neutral-400">
          upload up to 3 photos
        </p>
      </form>
    </div>
  );
};

export default NewPost;
