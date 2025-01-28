import React, { useEffect, useState } from 'react';
import './Petreg.css';
import '../../Assets/regs.jpg';
import axios from 'axios';

function Petshopreg() {
  const [Dio, setDio] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    state: "",
    address: "",
    shopcode: "",
    password: "",
    confirmpassword: "",
    city: ""

  })
  const mydatas = ((m) => {
    setDio({
      ...Dio, [m.target.name]: m.target.value
    })
    console.log(Dio);

  })
  const mypetboy = () => {
    if (!Dio.firstname) {
      alert("Enter your first name")
    } else if (!Dio.lastname) {
      alert("Enter your lastname")
    } else if (!Dio.email) {
      alert("Enter your email")
    } else if (!Dio.contact) {
      alert("Enter your contact")
    } else if (!Dio.state) {
      alert("Enter your state")
    } else if (!Dio.address) {
      alert("Enter your address")
    } else if (!Dio.shopcode) {
      alert("Enter your shopcode")
    } else if (!Dio.city) {
      alert("Enter your city")
    } else if (Dio.password!== Dio.confirmpassword) {
      alert(" please check the password")
    } else {
      axios.post('http://localhost:2024/petregister', Dio)
        .then((response) => {
          if (response.data.status == 200) {
            alert("registeration successfully")
          } else {
            alert("registeration failed")
          }
        })
    }

  }

  return (
    <div className="parent">
      <div className="total24">
        <h1>PETSHOP REGISTRATION</h1>
        <form className="row g-4 input-padding">
          <div className="col-md-6">
            <label htmlFor="inputFirstName" className="form-label">First Name*</label>
            <input type="text" className="form-control" placeholder="Enter your name" name='firstname' value={Dio.firstname} onChange={mydatas} />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputLastName" className="form-label">Last Name*</label>
            <input type="text" className="form-control" placeholder="Enter your lastname" name='lastname' value={Dio.lastname} onChange={mydatas} />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail" className="form-label">Email*</label>
            <input type="email" className="form-control" placeholder="Enter your email" name='email' value={Dio.email} onChange={mydatas} />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPhone" className="form-label">contact</label>
            <input type="tel" className="form-control" placeholder=" contact" name='contact' value={Dio.contact} onChange={mydatas} />
          </div>
          <div className="col-6">
            <label htmlFor="inputAddress" className="form-label">Address</label>
            <input type="text" className="form-control" placeholder="Address" name='address' value={Dio.address} onChange={mydatas} />
          </div>
          <div className="col-6">
            <label htmlFor="inputShopcode" className="form-label">Shopcode</label>
            <input type="text" className="form-control" placeholder="Shopcode" name='shopcode' value={Dio.shopcode} onChange={mydatas} />
          </div>
          <div className="col-6">
            <label htmlFor="inputPassword" className="form-label">Password*</label>
            <input type="password" className="form-control" placeholder="Password" name='password' value={Dio.password} onChange={mydatas} />
          </div>
          <div className="col-6">
            <label htmlFor="inputConfirmPassword" className="form-label">Confirm Password*</label>
            -<input type="password" className="form-control" placeholder="Confirm Password" name='confirmpassword' value={Dio.confirmpassword} onChange={mydatas} />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">City</label>
            <input type="text" className="form-control" placeholder="City" name='city' value={Dio.city} onChange={mydatas} />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label">State</label>
            <select id="inputState" className="form-select" name='state' value={Dio.state} onChange={mydatas}>
              <option value="">Choose...</option>
              <option value="tamil nadu">Tamil nadu</option>
              <option value="kerala">Kerala</option>
              <option value="karanataka">Karnataka</option>
              <option value="bombay">Bombay</option>
              <option value="delhi">Delhi</option>
            </select>
          </div>
          <div className="col-12">
            <div className="sign-button">
              <button type="submit" onClick={mypetboy} className="btn btn-primary">Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Petshopreg;
