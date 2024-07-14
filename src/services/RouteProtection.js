import React from 'react';
import { Navigate } from 'react-router-dom';

export const RouteProtection = ({ children }) => {
    const token = localStorage.getItem("token");

    if (!token) {
        console.log("No token found, redirecting to login"); 
    }

    return children;
};