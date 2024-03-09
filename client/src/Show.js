import { useState, useEffect } from "react";
import axios from 'axios';
import "./Show.css"; // Correct the file name and import your CSS file

function Show() {
    const [res, setRes] = useState(null);

    useEffect(() => {
        if (res === null) {
            axios.get('http://localhost:8081/showall')
            .then(resp => {
                console.log(resp.data);
                setRes(resp.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        }
    }, [res]);

    return (
        <div className="table-container">
            {res !== null && res.length > 0 ? ( // Check if res is not null
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {res.map(item => (
                            <tr key={item.id}> {/* Ensure each item has a unique key */}
                                <td>{item.fn}</td>
                                <td>{item.email}</td>
                                <td>{item.pw}</td>
                                <td>{item.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
}

export default Show;
