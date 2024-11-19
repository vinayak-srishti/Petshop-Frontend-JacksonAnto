import React from 'react';
import './PetShopAdminLogin.css';  // Ensure the CSS reflects the new class names
import { RiUser3Fill, RiLock2Fill } from 'react-icons/ri';  // Import icons from react-icons

function PetShopAdminLogin() {
 

  return (
    <div className="petshopAdminLogin-page">
      <div className="petshopAdminLogin-form-container">
        <form className="petshopAdminLogin-form">
          <h1>Pet Shop Admin Login</h1>

          {/* Admin Username Input */}
          <div className="petshopAdminLogin-input-group">
            <input 
              type="text" 
              placeholder="Username" 
              className="petshopAdminLogin-input-field" 
              required 
            />
            <RiUser3Fill className="petshopAdminLogin-input-icon" />
          </div>

          {/* Admin Password Input */}
          <div className="petshopAdminLogin-input-group">
            <input 
              type="password" 
              placeholder="Password" 
              className="petshopAdminLogin-input-field" 
              required 
            />
            <RiLock2Fill className="petshopAdminLogin-input-icon" />
          </div>

          {/* Login Button */}
          <div>
            <button type="submit" className="petshopAdminLogin-button">Login</button>
          </div>
        
        </form>
      </div>
    </div>
  );
}

export default PetShopAdminLogin;
