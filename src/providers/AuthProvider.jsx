import React, { createContext } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null); 
const AuthProvider = ({children}) => {

    const auth = getAuth(app);
    const user = {displayName: 'salman'}
    const register = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password); 
    }
    const authDetails = {
        user, register
    }
    return (
        <AuthContext.Provider value={authDetails}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;