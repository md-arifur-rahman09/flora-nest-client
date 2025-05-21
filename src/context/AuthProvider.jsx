import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext'
import {auth} from '../firebase/firebase.init'
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

const AuthProvider = ({ children }) => {
    const [user,setUser]= useState(null)
// create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user
    const loginUser= (email,password)=> {
        return signInWithEmailAndPassword(auth,email, password)
    }
    // forget password
    const forgetPassword= (email)=> {
        return sendPasswordResetEmail(auth, email)
    }
// update profile
const updateUser= (profile)=> {
    return updateProfile(auth.currentUser,profile)
}

    useEffect(()=> {
        const unsubscribe= onAuthStateChanged(auth,(currentUser)=> {
            // console.log(currentUser);
            setUser(currentUser)
        });
       
        return ()=> {
            unsubscribe()
        }
    },[])
    const userInfo = {
        user,
        createUser,
        loginUser,
        updateUser,
        forgetPassword
    }
    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>

};

export default AuthProvider;