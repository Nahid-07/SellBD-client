import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthProvider } from "../Context/Context";


const LogIn = () => {
  const { register, handleSubmit } = useForm();
  const { logIn, googleLogin } = useContext(AuthProvider);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const handleLogin = (data) => {
    logIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("Successfully logged in");
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };
  const handleGoogleLogIn = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="max-w-7xl mx-auto flex justify-center items-center px-4">
      <form className="w-96 my-28" onSubmit={handleSubmit(handleLogin)}>
        <h1 className="text-3xl font-medium text-center">Login</h1>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            {...register("email", { required: true })}
            type="text"
            placeholder="Email"
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="****"
            className="input input-bordered w-full"
            {...register("password", { required: true })}
          />
        </div>
        <div className="mt-5">
          <button type="submit" className="btn  bg-[#293462] w-full">
            Login
          </button>
        </div>
        <p className="mt-2">
          New to dorctor portal ? <Link to="/signup">Sign Up</Link>
        </p>
        <div className="divider">OR</div>
        <div className="mt-5">
          <button
            onClick={handleGoogleLogIn}
            type="submit"
            className="btn btn-outline hover:bg-[#293462] w-full"
          >
            Google Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
