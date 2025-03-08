import React, { useState } from "react";
import "./Register.css";
// import { PiApproximateEqualsDuotone } from "react-icons/pi";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [Reg, setReg] = useState({
    firstname: "",
    lastname: "",
    email: "",
    city: "",
    dateofbirth: "",
    address: "",
    pincode: "",
    contact: "",
    gender: "",
    password: "",
    confirmpassword: "",
  });

  const myfunction = (r) => {
    setReg({
      ...Reg,
      [r.target.name]: r.target.value,
    });
    console.log(Reg);
  };

  const handleSubmit = () => {
    if (!Reg.firstname) {
      alert("first name required");
    } else if (!Reg.lastname) {
      alert("last name required");
    } else if (!Reg.email) {
      alert("email required");
    } else if (!Reg.contact) {
      alert("contact required");
    } else if (!Reg.city) {
      alert("city required");
    } else if (!Reg.pincode) {
      alert("pincode required");
    } else if (!Reg.gender) {
      alert("gender required");
    } else if (!Reg.dateofbirth) {
      alert("date of birth required");
    } else if (!Reg.address) {
      alert("address required");
    } else if (Reg.password !== Reg.confirmpassword) {
      alert("plaese check the password");
    } else {
      axios
        .post("http://localhost:4000/petshopuserregisteration", Reg)
        .then((response) => {
          if (response.data.status == 200) {
            alert("registeration sucessfull");
            navigate("/Userlogin");
          } else {
            alert("Registration failed");
          }
        });
    }
  };

  return (
    <div className="register">
      <div className="register-box">
        {" "}
        <div className="register-use">
          <h1>User Registeration Page</h1>
        </div>
        <form class="row g-4">
          <div class="col-6">
            <label for="inputfirst" class="form-label">
              First name
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="First name"
              aria-label="First name"
              value={Reg.firstname}
              onChange={myfunction}
            />
          </div>
          <div class="col-6">
            <label for="inputlast" class="form-label">
              Last Name
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Last name"
              aria-label="Last name"
              value={Reg.lastname}
              onChange={myfunction}
            />
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              placeholder="Enter your mail"
              value={Reg.email}
              onChange={myfunction}
            />
          </div>
          <div class="col-md-6">
            <label for="inputcontact" class="form-label">
              Contact
            </label>
            <input
              type="number"
              class="form-control"
              id="inputcontact"
              placeholder="Enter your number"
              value={Reg.city}
              onChange={myfunction}
            />
          </div>
          <div class="col-6">
            <label for="inputdate" class="form-label">
              Date of Birth
            </label>
            <input
              type="date"
              class="form-control"
              id="inputdate"
              value={Reg.dateofbirth}
              onChange={myfunction}
            />
          </div>
          <div class="col-6">
            <label for="inputAddress" class="form-label">
              Address{" "}
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              value={Reg.address}
              onChange={myfunction}
            />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              City
            </label>
            <input
              type="text"
              class="form-control"
              id="inputCity"
              value={Reg.city}
              onChange={myfunction}
            />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              State
            </label>
            <select
              id="inputState"
              class="form-select"
              value={Reg.state}
              onChange={myfunction}
            >
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col-md-2">
            <label
              for="inputZip"
              class="form-label"
              value={Reg.pincode}
              onChange={myfunction}
            >
              Pin Code
            </label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
          <div class="col-md-4">
            <label for="inputCity" class="form-label">
              Gender
            </label>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                onChange={myfunction}
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Male
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                onChange={myfunction}
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Female
              </label>
            </div>
          </div>

          <div class="col-md-4">
            <label for="inputPassword4" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="inputPassword4"
              value={Reg.password}
              onChange={myfunction}
            />
          </div>
          <div class="col-md-4">
            <label for="inputPassword4" class="form-label">
              {" "}
              conform Password
            </label>
            <input
              type="password"
              class="form-control"
              id="inputPassword4"
              value={Reg.confirmpassword}
              onChange={myfunction}
            />
          </div>
          <div className="register-button">
            <button type="submit" onClick={handleSubmit}>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Register;
