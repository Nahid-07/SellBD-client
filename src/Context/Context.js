import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
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
    // Login user
    const logIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    // updating User Info
    const updateUser = (name)=>{
        return updateProfile(auth.currentUser,{
            displayName : name
        })
    }
    // log out
    const logOut= ()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
        });
        return()=> unsubscribe()
    },[])
    const authInfo = {
        user,
        createUser,updateUser,
        logIn,
        logOut
    }
    return (
        <AuthProvider.Provider value={authInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default Context;