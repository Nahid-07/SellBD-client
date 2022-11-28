import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthProvider } from "../../Context/Context";
import useAdmin from "../../Hooks/useAdmin";
import useBuyer from "../../Hooks/useBuyer";
import useSeller from "../../Hooks/useSeller";
import Navbar from "../../Shared/Navbar/Navbar";

const DashBordLayOut = () => {
  const { user } = useContext(AuthProvider);
  const [isAdmin] = useAdmin(user?.email);
  const [isSellers] = useSeller(user?.email);
  const [isBuyers] = useBuyer(user?.email);
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
          <ul className="menu p-4 w-80 bg-slate-100 text-base-content">
            {isAdmin && (
              <>
                <li className="border-b-2 border-[#293462]">
                  <Link to="/dashbord/allusers">All users</Link>
                </li>
                <li className="border-b-2 border-[#293462]">
                  <Link to="/dashbord/seller">All seller</Link>
                </li>
                <li className="border-b-2 border-[#293462]">
                  <Link to="/dashbord/buyers">All Buyer</Link>
                </li>
                <li className="border-b-2 border-[#293462]">
                  <Link to="/dashbord/reporteditems">Reported Items</Link>
                </li>
              </>
            )}

            {isBuyers && (
              <li className="border-b-2 border-[#293462]">
                <Link to="/dashbord/myorders">My Orders</Link>
              </li>
            )}

            {isSellers && (
              <>
                <li className="border-b-2 border-[#293462]">
                  <Link to="/dashbord/addproduct">Add product</Link>
                </li>
                <li className="border-b-2 border-[#293462]">
                  <Link to="/dashbord/myproducts">My Products</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBordLayOut;
