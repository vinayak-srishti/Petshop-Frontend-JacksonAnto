import React from 'react'
import"./Nav.css";
import logo from "../../Assets/navbar.jpg"

function Navbar() {
  return (
    <div>
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src={logo} alt="Logo" width="100" height="90" class="d-inline-block align-text-top"/>
<p>Homepage Page</p>
<p>About Us</p>
<p>Log Out</p>
    </a>
  </div>
</nav>
    </div>
  )
}

export default Navbar