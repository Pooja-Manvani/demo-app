import React from 'react'
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
 } from "firebase/auth";
 import {auth} from '../Components/Firebase'

 const authContext = createContext();


export function AuthContextProvider({ children }) {
    const [user,setUser] = useState();
    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }
    function logOut(){
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, []);
  return (
   <authContext.Provider value={{user, signUp, logIn, logOut}} >{ children }</authContext.Provider>
  )
}

export function useUserAuth() {
  return useContext(authContext);
}

