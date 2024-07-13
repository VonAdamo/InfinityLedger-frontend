import axios from 'axios';

const BASE_URL = 'http://localhost:5001/api/v1';

export const register = async (name, email, password, role) => {
    const user = { name, email, password, role };

    try {
        const response = await axios.post(`${BASE_URL}/auth/register`, user);
        const { token } = response.data;
        localStorage.setItem('token', token); // Store the token in local storage
        return response.data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
};