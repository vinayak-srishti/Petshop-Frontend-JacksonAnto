import React, { Component, useState } from "react";
import "./Dash.css";
import { Button } from "bootstrap/dist/js/bootstrap.bundle.min";
import { useNavigate } from "react-router-dom";

function Dashboard() {  
const navigate=useNavigate()


  const handleLogout = () => {
   localStorage.removeItem("admin")
   const isConfirmed = window.confirm(
    "Are you Sure You Want To Logout This Account"
  );
  if (isConfirmed){
    navigate("/")
  }
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Pet Shop</h2>
        <ul className="top-menu">
          <li>
            <a href="petshopreq">PetshopRegister</a>
          </li>
          <li>
            <a href="/viewallproduct">Inventory</a>
          </li>
          <li>
            <a href="addpet">Add Items</a>
          </li>
          <li>
            <a href="/orders">Orders</a>
          </li>
          <li>
            <a href="/viewalluser">Customers</a>
          </li>
        </ul>

        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* <div className="content">
        <h1>Welcome to the Dashboard</h1>
     
      </div> */}
    </div>
  );
}

export default Dashboard;
