import { FieldValues, useForm } from "react-hook-form";
import FieldValueError from "./FieldValueError";

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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-y-2 text-stone-900"
    >
      <input
        className="rounded px-4 py-2"
        placeholder="name"
        {...register("name", { required: "Please provide a name" })}
      />

      <input
        className="rounded px-4 py-2 text-center"
        placeholder="email"
        {...register("email", { required: "Please provide an email address" })}
      />
      {errors.email && <FieldValueError error={`${errors.email.message}`} />}

      <input
        className="rounded px-4 py-2"
        placeholder="password"
        {...register("password", {
          required: "Please provide a password",
          minLength: {
            value: 6,
            message: "password must have at least 10 characters",
          },
        })}
      />
      {errors.password && (
        <FieldValueError error={`${errors.password.message}`} />
      )}

      <input
        className="rounded px-4 py-2"
        placeholder="confirm password"
        {...register("confirmPassword", {
          required: "Please provide a password",
          validate: (value) =>
            value === getValues("password") || "Passwords do not match",
        })}
      />
      {errors.confirmPassword && (
        <FieldValueError error={`${errors.confirmPassword.message}`} />
      )}

      <button
        type="submit"
        className="mt-5 w-20 rounded border bg-emerald-500 py-1 text-neutral-100 disabled:bg-neutral-600 disabled:text-neutral-400"
        disabled={isSubmitting}
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
