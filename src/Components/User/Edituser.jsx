import React, { useEffect, useState } from 'react';
import './Useredit.css';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
function Edituser() {

  const navigate=useNavigate()

  const[data,setData]=useState({
    firstname:"",
    lastname:"",
    city:"",
    address:"",
    email:"",
    contact:""

  })

  const myFunction = (r) => {
    setData({
      ...data,
      [r.target.name]: r.target.value,
    });
    console.log(data);
  };
  const userid = localStorage.getItem("userid");
  console.log(userid);

  useEffect(()=>{
    axios
    .post(`http://localhost:4000/view/${userid}`)
    .then((res)=>{
console.log(res);
setData(res.data.data)
    })
    .catch((err)=>{
console.log(err);
    })

  },[])

  const updateuser=((e)=>{
    e.preventDefault()
    axios.post(`http://localhost:4000/updateuser/${userid}`,data)
    .then((res)=>{
console.log(res);
if(res.status==200){
  alert("updated")
  navigate("/profileview")
}

    })
    .catch((err)=>{
console.log(err);
    })
  })
  return (
    <div className="edit-container">
      <div className="edit-view">
        <h1>
          <span className="ri-user-line edit-icon"/> Edit User
        </h1>
        <form className="edit-form">
          <div className="edit-item">
            <label htmlFor="name">First name</label>
            <input type="text" id="name" name="firstname" value={data?.firstname} onChange={myFunction}/>
          
          </div>
          <div className="edit-item">
            <label htmlFor="name">First name</label>
            <input type="text" id="name" name="lastname" value={data?.
lastname} onChange={myFunction}/>
          </div>
          <div className="edit-item">
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" value={data?.city} onChange={myFunction}/>
          </div>
          <div className="edit-item">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" value={data?.address} onChange={myFunction}/>
          </div>
          <div className="edit-item">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={data?.email} onChange={myFunction}/>
          </div>
          <div className="edit-item">
            <label htmlFor="phone">Phone No</label>
            <input type="tel" id="phone" name="phone"defaultValue={data?.contact} onChange={myFunction} />
          </div>

          <button type="submit" className="edit-button" onClick={(updateuser)}>
            Save Changes
          </button>
        </form>
      </div>
    </div>
    ////ghjj
  );
}

export default Edituser;
