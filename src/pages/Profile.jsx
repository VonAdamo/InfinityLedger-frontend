import React, {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMe, logout } from '../services/AuthClient';

export const Profile = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await getMe();
                setUser(userData);

            } catch (error) {
                console.error("Error getting user:", error);
                navigate("/login");
            }
        };
        fetchUser();
    }, [navigate]);

    const handleLogout = async () => {
        logout();
        navigate("/login");
    };

    if (!user) return <div>Loading...</div>

    return (
        <div className='profile-wrapper'>
            <h1>Profile</h1>
            <div className='info-wrapper'>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Role: {user.role}</p>
                <p>Created: {new Date(user.createdAt).toLocaleString()}</p>
            </div>
            
            <div className='logout-wrapper'>
                <p>Ready to leave?</p>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}