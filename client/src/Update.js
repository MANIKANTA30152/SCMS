import axios from 'axios';
import { useState } from 'react';
import './Update.css'; // Import your CSS file for styling

function Update() {
    const [res, setRes] = useState(null);

    const handleUpdate = async (event) => { 
        event.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:8081/update', {
                un: event.target.un.value,
                pw: event.target.pw.value,
                new_pw: event.target.new_pw.value // Include the new password field
            });

            console.log(response.data);
            setRes(response.data);
        } catch (error) {
            console.error('Error during update:', error);
            // Handle error appropriately, such as showing an error message to the user
            setRes('An error occurred during update.');
        }
    };

    return (
        <div className="update-container">
            <div className="update-content">
                <h1>Update</h1>
                <form onSubmit={handleUpdate}>
                    <label htmlFor="un">Username:</label>
                    <input type="text" name="un" id="un" required />

                    <label htmlFor="pw">Existing Password:</label>
                    <input type="password" name="pw" id="pw" required />

                    <label htmlFor="new_pw">New Password:</label>
                    <input type="password" name="new_pw" id="new_pw" required />

                    <button type="submit">Update</button>
                </form>
                <p className="update-response">{res}</p>
            </div>
        </div>
    );
}

export default Update;
