import React from 'react'
import "./Register.css";

function Register() {
  return (
    <div className='main'>
      
      <h1 className='full'>User Registeration page</h1>
      <div class="container  container-maindiv">
        <div  class='row register_para' >
          <div className='col-6 register-head'>
              <p>First Name:</p>
          </div>
          <div className='col-6 input-top'  >
            <input type='text' placeholder='Enter your name'/>
          </div>
          <div className='col-6'>
              <p>Last Name:</p>
          </div>
          <div className='col-6' >
            <input type='text' placeholder='Enter your name'/>
          </div>
          <div className='col-6'>
              <p>Email:</p>
          </div>
          <div className='col-6' >
            <input type='text' placeholder='Enter your Email'/>
          </div>
          <div className='col-6'>
              <p>City:</p>
              
          </div>
          <div className='col-6'  >
            <input type='text'  />
          </div>
          <div className='col-6'>
              <p>Date of Birth:</p>
          </div>
          <div className='col-6 ' >
            <input type='date' className='date'/>
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
            <input type='text'/>
          </div>
          <div className='col-6'>
              <p>Contact:</p>
          </div>
          <div className='col-6' >
            <input type='contact'/>
          </div>
          <div className='col-6'>
              <p>Gender:</p>
          </div>
          <div className='col-6' >
            <input type='radio'/>   Male
            <input type='radio'/>   Female
          </div>
          <div className='col-6'>
              <p>Password:</p>
          </div>
          <div className='col-6' >
            <input type='password'/>
          </div>
          <div className='col-6'>
              <p>Confirm <br/>Password:</p>
          </div>
          <div className='col-6' >
            <input type='password'/>
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