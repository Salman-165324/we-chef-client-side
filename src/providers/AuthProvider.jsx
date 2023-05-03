import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext(null); 
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    // Functions for Signup
    const register = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password); 
    }
    const addUserNameAndPhoto = (name, photoURL) => {

        return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photoURL
          }); 
    }

    // Functions for Login 

    const login = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password); 
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider); 
    }

    const signInWithGithub = () => {
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

        })

        return () => {

            unsubscribe(); 
        }

    }, [])




    // AuthContext value
    const authDetails = {
        user, register, addUserNameAndPhoto, signInWithGoogle, signInWithGithub, login, logout
    }

    return (
        <AuthContext.Provider value={authDetails}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;