import React, { createContext } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null); 
const AuthProvider = ({children}) => {

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const user = {displayName: 'salman'}

    // Functions for Signup
    const register = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password); 
    }
    const addUserNameAndPhoto = (name, photoURL) => {

        return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photoURL
          }); 
    }

    const registerWithGoogle = () => {
        return signInWithPopup(auth, googleProvider); 
    }

    const registerWithGithub = () => {
        return signInWithPopup(auth, githubProvider); 
    }

    // Functions for Login 

    const login = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password); 
    }


    // Function for logout 

    const logout = () => {
        return signOut(auth); 
    }




    // AuthContext value
    const authDetails = {
        user, register, addUserNameAndPhoto, registerWithGoogle, registerWithGithub, login, logout
    }

    return (
        <AuthContext.Provider value={authDetails}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;