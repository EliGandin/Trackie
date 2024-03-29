import { FieldValues, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { clearUser, setUser, userDetails } from "../../stores/slices/userSlice";
import FieldValueError from "../FieldValueError";
import { userLogin } from "../../services/userServices";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(userDetails);

  const { mutate } = useMutation({
    mutationKey: ["userLogin"],
    mutationFn: userLogin,
    onSuccess: (data) => {
      dispatch(setUser(data.data.userData));
      navigate("/app");
    },
  });

  const onSubmit = async (data: FieldValues) => {
    mutate(data);
    if (!user.userId) reset();
  };

  return (
    <div className="relative z-40 flex h-screen w-screen flex-col items-center overflow-hidden bg-white">
      <div>
        <img
          className="z-10 blur-sm"
          src="/backgrounds/login.jpg"
          alt="background-login"
        />
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
          {errors.notRegistered && (
            <FieldValueError error={`${errors.notRegistered.message}`} />
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
