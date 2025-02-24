import axios from "axios";
import "../../Components/Petshop-folder/AddCart.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AddCart = () => {
  const [data, setData] = useState([]);
  const userid = localStorage.getItem("userid");
  console.log(userid);

  useEffect(() => {
    axios
      .post(`http://localhost:4000/viewcart/${userid}`)
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm(
      "Are you Sure You Want To Delete This Product From Cart"
    );
    if (isConfirmed) {
      await axios
        .post(`http://localhost:4000/deleteproduct`, { id: id })
        .then((res) => {
          console.log(res);
          window.location.reload();
        })

        .catch((err) => {
          console.log(err);
        });
    }
  };

  console.log(data);

  return (
    <div>
      {data?.map((cart, i) => (
        <div key={i} className="addcart">
          <div className="addcart-main">
            <img
              src={`http://localhost:4000/${cart?.productId?.image?.filename}`}
              className="addcart-img-top"
              alt={cart?.productId?.Productname}
            />
            <div className="addcart-body">
              <div className="addcart-header">
                <h3>Name: {cart?.productId?.Productname}</h3>
                <h3 className="price">Price:{cart?.productId?.price}</h3>
              </div>

              <div className="addcartdelete-container">
             <Link to={`/purchaseproduct/${cart?.productId?._id}`}>  <button className="addcart-buynow">Buy Now</button></Link> 
                <span
                  className="addcartdelete-btn"
                  onClick={() => handleDelete(cart._id)}
                >
                  <i className="ri-delete-bin-line"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddCart;
