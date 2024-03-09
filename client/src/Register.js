import React, { useState } from 'react';
import axios from 'axios';
import './Register.css'

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(event.currentTarget);
      const userData = {
        fn: formData.get('fn'),
        role: formData.get('role'),
        email: formData.get('email'),
        pw: formData.get('pw')
      };
      const response = await axios.post('http://localhost:8081/insert', userData);

      console.log(response.data);
      setLoading(false);
      setOpenSnackbar(true);
      setSnackbarMessage('Sign up successful!');
    } catch (error) {
      console.error('Error during sign up:', error);
      setLoading(false);
      setOpenSnackbar(true);
      setSnackbarMessage('Error signing up. Please try again later.');
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className="container">
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fn">Name:</label>
          <input type="text" id="fn" name="fn" required autoFocus />
        </div>
        <div>
          <label htmlFor="role">Role:</label>
          <select id="role" name="role" defaultValue={0}>
            <option value={0}>Select Role</option>
            <option value={1}>Admin</option>
            <option value={2}>Student</option>
            <option value={3}>Counselor</option>
            <option value={4}>Visitor</option>
          </select>
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="pw">Password:</label>
          <input type="password" id="pw" name="pw" autoComplete="new-password" required />
        </div>
        <div className="checkbox">
          <input type="checkbox" id="allowExtraEmails" name="allowExtraEmails" />
          <label htmlFor="allowExtraEmails">
            I want to receive inspiration, marketing promotions and updates via email.
          </label>
        </div>
        <button type="submit" disabled={loading}>{loading ? 'Signing Up...' : 'Sign Up'}</button>
      </form>
      {openSnackbar && (
        <div className="snackbar">
          <p>{snackbarMessage}</p>
          <button onClick={handleCloseSnackbar}>Close</button>
        </div>
      )}
    </div>
  );
}
