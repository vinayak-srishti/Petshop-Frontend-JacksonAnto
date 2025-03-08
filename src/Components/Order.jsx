import React, { useEffect, useState } from "react";
import "./Order.css";
import axios from "axios";
import Buy from "./User/Buy";

function Order() {
  const [data, setData] = useState({});
  const userid = localStorage.getItem("userid");
  console.log(userid);

  useEffect(() => {
    axios
      .post(`http://localhost:4000/findorder/${userid}`)
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      }, []);
  }, []);

  return (
    <div className="order">
      {/* <div><Buy/></div> */}
      <div className="order-container">
        <div className="order-row order-g-3">
          <div className="order-col">
            <input
              type="text"
              className="order-form-control"
              placeholder="First name"
              aria-label="First name"
              defaultValue=    {data?.firstname} 
            >
           
            </input>
          </div>
          <div className="order-col">
            <input
              type="text"
              className="order-form-control"
              placeholder="Last name"
              aria-label="Last name" 
              defaultValue=  { data?.lastname}
            >
            </input>
          </div>
        </div>

        <div className="order-col-md-6">
          <label htmlFor="order-inputEmail" className="order-form-label">
            Email
          </label>
          <input
            type="email"
            className="order-form-control"
            id="order-inputEmail"
            defaultValue={data?.email}
          />
        </div>

        <div className="order-col-md-6">
          <label htmlFor="order-inputMobile" className="order-form-label">
            Mobile Number
          </label>
          <input
            type="number"
            className="order-form-control"
            id="order-inputMobile"
            defaultValue={data?.contact}
          />
        </div>

        <div className="order-col-12">
          <label htmlFor="order-inputAddress" className="order-form-label">
            Address
          </label>
          <input
            type="text"
            className="order-form-control"
            id="order-inputAddress"
            placeholder=""
            defaultValue={data?.address}
          />
        </div>

        <div className="order-col-md-4">
          <label htmlFor="order-inputState" className="order-form-label">
            State
          </label>
          <input
            type="text"
            className="order-form-control"
            id="order-inputZip"
            defaultValue={data?.city}
          />
        </div>

        <div className="order-col-md-2">
          <label htmlFor="order-inputZip" className="order-form-label">
            Pin Code
          </label>
          <input
            type="text"
            className="order-form-control"
            id="order-inputZip"
            defaultValue={data?.pincode}
          />
        </div>

        <div>
          <button type="button" className="order-btn order-btn-success">
            Continue Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Order;
