import httpClient from "./httpClient";

export const register = async ( name, email, password ) => {
    const user = { name, email, password };

    try {
        const response = await httpClient.post("/auth/register", user);
        const { token } = response.data;
        localStorage.setItem('token', token); // Store the token in local storage
        return response.data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
};

export const login = async ( email, password ) => {
    const user = { email, password };

    try {
        const response = await httpClient.post("/auth/login", user);
        return response.data;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
}

export const getMe = async () => {
    try {
        const response = await httpClient.get("/auth/me");
        return response.data.data;
    } catch (error) {
        console.error("Error getting user:", error.response ? error.response.data : error.message); 
        throw error;
    }
}

export const logout = () => {
    localStorage.removeItem("token");
};