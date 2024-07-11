import React from 'react';
import { Outlet } from 'react-router-dom';
import Register from '../components/Register';

export const Login = () => {
    return (
        <>
            <div>
                <h1>Register</h1>
                <Register />
            </div>
        </>
    )
}
export default Login;