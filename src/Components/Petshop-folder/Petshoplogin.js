import React, { useState } from 'react'
import "./Petshop.css"
import "../../Assets/two.jpg"
// import { FaLock } from "react-icons/fa";
// import { FaUser, } from "react-icons/fa";



function Petshoplogin() {
  const[login,setLogin]=useState({
    username:"",
    password:""
  })
  const myfunction=((s)=>{
    setLogin({
        ...login,[s.target.name]:s.target.value
    })
    console.log(login)
  })
    return (
        <div className='total'>
        <div class="wrapper">
        <form action="">
          <h1>PETSHOP LOGIN</h1>
          <div class="input-box">
            <input type="text" placeholder="Username" required/>
            {/* <FaUser className='icon' /> */}
          </div>
          <div class="input-box">
            <input type="password" placeholder="Password" required/>
            {/* <FaLock className='icon' /> */}
          </div>
          <div class="remember-forgot">
            <label><input type="checkbox"/>Remember Me</label>
            <a href="#">Forgot Password</a>
          </div>
          <button type="submit" class="btn">Login</button>
          <div class="register-link">
            <p>Dont have an account? <a href="#">Register</a></p>
          </div>
        </form>
      </div>
</div>
    )
}



export default Petshoplogin