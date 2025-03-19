import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../Components/Admin/Viewalluser.css"

function Viewalluser() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:4000/usersinfo")
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const deleteuserinfo = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    
    if (confirmDelete) {
      axios.post("http://localhost:4000/deleteuser", { id: id })
        .then((res) => {
          console.log(res);
          alert("User deleted successfully!");
          window.location.reload();
        })
        .catch((err) => {
          console.error("Error deleting user:", err);
        });
    } else {
      console.log("User deletion cancelled");
    }
  };
  
 
  
  return (
    <div className="viewalluser">
      <div className="viewalluser-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>FristName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>State</th>
            <th>Address</th>
            <th>Pin Code</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el, i) => {
            return (
              <tr>
                <td> {i + 1}</td>
                <td>{el.firstname}</td>
                <td>{el.lastname}</td>
                <td>{el.email}</td>
                <td>{el.contact}</td>
                <td>{el.city}</td>
                <td>{el.address}</td>
                <td>{el.pincode}</td>
                <td><button type="submit" className="butreject" onClick={()=>deleteuserinfo(el._id)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </div>
    </div>
  );
}

export default Viewalluser;
