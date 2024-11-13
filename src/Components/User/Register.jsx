import React, { useState } from 'react'
import "./Register.css";

function Register() {
  const[Reg,setReg]=useState({
    FirstName:"",
    LastName:"",
    Email:"",
    City:"",
    DateofBirth:"",
    Address:"",
    Pincode:"",
    Contact:"",
    Gender:"",
    Password:"",
    ConfirmPassword:""


  })
  const myfunction=((r)=>{
    setReg({
      ...Reg,[r.target.name]:r.target.value
  })
  console.log(Reg)
  })
  return (
    <div className='main'>

      <h1 className='full'>User Registeration page</h1>
      <div class="container  container-maindiv">
        <div  class='row register_para' >
          <div className='col-6 register-head'>
              <p>First Name:</p>
          </div>
          <div className='col-6 input-top'  >
            <input type='text' placeholder='Enter your name' name='FirstName'value={Reg.FirstName} onChange={myfunction}/>
          </div>
          <div className='col-6'>
              <p>Last Name:</p>
          </div>
          <div className='col-6' >
            <input type='text' placeholder='Enter your name' name='LastName' value={Reg.LastName} onChange={myfunction}/>
          </div>
          <div className='col-6'>
              <p>Email:</p>
          </div>
          <div className='col-6' >
            <input type='email' placeholder='Enter your Email' name='Email' value={Reg.Email} onChange={myfunction}/>
          </div>
          <div className='col-6'>
              <p>City:</p>

          </div>
          <div className='col-6 selectdiv'>
            <select name="" id="" className='rounded rounded-5 select'>
              <option value="">Select</option>
              <option value="">Tamil Nadu</option>
              <option value="">Kerala</option>
              <option value="">New Delhi</option>
            </select>
          </div>
          <div className='col-6'>
              <p>Date of Birth:</p>
          </div>
          <div className='col-6 ' >
            <input type='date' className='date' name='Date of Birth' value={Reg.DateofBirth} onChange={myfunction}/>
          </div>
          <div className='col-6'>
              <p>Address:</p>
          </div>
          <div className='col-6' >
            <input type='text'/>
          </div>
          <div className='col-6'>
              <p>Pincode:</p>
          </div>
          <div className='col-6' >
            <input type='text' name='Pincode' value={Reg.Pincode} onChange={myfunction}/>
          </div>
          <div className='col-6'>
              <p>Contact:</p>
          </div>
          <div className='col-6' >
            <input type='contact' name='contact' value={Reg.Contact}onChange={myfunction}/>
          </div>
          <div className='col-6 mb-3'>
              <label htmlFor="gender">Gender:</label>
          </div>
          <div className='col-6 mb-3' >
            <input name='gender' type='radio'/>   Male
            <input name='gender' className='ms-2' type='radio'/>   Female
          </div>
          <div className='col-6'>
              <p>Password:</p>
          </div>
          <div className='col-6' >
            <input type='password' name='Password' value={Reg.Password}onChange={myfunction}/>
          </div>
          <div className='col-6'>
              <p>Confirm Password:</p>
          </div>
          <div className='col-6' >
            <input type='password' name='ConfirmPassword' value={Reg.ConfirmPassword} onChange={myfunction}/>
          </div>
          <div className='col-6'  >
          <button type='button ' className='button_1'>Register</button>
          </div>
         <a href=''>Already have account  </a>

        </div>

      </div>


  </div>


  )
}

export default Register
