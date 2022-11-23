import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const LogIn = () => {
    const {register,handleSubmit} = useForm()
    const handleLogin = ()=>{

    }
    return (
        <div className="max-w-7xl mx-auto flex justify-center items-center">
        <form className="w-96 my-28" onSubmit={handleSubmit(handleLogin)}>
        <h1 className="text-3xl font-medium text-center">Login</h1>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
             {...register("email", { required: true})}
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
              {...register("password", { required: true})}
            />
          </div>
          <div className="mt-5">
              <button type="submit" className="btn  bg-[#293462] w-full">Login</button>
          </div>
          <p className="mt-2">New to dorctor portal ? <Link to='/signup'>Sign Up</Link></p>
          <div className="divider">OR</div>
          <div className="mt-5">
              <button  type="submit" className="btn btn-outline hover:bg-[#293462] w-full">Google Sign In</button>
          </div>
        </form>
      </div>
    );
};

export default LogIn;