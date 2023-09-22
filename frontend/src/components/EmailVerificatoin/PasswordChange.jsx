import React, { useState } from 'react';
import api from "../../api/config.js"

const PasswordChange = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/newPassword", {
        password: newPassword, // Use newPassword here
        confirm_password: confirmPassword, // Use confirmPassword here
      });

      console.log(response.data);

      if (response.data.success === true) {
        alert("Your Password has been changed");
      } else {
        alert("Password change failed");
      }
    } catch (error) {
      alert("Server error occurred");
      console.log("Error password change: ", error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4">
        <h2 className="text-center mb-4">Password Change</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              New Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password" // Change the id to "password"
              name='password'
              value={newPassword} // Use newPassword here
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirm_password" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirm_password"
              name='confirm_password'
              value={confirmPassword} // Use confirmPassword here
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordChange;
