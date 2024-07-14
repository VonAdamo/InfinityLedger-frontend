import React from 'react';
import Register from '../components/Register.jsx';
import SignIn from '../components/Login';

export const Login = () => {
    return (
        <>
            <div>
                <h1>Register</h1>
                <Register />
                <h1>Login</h1>
                <SignIn />
            </div>
        </>
    )
}