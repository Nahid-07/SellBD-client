import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";

const DashBordLayOut = () => {
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
            <li>
              <Link to='/dashbord/mybuyers'>My buyers</Link>
            </li>
            <li>
              <Link to='/dashbord/myproducts'>My products</Link>
            </li>
            <li>
              <Link to='/dashbord/addproduct'>Add product</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBordLayOut;
