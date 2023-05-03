import React, { createContext } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null); 
const AuthProvider = ({children}) => {

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const user = {displayName: 'salman'}
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
    const authDetails = {
        user, register, addUserNameAndPhoto, registerWithGoogle 
    }
    return (
        <AuthContext.Provider value={authDetails}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;