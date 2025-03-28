import React from 'react';
import './Nav.css';
import petlogo from "../../Assets/petlogo.png"; // Example logo (optional)
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate=useNavigate()

  const handleLogout =()=>{
    localStorage.removeItem("userid")
    const isConfirmed = window.confirm(
      "Are you Sure You Want To Logout This Account"
    );
    if (isConfirmed){
      navigate("/")
    }
    
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light nav-bar">
      <div className="container-fluid">
        {/* Navbar Logo and Brand */}
        <a className="navbar-brand" href="\petshophomepage">
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
            <a className="nav-link active" aria-current="page" href="petshophomepage">Home</a>
            <a className="nav-link" href="#">Features</a>
            <a className="nav-link" href="#">Pricing</a>
            <a className="nav-link" href="customer">View Orders</a>
            <a className="nav-link" href="#">Contact</a>
            <a className="nav-link profile-nav" href="profileview">Profile</a>
          </div>
          
          {/* Profile Icon and Sign Up Button */}
          <div className="navbar-actions d-flex align-items-center">
            {/* <a href="#" className="icon-profile mx-2">
              <i className="ri-shield-user-line"></i> 
            </a> */}
          <div className='signin'>
          <button type="button"  className="btn btn-dark" onClick={()=>{
            navigate("/addcart")
          }} ><i class="ri-shopping-cart-line"></i></button>
          </div>
          <div className='signup'>
            
          <button type="butt`on"  className="btn btn-dark" onClick={handleLogout}><i class="ri-logout-box-r-line"></i> </button>
          
          </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
