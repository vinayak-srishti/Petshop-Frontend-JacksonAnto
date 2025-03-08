import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import petlogo from "../Assets/petlogo.png";
import "../Components/MainNavbar.css";
import admin from "../Assets/admin.png";
import user from "../Assets/user.png";

function MainNavbar() {
  const navigate=useNavigate()
  return (
    <div>
      <nav className="navbar navbar-expand-md NAVBAR container">
        <div className="ms-4 khLogo">
          <img className="navbar-brand w-100 h-100" src={petlogo} alt="logo" />
        </div>

        <button
          className="navbar-toggler me-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse mx-3 p-1"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav flex-fill d-flex justify-content-center">
            <NavLink className="nav-link" to="">
              Home
            </NavLink>
            {/* <NavLink className="nav-link" to="">
      Books
    </NavLink> */}

            <NavLink className="nav-link" to="">
              Contact Us
            </NavLink>
          </div>

          <div className="buttons me-4 gap-3 d-flex">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Login
            </button>

            <div
              class="modal fade "
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="container text-center">
                    <div class="row">
                      <div class="col navlogin" >
                        <img src={user} />
                        <button type="button" class="btn btn-primary" onClick={()=>{
                          navigate("Userlogin")
                        }}>
                          User Login
                        </button>
                      </div>
                      <div class="col navlogin">
                        <img src={admin} />
                        <button type="button" class="btn btn-primary" onClick={()=>{
                          navigate("adminlogin")
                        }}>
                          Admin Login
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <button type="button" class="btn btn-primary" onClick={()=>{
              navigate("Registerationpage")
            }}>
              Register
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MainNavbar;
