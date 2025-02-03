import React from 'react'
import  { useState } from "react";
import { useEffect } from "react";
import "./Petshopreq.css"
import axios from 'axios';


function Petshopreq() {
  const [data,setData]=useState([])

  const  getAlluser=()=>{
    axios
    .post("http://localhost:3000/viewpetshoprequests")
    .then((res)=>{
      console.log(res);
      
      setData(res.data.data)
    })
    .catch((err)=>{
      console.log(err);
      
    })
    }

    const rejectUser=(id)=>{
      axios.post(`http://localhost:3000/rejectshoprequest/${id}`)
    .then((res)=>{
      console.log(res);
      alert("user delete successfully")
      window.location.reload()
    })
    }

const Accept =(id)=>{
  axios.post(`http://localhost:3000/acceptshoprequest/${id}`)
  .then((res)=>{
    console.log(res)
    alert("Accept successfully")
    window.location.reload()
  })
}

    useEffect(()=>{
      getAlluser()
    },[])
    useEffect(()=>{})

    
   

  return (
   
    <div className="pettable">
       <table className="table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>FristName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Contact</th>
            <th>State</th>
            <th>Address</th>
            <th>Shop.Code</th>
            <th>City</th>            
            <th>Accept</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el,i)=>{
            return(
              <tr>
                <td>{i+1}</td>
                <td>{el.firstname}</td>
                <td>{el.lastname}</td>
                <td>{el.email} </td>
                <td>{el.contact} </td>
                <td>{el.state} </td>
                <td>{el.address}</td>                
                <td>{el.shopcode} </td>
                <td>{el.city} </td>
                <td><button type="submit" className="butaccept" onClick={()=>Accept(el._id)}>Accept</button></td>
                <td><button type="submit" className="butreject"  onClick={() => rejectUser(el._id)}>Reject</button></td>
                {/* HI */}
              </tr>
            )
          })}
        </tbody>
      </table> 
    </div>
  

  )
}

export default Petshopreq