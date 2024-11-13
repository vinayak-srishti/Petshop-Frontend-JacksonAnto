import React from 'react';
import './Useredit.css';

function Edituser() {
  return (
    <div className="edit-container">
      <div className="edit-view">
        <h1>
          <span className="ri-user-line edit-icon" /> Edit User
        </h1>
        <form className="edit-form">
          <div className="edit-item">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="edit-item">
            <label htmlFor="age">Age</label>
            <input type="number" id="age" name="age" />
          </div>
          <div className="edit-item">
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" />
          </div>
          <div className="edit-item">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" />
          </div>
          <div className="edit-item">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="edit-item">
            <label htmlFor="phone">Phone No</label>
            <input type="tel" id="phone" name="phone" />
          </div>

          <button type="submit" className="edit-button">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default Edituser;
