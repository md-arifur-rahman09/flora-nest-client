import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router';

const PrivateRouter = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <span className="loading loading-ring loading-xl"></span>
    }
    if (user) {
        return children
    }
    return <Navigate  to='/login' ></Navigate>

};

export default PrivateRouter;