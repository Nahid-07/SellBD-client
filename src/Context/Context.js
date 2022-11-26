import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';
export const AuthProvider = createContext() 
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const Context = ({children}) => {
    const [user,setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    // Creating User
    const createUser = (email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // Login user
    const logIn = (email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // Google log in
    const googleLogin = ()=>{
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
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
            setLoader(false)
        });
        return()=> unsubscribe()
    },[])
    const authInfo = {
        user,
        createUser,updateUser,
        logIn,
        logOut,
        googleLogin,
        loader
    }
    return (
        <AuthProvider.Provider value={authInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default Context;