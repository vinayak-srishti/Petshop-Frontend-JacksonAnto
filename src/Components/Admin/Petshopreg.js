import React from 'react';
import './Petreg.css';
import '../../Assets/regs.jpg';

function Petshopreg() {
  return (
    <div className="parent">
      <div className="total24">
        <h1>PETSHOP REGISTRATION</h1>
        <form className="row g-4 input-padding">
          <div className="col-md-6">
            <label htmlFor="inputFirstName" className="form-label">First Name*</label>
            <input type="text" className="form-control" placeholder="First name" required />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputLastName" className="form-label">Last Name*</label>
            <input type="text" className="form-control" placeholder="Last name" required />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail" className="form-label">Ema il*</label>
            <input type="email" className="form-control" placeholder="Email" required />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPhone" className="form-label">Phone Number</label>
            <input type="tel" className="form-control" placeholder="Phone number" />
          </div>
          <div className="col-6">
            <label htmlFor="inputAddress" className="form-label">Address</label>
            <input type="text" className="form-control" placeholder="Address" />
          </div>
          <div className="col-6">
            <label htmlFor="inputShopcode" className="form-label">Shopcode</label>
            <input type="text" className="form-control" placeholder="Shopcode" />
          </div>
          <div className="col-6">
            <label htmlFor="inputPassword" className="form-label">Password*</label>
            <input type="password" className="form-control" placeholder="Password" required />
          </div>
          <div className="col-6">
            <label htmlFor="inputConfirmPassword" className="form-label">Confirm Password*</label>
            <input type="password" className="form-control" placeholder="Confirm Password" required />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">City</label>
            <input type="text" className="form-control" placeholder="City" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label">State</label>
            <select id="inputState" className="form-select">
              <option value="">Choose...</option>
             <option value="">Tamil nadu</option>
             <option value="">Kerala</option>
             <option value="">Karnataka</option>
             <option value="">Bombay</option> 
              <option value="">Delhi</option>
            </select>   
          </div>
          <div className="col-12">
            <div className="sign-button">
              <button type="submit" className="btn btn-primary">Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Petshopreg;
