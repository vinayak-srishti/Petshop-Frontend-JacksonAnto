
import React, { useState } from 'react';
import { FaEnvelope } from "react-icons/fa";
import './forgetpass.css';
import logo from "../../Assets/forget.jpg"; // Optional, you can add your logo here

function Forget() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError(""); // Clear error if validation passes
    // Perform password update logic here...
  };

  return (
    <div className="back-ground-forget">
      <div className="forget-all">
        <form onSubmit={handleSubmit}>
          <h1>Forget Password</h1>

          {error && <div className="error-message">{error}</div>} {/* Error message */}

          {/* Email Input */}
          <label className="forget-label" htmlFor="email">
            Email <FaEnvelope className="forget-icon" />
          </label>
          <input
            type="email"
            id="email"
            className="forget-password-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />

          {/* Password Input */}
          <label className="forget-label" htmlFor="password">
            New Password
          </label>
          <input
            type="password"
            id="password"
            className="forget-password-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your new password"
            required
          />

          {/* Confirm Password Input */}
          <label className="forget-label" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="forget-password-input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your new password"
            required
          />

          {/* Submit Button */}
          <button type="submit" className="forget-btn">
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default Forget;
