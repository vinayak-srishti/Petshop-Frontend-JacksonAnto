import React from 'react'
import { NavLink} from "react-router-dom";
import petlogo from "../Assets/petlogo.png"
import "../Components/MainNavbar.css"

function MainNavbar()  {
  return (
    <div>
        <nav className="navbar navbar-expand-md NAVBAR container">

<div className="ms-4 khLogo">
  <img className="navbar-brand w-100 h-100" src={petlogo} alt="logo" />
</div>

<button
  className="navbar-toggler me-2"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarNavAltMarkup"
  aria-controls="navbarNavAltMarkup"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse mx-3 p-1" id="navbarNavAltMarkup">

  <div className="navbar-nav flex-fill d-flex justify-content-center">
    
    <NavLink className="nav-link" to="">
      Home
    </NavLink>
    <NavLink className="nav-link" to="">
      Books
    </NavLink>

    <NavLink className="nav-link" to="">
      Contact Us
    </NavLink>
    
  </div>
 
 <div className="buttons me-4 gap-3 d-flex">

  <button type="button" className="btn btn-outline-primary" onClick={()=>((''))}>Login</button>
  <button type="button" className="btn btn-outline-secondary" onClick={()=>((''))}>SignUp</button>
 </div>
</div>



</nav>
    </div>
  )
}

export default MainNavbar