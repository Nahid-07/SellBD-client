import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';
export const AuthProvider = createContext() 
const auth = getAuth(app)

const Context = ({children}) => {
    const [user,setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    // Creating User
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // updating User Info
    const updateUser = ()=>{
        return updateProfile()
    }

    const authInfo = {
        user,
        createUser
    }
    return (
        <AuthProvider.Provider value={authInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default Context;