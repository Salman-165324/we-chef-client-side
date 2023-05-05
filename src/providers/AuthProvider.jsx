import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext(null); 
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true); 
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();



    // console.log("is loading", loading); 

    // Functions for Signup
    const register = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password); 
    }
    const addUserNameAndPhoto = (name, photoURL) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photoURL
          }); 
    }

    // Functions for Login 

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password); 
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider); 
    }

    const signInWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider); 
    }


    // Function for logout 

    const logout = () => {
        return signOut(auth); 
    }

    // setting observer on the Auth Object 

    useEffect(()=> {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser); 
            setLoading(false);
            // console.log("is loading", loading); 
        })

        return () => {

            unsubscribe(); 
        }

    }, [])

    // console.log("is loading", loading); 


    // AuthContext value
    const authDetails = {
        user, register, addUserNameAndPhoto, signInWithGoogle, signInWithGithub, login, logout, loading,
    }

    return (
        <AuthContext.Provider value={authDetails}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;