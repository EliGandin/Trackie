import { FieldValues, useForm } from "react-hook-form";
import FieldValueError from "../../ui/FieldValueError";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data: FieldValues) => {
    // Submit to server
    console.log(data);
    const res = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(res);
    if (res.ok) navigate("/app");
  };

  return (
    <div className="relative z-40 flex h-screen w-screen flex-col items-center overflow-hidden bg-white">
      <div>
        <img className="z-10 blur-sm" src="login.jpg" alt="background-login" />
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="absolute top-52 z-20 m-auto flex h-[275px] w-80 flex-col items-center gap-y-2 rounded-lg  bg-stone-500 p-7 text-stone-900"
      >
        <input
          className="my-2 w-64 rounded px-4 py-2"
          placeholder="email"
          {...register("email", {
            required: "please provide an email",
          })}
        />

        <input
          type="password"
          className="mb-1 w-64 rounded px-4 py-2"
          placeholder="password"
          {...register("password", {
            required: "Please provide a password",
            minLength: {
              value: 6,
              message: "password must have at least 6 characters",
            },
          })}
        />

        <ul className="items-start">
          {errors.email && (
            <FieldValueError error={`${errors.email.message}`} />
          )}
          {errors.password && (
            <FieldValueError error={`${errors.password.message}`} />
          )}
        </ul>

        <button
          type="submit"
          className="absolute bottom-9 w-20 rounded border bg-emerald-500 py-1 text-neutral-100 disabled:bg-neutral-600 disabled:text-neutral-400"
          disabled={isSubmitting}
        >
          Login
        </button>

        <div className="absolute bottom-2 mx-2 flex text-sm text-stone-50">
          <p className="px-1">Don't have an account?</p>
          <Link
            to="/signup"
            className="hover:text-emerald-6500 px-2 text-emerald-400"
          >
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
