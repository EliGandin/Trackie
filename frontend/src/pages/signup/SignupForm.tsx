import { FieldValues, useForm } from "react-hook-form";
import FieldValueError from "../../ui/FieldValueError";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    // Submit to server
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
  };

  return (
    <div className="relative z-40 flex h-screen w-screen flex-col items-center overflow-hidden bg-white">
      <div>
        <img
          className="z-10 blur-sm"
          src="/signup.jpg"
          alt="background-signup"
        />
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="absolute top-52 z-20 m-auto flex h-[425px] w-80 flex-col items-center gap-y-2 rounded-lg  bg-stone-500 p-7 text-stone-900"
      >
        <input
          className="my-2 w-64 rounded px-4 py-2"
          placeholder="name"
          {...register("name", { required: "Please provide a name" })}
        />

        <input
          className="my-2 w-64 rounded px-4 py-2"
          placeholder="email"
          {...register("email", {
            required: "Please provide an email address",
          })}
        />

        <input
          type="password"
          className="my-2 w-64 rounded px-4 py-2"
          placeholder="password"
          {...register("password", {
            required: "Please provide a password",
            minLength: {
              value: 6,
              message: "password must have at least 10 characters",
            },
          })}
        />

        <input
          type="password"
          className="mt-2 w-64 rounded px-4 py-2"
          placeholder="confirm password"
          {...register("confirmPassword", {
            required: "Please provide a password",

            validate: (value) =>
              value === getValues("password") || "Passwords do not match",
          })}
        />

        <ul>
          {errors.email && (
            <FieldValueError error={`${errors.email.message}`} />
          )}
          {errors.password && (
            <FieldValueError error={`${errors.password.message}`} />
          )}
          {errors.confirmPassword && (
            <FieldValueError error={`${errors.confirmPassword.message}`} />
          )}
        </ul>

        <div className="absolute bottom-2 mx-2 flex text-sm text-stone-50">
          <p className="px-1">Already have an account?</p>
          <Link
            to="/login"
            className="px-2 text-emerald-400 hover:text-emerald-500"
          >
            Sign in
          </Link>
        </div>

        <button
          type="submit"
          className="absolute bottom-9 w-20 rounded border bg-emerald-500 py-1 text-neutral-100 hover:bg-emerald-400 disabled:bg-neutral-600 disabled:text-neutral-400"
          disabled={isSubmitting}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
