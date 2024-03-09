import React, { useState } from 'react';
import axios from 'axios';
import './Delete.css'; // Import your CSS file for styling

function Delete() {
    const [res, setRes] = useState(null);

    const handleDelete = async (event) => {
        event.preventDefault();
        const usernameToDelete = event.target.un.value; // Get the username from the input field
        
        try {
            const response = await axios.post('http://localhost:8081/delete', {
                un: usernameToDelete
            });
            console.log(response.data);
            setRes({ message: response.data, success: true });
        } catch (error) {
            console.error('Error during deletion:', error);
            setRes({ message: 'An error occurred during deletion. Please try again later.', success: false });
        }
    };

    return (
        <div className="delete-container">
            <div className="delete-content">
                <h1>Delete</h1>
                <form onSubmit={handleDelete}>
                    <label htmlFor="un">Username:</label>
                    <input type="text" name="un" id="un" required />

                    <button type="submit">Delete Account</button>
                </form>
                <p className={res && res.success ? "delete-response success" : "delete-response error"}>
                    {res && res.message}
                </p>
            </div>
        </div>
    );
}

export default Delete;
