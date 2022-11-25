import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthProvider } from "../../Context/Context";

const Navbar = () => {
  const { user,logOut } = useContext(AuthProvider);
  const handleLogOut = ()=>{
    logOut()
    .then(()=>{})
    .catch(err => console.log(err))
  }
  const menu = (
    <>
      <li>
        <Link className="text-white" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="text-white" to="/dashbord">
          Dashbord
        </Link>
      </li>
      <li>
        <Link className="text-white" to="/users">
          Users
        </Link>
      </li>
      <li>
        <Link className="text-white" to="/blogs">
          Blog
        </Link>
      </li>

      {user?.email ? (
        <li>
          <Link className="text-white" to="/">
            <button onClick={handleLogOut}>Log out</button>
          </Link>
        </li>
      ) : (
        <li>
          <Link className="text-white" to="/login">
            Log in
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className="bg-[#293462] ">
      <div className="navbar justify-between container mx-auto py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={1} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={1}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#293462] rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-white text-xl">
            SellBD
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menu}</ul>
        </div>
        <label htmlFor="my-drawer-2" tabIndex={2} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
      </div>
      
    </div>
  );
};

export default Navbar;
