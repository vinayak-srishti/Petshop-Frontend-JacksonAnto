import React, { useState } from "react";
import "./PetShopAdminLogin.css";
import { RiUser3Fill, RiLock2Fill } from "react-icons/ri";
import profileadmin from "../../Assets/profile admin.jpg";
import { useNavigate } from "react-router-dom";

function PetShopAdminLogin() {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setAdmin({
      ...admin,
      [e.target.name]: e.target.value,
    });
  };

  const loginAdmin = (e) => {
    e.preventDefault();
    if (admin.username === "admin123" && admin.password === "password123") {
      console.log("Login successful!");
      alert("Login successful!")
      navigate("/admindash")
    } else {
      console.log("Invalid login");
    }
  };

  return (
    <div className="petshopAdminLogin-page">
      <div className="petshopAdminLogin-container">
        <form className="petshopAdminLogin-form" onSubmit={loginAdmin}>
          <h1 className="petshopAdminLogin-title">Pet Shop Admin Login</h1>
          <img
            src={profileadmin}
            alt="Admin Profile"
            className="petshopAdminLogin-profile-image"
          />

          <div className="petshopAdminLogin-input-group">
            <input
              type="text"
              placeholder="Username"
              className="petshopAdminLogin-input"
              name="username"
              value={admin.username}
              onChange={handleInputChange}
            />
            <RiUser3Fill className="petshopAdminLogin-icon" />
          </div>

          <div className="petshopAdminLogin-input-group">
            <input
              type="password"
              placeholder="Password"
              className="petshopAdminLogin-input"
              name="password"
              value={admin.password}
              onChange={handleInputChange}
            />
            <RiLock2Fill className="petshopAdminLogin-icon" />
          </div>

          <button type="submit" className="petshopAdminLogin-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default PetShopAdminLogin;
