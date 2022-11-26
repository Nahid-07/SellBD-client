import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthProvider } from "../Context/Context";
import useToken from "../Hooks/usehook";
import Loader from "../Loader/Loader";


const LogIn = () => {
  const { register, handleSubmit } = useForm();
  const { logIn, googleLogin,loader } = useContext(AuthProvider);
  const [error,setError] = useState('')
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if(token){
      navigate(from, { replace: true });
    }
  const handleLogin = (data) => {
    logIn(data.email, data.password)
      .then(() => {
        setCreatedUserEmail(data.email)
        
        toast.success('Successfully logged in')
      })
      .catch((err) => {
        setError(err.message)
      });
      setError('')
  };
  const handleGoogleLogIn = () => {
    googleLogin()
      .then((result) => {
        // const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err.message));
  };
  if(loader){
    return <Loader></Loader>
  }
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
            required
          />
          <p className="text-red-600">{error}</p>
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
          <p className="text-red-600">{error}</p>
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
