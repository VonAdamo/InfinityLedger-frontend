import React from 'react';
import { Navigate } from 'react-router-dom';

export const RouteProtection = ({ children }) => {
    const token = localStorage.getItem("token");

    if (!token) { 
        console.error("You must be logged in to access this page.")
        return <Navigate to="/login" />;
    }

    return children;
}