import {useState} from 'react';
import {login} from '../services/AuthClient';

const SignIn = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const { email, password } = user;

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login(email, password, "user");
            console.log("User logged in:", response);
        } catch (error) {
            console.error("Login failed:", error);
        }
        setUser({ email: "", password: "" });
    }

    return (
        <div>
            <h1>To Infinity, and beyond!</h1>
            <h3>... but first, log in.
                Not signed up yet? Register here </h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handleChange} required />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};
export default SignIn;