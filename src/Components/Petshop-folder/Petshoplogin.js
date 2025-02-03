import React, { useState } from 'react'
import "./Petshop.css"
import "../../Assets/two.jpg"
import axios from 'axios'



function Petshoplogin() {
  const[logins,setLogins]=useState({
    email:"",
    password:""
  })
  const myfunction=((s)=>{
    setLogins({
        ...logins,[s.target.name]:s.target.value
    })
    console.log(logins)
  })

  const petlogin=((e)=>{
    e.preventDefault()
    if(logins.email,logins.password){
      axios.post('http://localhost:3000/petshoplogin',logins)
      .then((response)=>{
        console.log(response);

        if(response.data.status==200){
          alert("login sucessfully")
          
        }
        else if(response.data.status==404){
          alert("please take the approval from the admin")
        }
        else if(response.data.status==500){
          alert("Admin Reject Your Request")
        }
        else{
          alert(response.data.msg)
        }
      })
    }
  })
    return (
        <div className='total'>
        <div class="wrapper">
        <form action="">
          <h1>PETSHOP LOGIN</h1>
          <div class="input-box">
            <input type="text"name='email'value={logins.email}onChange={myfunction} placeholder="E-Mail" required />
            {/* <FaUser className='icon' /> */}
          </div>
          <div class="input-box">
            <input type="password" name="password"value={logins.password}onChange={myfunction} placeholder="Password" required/>
            {/* <FaLock className='icon' /> */}
          </div>
          <div class="remember-forgot">
            <label><input type="checkbox"/>Remember Me</label>
            <a href="#">Forgot Password</a>
          </div>
          <button type="submit" class="btn"onClick={petlogin}>Login</button>
          <div class="register-link">
            <p>Dont have an account? <a href="petregi">Register</a></p>
          </div>
        </form>
      </div>
</div>
    )
}



export default Petshoplogin