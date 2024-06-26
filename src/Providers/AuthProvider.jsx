import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
export const AuthContext = createContext(null);
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.config";

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword (auth,email,password)
    }

    const singinUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    const logOut = ()=>{
        setLoading(true)
       return signOut(auth)
    }
     
    useEffect(()=>{
      const unsSubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
            console.log('observing currentUser',currentUser);
        });
        return ()=>{
            unsSubscribe()
        }

     },[])

    const authInfo = {
        user, 
        createUser,
        singinUser,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value = {authInfo}>
         {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children : PropTypes.node
}
/*
1.create context and export it
2.set provider with value
3.use the auth provider in the main.jsx file
4.access children in the AuthProvider component as children and use it in the middle of the provider
*/