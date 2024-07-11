import httpClient from "./httpClient";

export const register = async ( name, email, password, role ) => {
    const user = {
        name: name,
        email: email,
        password: password,
        role: role
    };

    try {
        const response = await httpClient.post("/auth/register", user);
        const { token } = response.data;
        localStorage.setItem("token", token);
        return response.data;

    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
};


/* http://localhost:5001/api/v1/auth/register */