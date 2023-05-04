import React, { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {

    const user = {displayName: 'Khan'}

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleAuthProvider);
    }

    const signInWithGithub = () => {
        return signInWithPopup(auth, githubAuthProvider)
    }

    const logOut = () => {
        return signOut(auth);
    }
    
    const authInfo = { 
        user,
        createUser,
        signIn,
        signInWithGoogle,
        signInWithGithub,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;