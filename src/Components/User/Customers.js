import React, { useEffect, useState } from "react";
import "../../Components/User/Customer.css";
import axios from "axios";

function Customers() {
  const [data, setData] = useState([]);
  const userid = localStorage.getItem("userid");

  useEffect(() => {
    axios
      .post(`http://localhost:4000/finalorder/${userid}`)
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="customer">
      <table className="customer-table">
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
            <th>Product Name</th>
            <th>Order Date</th>
            <th>Final price</th>
            <th>Quantity</th>
            <th>Product Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{el.userId.firstname}</td>
                <td>{el.userId.lastname}</td>
                <td>{el.userId.email}</td>
                <td>{el.userId.contact}</td>
                <td>{el.userId.city}</td>
                <td>{el.userId.address}</td>
                <td>{el.userId.pincode}</td>
                <td>{el.productId.Productname}</td>
                <td>{el.date}</td>
                <td>{el.finprice}</td>
                <td>{el.quantity}</td>
                <td><img src={`http://localhost:4000/${el.productId.image.filename}`}></img></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Customers;
