import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors, isSubmitting },
    getValues,
  } = useForm();
  const navigate = useNavigate();

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
    <div className="flex flex-col">
      <div>
        {/* <img
              className="z-10 blur-sm"
              src="/signup.jpg"
              alt="background-signup"
            /> */}
      </div>

      <form
        className=""
        // onSubmit={handleSubmit(onSubmit)}
      >
        <p className="mb-1 text-neutral-300">Location</p>
        <input placeholder="Tokyo, Japan" {...register("locationName")} />

        <p>Story</p>
        <input placeholder="Tell us about this place" {...register("story")} />

        <button className="absolute bottom-9 w-20 rounded border bg-emerald-500 py-1 text-neutral-100 hover:bg-emerald-400 disabled:bg-neutral-600 disabled:text-neutral-400">
          Upload up to 10 photos
        </button>

        {/* <ul>
              {errors.email && (
                <FieldValueError error={`${errors.email.message}`} />
              )}
              {errors.password && (
                <FieldValueError error={`${errors.password.message}`} />
              )}
              {errors.confirmPassword && (
                <FieldValueError error={`${errors.confirmPassword.message}`} />
              )}
            </ul> */}

        {/* <div className="absolute bottom-2 mx-2 flex text-sm text-stone-50">
              <p className="px-1">Already have an account?</p>
              <Link
                to="/login"
                className="px-2 text-emerald-400 hover:text-emerald-500"
              >
                Sign in
              </Link>
            </div> */}

        {/* <button
              type="submit"
              className="absolute bottom-9 w-20 rounded border bg-emerald-500 py-1 text-neutral-100 hover:bg-emerald-400 disabled:bg-neutral-600 disabled:text-neutral-400"
              disabled={isSubmitting}
            >
              Sign Up
            </button> */}
      </form>
    </div>
  );
};

export default NewPost;
