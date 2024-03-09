import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // Import your CSS file for styling

function Login() {
    const [res, setRes] = useState(null);

    const handleLogin = async (event) => {
        event.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:8081/check', {
                un: event.target.un.value,
                pw: event.target.pw.value
            });

            console.log(response.data);
            setRes(response.data);
        } catch (error) {
            console.error('Error during login:', error);
            // Handle error appropriately, such as showing an error message to the user
            setRes('An error occurred during login.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-content">
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <label htmlFor="un">Username:</label>
                    <input type="text" name="un" id="un" required />

                    <label htmlFor="pw">Password:</label>
                    <input type="password" name="pw" id="pw" required />

                    <button type="submit">Login</button>
                </form>
                <p className="login-response">{res}</p>
            </div>
        </div>
    );
}

export default Login;
