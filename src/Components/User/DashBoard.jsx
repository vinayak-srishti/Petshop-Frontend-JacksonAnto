import React from "react";
import './Dash.css';

function Dashboard() {
  const handleLogout = () => {
    console.log("Logged out");
    
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Pet Shop</h2>
        <ul className="top-menu">
          <li><a href="/">Dashboard</a></li>
          <li><a href="/petshopregisterrequest">PetshopRegister</a></li>
          <li><a href="/inventory">Inventory</a></li>
          <li><a href="/orders">Orders</a></li>
          <li><a href="/customers">Customers</a></li>
        </ul>
      
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="content">
        <h1>Welcome to the Dashboard</h1>
        <p></p>
      </div>
    </div>
  );
}

export default Dashboard;
