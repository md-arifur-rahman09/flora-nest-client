import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRouter = ({ children }) => {
    const location=useLocation();


    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <span className="loading loading-ring loading-xl"></span>
    }
    if (user) {
        return children
    }
    return <Navigate state={location?.pathname}  to='/login' ></Navigate>

};

export default PrivateRouter;