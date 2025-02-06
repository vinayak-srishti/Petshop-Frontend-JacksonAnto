import React from 'react'
import petlogo from "../../Assets/petlogo.png";
import { Link } from 'react-router-dom';

function PetShopNavBar() {
  return (
    <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light nav-bar">
      <div className="container-fluid">
        {/* Navbar Logo and Brand */}
        <a className="navbar-brand" href="#">
          <img src={petlogo} alt="Pet Shop Logo" className="navbar-logo" />
          Pet Shop
        </a>

        {/* Navbar Toggler for Mobile */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNavAltMarkup" 
          aria-controls="navbarNavAltMarkup" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            <a className="nav-link profile-nav" href="#">Profile</a>
            <a className="nav-link profile-nav" href="#">Add Pets</a>
          </div>
          
          {/* Profile Icon and Sign Up Button */}
          <div className="navbar-actions d-flex align-items-center">
            <a href="#" className="icon-profile mx-2">
              <i className="ri-shield-user-line"></i> 
            </a>
           
          <div className='signin'>
          <button type="button"  className="btn btn-dark">Log Out</button>
          </div>
        
          </div>
        </div>
      </div>
    </nav>


    </div>
  )
}

export default PetShopNavBar