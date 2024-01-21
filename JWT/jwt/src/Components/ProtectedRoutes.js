import React from 'react'
import {  Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext'
const ProtectedRoutes = () => {
    const {isLogin} = useAuth();
   
    return(
        isLogin ? <Outlet /> : <Navigate to='/login' />
    )
    
}

export default ProtectedRoutes