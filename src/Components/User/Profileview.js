import React, { useEffect, useState } from 'react';
import "./Profile.css";
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';


function Profileview() {
    const navigate=useNavigate()
    const[data,setData]=useState()
    const userid = localStorage.getItem("userid");
    console.log(userid);


  useEffect(() => {
    axios
      .post(`http://localhost:4000/view/${userid}`)
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      }, []);
  }, []);



    return (
        <div className='profile-container'>
            <header className='profile-header'>
                <h1>
                    <span className='ri-user-line profile-icon'/> Profile
                </h1>
            </header>
            <div className='profile-details'>
                <dl className='profile-list'>
                    <div className='profile-item'>
                        <dt>First Name:</dt>
                        <dd>{data?.firstname}</dd>
                    </div>
                    <div className='profile-item'>
                        <dt>Last Name:</dt>
                        <dd>{data?.lastname}</dd>
                    </div>
                    <div className='profile-item'>
                        <dt>Age:</dt>
                        <dd>21</dd>
                    </div>
                    <div className='profile-item'>
                        <dt>State:</dt>
                        <dd>{data?.city}</dd>
                    </div>
                    <div className='profile-item'>
                        <dt>Address:</dt>
                        <dd>{data?.address}</dd>
                    </div>
                    <div className='profile-item'>
                        <dt>Email:</dt>
                        <dd>{data?.email}</dd>
                    </div>
                    <div className='profile-item'>
                        <dt>Contact No:</dt>
                        <dd>{data?.contact}</dd>
                    </div>
                </dl>
                <button className='edit-button'onClick={()=>{
                    navigate("/edituser")
                }}>Edit</button>
            </div>
        </div>
    );
}

export default Profileview;
