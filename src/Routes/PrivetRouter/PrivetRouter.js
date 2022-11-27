import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthProvider } from "../../Context/Context";
// import { BallTriangle } from "react-loader-spinner";
import Loader from "../../Loader/Loader";

const PrivetRouter = ({ children }) => {
  let location = useLocation();
  const { user, loader } = useContext(AuthProvider);
  if (loader) {
    return <Loader></Loader>
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivetRouter;
