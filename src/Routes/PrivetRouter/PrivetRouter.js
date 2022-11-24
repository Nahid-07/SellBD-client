import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../../Context/Context';

const PrivetRouter = ({children}) => {
    let location = useLocation();
    const {user} = useContext(AuthProvider)
    if(user){
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivetRouter;