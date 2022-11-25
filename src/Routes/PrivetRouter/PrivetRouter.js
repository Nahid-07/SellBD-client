import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../../Context/Context';
// import { BallTriangle } from "react-loader-spinner";
import {RingLoader} from 'react-spinners'

const PrivetRouter = ({children}) => {
    let location = useLocation();
    const {user,loader} = useContext(AuthProvider)
        if(loader){
            return <RingLoader
            color="#293462"
            size={200}
          />
          }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivetRouter;