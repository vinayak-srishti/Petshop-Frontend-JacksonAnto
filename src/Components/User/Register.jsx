import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [Reg, setReg] = useState({
    firstname: "",
    lastname: "",
    email: "",
    city: "",
    state: "", // Added state field
    dateofbirth: "",
    address: "",
    pincode: "",
    contact: "",
    gender: "",
    password: "",
    confirmpassword: "",
  });

  const myfunction = (e) => {
    const { name, value } = e.target;
    setReg((prevReg) => ({
      ...prevReg,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Reg.firstname) {
      alert("First name required");
    } else if (!Reg.lastname) {
      alert("Last name required");
    } else if (!Reg.email) {
      alert("Email required");
    } else if (!Reg.contact) {
      alert("Contact required");
    } else if (!Reg.city) {
      alert("City required");
    } else if (!Reg.state) {
      alert("State required"); // Added validation for state
    } else if (!Reg.pincode) {
      alert("Pincode required");
    } else if (!Reg.gender) {
      alert("Gender required");
    } else if (!Reg.dateofbirth) {
      alert("Date of birth required");
    } else if (!Reg.address) {
      alert("Address required");
    } else if (Reg.password !== Reg.confirmpassword) {
      alert("Passwords do not match");
    } else {
      axios
        .post("http://localhost:4000/petshopuserregisteration", Reg)
        .then((response) => {
          if (response.data.status === 200) {
            alert("Registration successful");
            navigate("/Userlogin");
          } else {
            alert("Registration failed");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("An error occurred while registering");
        });
    }
  };

  return (
    <div className="register">
      <div className="register-box">
        <div className="register-use">
          <h1>User Registration Page</h1>
        </div>
        <form className="row g-4" onSubmit={handleSubmit}>
          <div className="col-6">
            <label className="form-label">First name</label>
            <input
              name="firstname"
              type="text"
              className="form-control"
              placeholder="First name"
              value={Reg.firstname}
              onChange={myfunction}
            />
          </div>
          <div className="col-6">
            <label className="form-label">Last Name</label>
            <input
              name="lastname"
              type="text"
              className="form-control"
              placeholder="Last name"
              value={Reg.lastname}
              onChange={myfunction}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="Enter your mail"
              value={Reg.email}
              onChange={myfunction}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Contact</label>
            <input
              name="contact"
              type="text"
              className="form-control"
              placeholder="Enter your number"
              value={Reg.contact}
              onChange={myfunction}
            />
          </div>
          <div className="col-6">
            <label className="form-label">Date of Birth</label>
            <input
              name="dateofbirth"
              type="date"
              className="form-control"
              value={Reg.dateofbirth}
              onChange={myfunction}
            />
          </div>
          <div className="col-6">
            <label className="form-label">Address</label>
            <input
              name="address"
              type="text"
              className="form-control"
              placeholder="1234 Main St"
              value={Reg.address}
              onChange={myfunction}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">City</label>
            <input
              name="city"
              type="text"
              className="form-control"
              value={Reg.city}
              onChange={myfunction}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">State</label>
            <input
              name="state"
              type="text"
              className="form-control"
              value={Reg.state}
              onChange={myfunction}
            />
          </div>
          <div className="col-md-2">
            <label className="form-label">Pin Code</label>
            <input
              name="pincode"
              type="text"
              className="form-control"
              value={Reg.pincode}
              onChange={myfunction}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Gender</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="Male"
                checked={Reg.gender === "Male"}
                onChange={myfunction}
              />
              <label className="form-check-label">Male</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="Female"
                checked={Reg.gender === "Female"}
                onChange={myfunction}
              />
              <label className="form-check-label">Female</label>
            </div>
          </div>
          <div className="col-md-4">
            <label className="form-label">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              value={Reg.password}
              onChange={myfunction}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Confirm Password</label>
            <input
              name="confirmpassword"
              type="password"
              className="form-control"
              value={Reg.confirmpassword}
              onChange={myfunction}
            />
          </div>
          <div className="register-button">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;