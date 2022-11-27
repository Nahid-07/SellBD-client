import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthProvider } from "../../Context/Context";
import useAdmin from "../../Hooks/useAdmin";
import Navbar from "../../Shared/Navbar/Navbar";

const DashBordLayOut = () => {
  const { user } = useContext(AuthProvider);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashbord/allusers">All users</Link>
                </li>
                <li>
                  <Link to="/dashbord/seller">All seller</Link>
                </li>
              </>
            )}
            <li>
              <Link to="/dashbord/myorders">My Orders</Link>
            </li>
            <li>
              <Link to="/dashbord/addproduct">Add product</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBordLayOut;
