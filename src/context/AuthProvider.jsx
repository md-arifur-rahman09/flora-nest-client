import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext'
import { auth } from '../firebase/firebase.init'
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [dark, setDark] = useState(false);
    const [loading, setLoading] = useState(true);

    // dark light mode toogle
    const toogleTheme = () => setDark(!dark);

    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // login user
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // forget password
    const forgetPassword = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }
    // update profile
    const updateUser = (profile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }
    //  firebase logout 
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log(currentUser);
            setUser(currentUser);
            setLoading(false)
        });

        return () => {
            unsubscribe()
        }
    }, []);

    const userInfo = {
        user,
        createUser,
        loginUser,
        updateUser,
        forgetPassword,
        logOut,
        toogleTheme, dark, setDark,

        loading
    }
    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>

};

export default AuthProvider;