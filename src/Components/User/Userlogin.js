import React, { useState } from "react";
import "./Edit.css";
import { RiUser3Fill, RiLock2Fill } from "react-icons/ri";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Userlogin() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const mylogin = (q) => {
    setLogin({
      ...login,
      [q.target.name]: q.target.value,
    });
    console.log(login);
  };


  const changelogin = (e) => {
    e.preventDefault();
    if ((login.email, login.password)) {
      axios
        .post("http://localhost:4000/login", login)

        .then((response) => {
          console.log(response);
          if (response.data.status == 200) {
            localStorage.setItem("userid",response.data.data._id)
            console.log(response.data.data._id+"Userid");

            alert("login sucessfuly");
            // navigate('/')
          } else {
            alert(response.data.msg);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("please check your password");
    }
  };

  return (
    <div className="main-user">
      <div className="login-container">
        <form className="login-form">
          <h1>Login</h1>

          {/* Username Input */}
          <div className="input-group">
            <input
              type="text"
              placeholder="email"
              className="input-field"
              required
              name="email"
              value={login.email}
              onChange={mylogin}
            />
            <RiUser3Fill className="input-icon" />
          </div>

          {/* Password Input */}
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              className="input-field"
              name="password"
              value={login.password}
              onChange={mylogin}
              required
            />
            <RiLock2Fill className="input-icon" />
          </div>

          <div className="options-group">
            <label className="remember-me">
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#" className="forget-password">
              Forget Password?
            </a>
          </div>

          <div>
            <button type="submit" className="login-btn" onClick={changelogin}>
              Login
            </button>
          </div>

          {/* ////login */}
          <div className="register-link">
            <p>
              Don't have an account? <a href="/">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Userlogin;
