import React from 'react';
import './Nav2.css';

function Userloginnavbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Pet Shop</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse mx-auto" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">View Orders</a>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            {/* Profile Link */}
            <a href="#search" className="nav-link text-dark">Profile</a>

            {/* Log Out Button */}
            <button type="button" className="btn btn-dark ms-3">Log Out</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Userloginnavbar;
