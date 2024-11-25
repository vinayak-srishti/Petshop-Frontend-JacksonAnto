import React, { useState } from 'react'
import "./Register.css";
import { PiApproximateEqualsDuotone } from 'react-icons/pi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
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
    confirmPassword: ""


  })

  const navigate=useNavigate()
  const myfunction = ((r) => {
    setReg({
      ...Reg, [r.target.name]: r.target.value
    })
    console.log(Reg)
  })

  const handleSubmitt = (() => {
    console.log(Reg);
   if(!Reg.firstname){
   }
   else if(!Reg.lastname){
  }
  else if(!Reg.email){
  }
  else if(!Reg.city){
  }
   else if(!Reg.dateofbirth){
  }
  else if(!Reg.address){
  } 
  else if(!Reg.pincode){
  }
  else if(!Reg.contact){
  }
  else if(!Reg.gender){
  }
  else if(!Reg.password){

  }
  else if (Reg.password!== Reg.confirmPassword){
    alert("password error")
  }
  
 else {

    axios.post('http://localhost:2024/petshopuserregistration', Reg)
      .then((res) => {
        console.log(res)
        alert('Registration successful!');
        navigate('/Userlogin');
      })
      .catch((err) => {
        console.log(err)
      })
}})

  return (
    <div className='main'>

      <h1 className='full'>User Registeration page</h1>
      <div class="container  container-maindiv">
        <div class='row register_para' >
          <div className='col-6 register-head'>
            <p>First Name:</p>
          </div>
          <div className='col-6 input-top'  >
            <input type='text' placeholder='Enter your name' name='firstname' value={Reg.firstName} onChange={myfunction} />
          </div>
          <div className='col-6'>
            <p>Last Name:</p>
          </div>
          <div className='col-6' >
            <input type='text' placeholder='Enter your name' name='lastname' value={Reg.lastName} onChange={myfunction} />
          </div>
          <div className='col-6'>
            <p>Email:</p>
          </div>
          <div className='col-6' >
            <input type='email' placeholder='Enter your Email' name='email' value={Reg.email} onChange={myfunction} />
          </div>
          <div className='col-6'>
            <p>City:</p>

          </div>
          <div className='col-6 selectdiv'>
            <select name='city' value={Reg.city} onChange={myfunction} id="" className='rounded rounded-5 select'>
              <option value="">Select</option>
              <option value="Tamil adu">Tamil Nadu</option>
              <option value="kerala">Kerala</option>
              <option value="New delhi">New Delhi</option>
            </select>
          </div>
          <div className='col-6'>
            <p>Date of Birth:</p>
          </div>
          <div className='col-6 ' >
            <input type='date' className='date' name='dateofbirth' value={Reg.dateofbirth} onChange={myfunction} />
          </div>
          <div className='col-6'>
            <p>Address:</p>
          </div>
          <div className='col-6' >
            <input type='text' name='address' value={Reg.address} onChange={myfunction} />
          </div>
          <div className='col-6'>
            <p>Pincode:</p>
          </div>
          <div className='col-6' >
            <input type='text' name='pincode' value={Reg.pincode} onChange={myfunction} />
          </div>
          <div className='col-6'>
            <p>Contact:</p>
          </div>
          <div className='col-6' >
            <input type='contact' name='contact' value={Reg.contact} onChange={myfunction} />
          </div>
          <div className='col-6 mb-3'>
            <label htmlFor="gender" value={Reg.gender} onChange={myfunction} name='gender'>Gender:</label>
          </div>
          <div className='col-6 mb-3' >
            <input name='gender' value="male" onChange={myfunction} type='radio' /> Male
            <input name='gender' value="female" onChange={myfunction} className='ms-2' type='radio' />Female
          </div>
          <div className='col-6'>
            <p>Password:</p>
          </div>
          <div className='col-6' >
            <input type='password' name='password' value={Reg.password} onChange={myfunction} />
          </div>
          <div className='col-6'>
            <p>Confirm Password:</p>
          </div>
          <div className='col-6' >
            <input type='password' name='confirmPassword' value={Reg.confirmPassword} onChange={myfunction} />
          </div>
          <div className='col-6'  >
            <button type='button ' onClick={handleSubmitt} className='button_1'>Register</button>
          </div>
          <a href=''>Already have account  </a>

        </div>

      </div>


    </div>


  )
}

export default Register

