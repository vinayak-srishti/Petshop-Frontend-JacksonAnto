import React from 'react';
import './Order.css'; // Import the CSS file

function Order() {
  return (
   <div className='order'>
     <div className="order-container">
      <div className="order-row order-g-3">
        <div className="order-col">
          <input type="text" className="order-form-control" placeholder="First name" aria-label="First name" />
        </div>
        <div className="order-col">
          <input type="text" className="order-form-control" placeholder="Last name" aria-label="Last name" />
        </div>
      </div>

      <div className="order-col-md-6">
        <label htmlFor="order-inputEmail" className="order-form-label">Email</label>
        <input type="email" className="order-form-control" id="order-inputEmail" />
      </div>

      <div className="order-col-md-6">
        <label htmlFor="order-inputMobile" className="order-form-label">Mobile Number</label>
        <input type="number" className="order-form-control" id="order-inputMobile" />
      </div>

      <div className="order-col-12">
        <label htmlFor="order-inputAddress" className="order-form-label">Address</label>
        <input type="text" className="order-form-control" id="order-inputAddress" placeholder="" />
      </div>

      <div className="order-col-md-6">
        <label htmlFor="order-inputCity" className="order-form-label">City</label>
        <input type="text" className="order-form-control" id="order-inputCity" />
      </div>

      <div className="order-col-md-4">
        <label htmlFor="order-inputState" className="order-form-label">State</label>
        <select id="order-inputState" className="order-form-select">
          <option selected>Choose...</option>
          <option>...</option>
        </select>
      </div>

      <div className="order-col-md-2">
        <label htmlFor="order-inputZip" className="order-form-label">Zip</label>
        <input type="text" className="order-form-control" id="order-inputZip" />
      </div>

      <div>
        <button type="button" className="order-btn order-btn-success">Continue Payment</button>
      </div>
    </div>
   </div>
  );
}

export default Order;
