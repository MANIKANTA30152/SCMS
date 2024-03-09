// Navigation.js
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom'; // If you're using React Router for navigation
import Home from './Home';
import Registration from './Register';
import Show from './Show';
import Login from './Login';
import Update from './Update';
import Delete from './Delete';
import'./NavBar.css'

function Navigation() {
    return (
        <nav>
            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Reg">Registration</Link>
                </li>
                <li>
                    <Link to="/sho">Show</Link>
                </li>
                <li>
                    <Link to="/B">Back</Link>
                </li>
                <li>
                    <Link to="/Log">Login</Link>
                </li>
                <li>
                    <Link to="/upd">Update</Link>
                </li>
                <li>
                    <Link to="/del">Delete</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Reg" element={<Registration />} />
                <Route path="/sho" element={<Show />} />
                <Route path="/B" element={<Home />} />
                <Route path="/Log" element={<Login />} />
                <Route path="/upd" element={<Update />} />
                <Route path="/del" element={<Delete />} />
            </Routes>
        </nav>
    );
}

export default Navigation;
