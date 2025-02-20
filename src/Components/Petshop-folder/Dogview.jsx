import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../Components/Petshop-folder/Dogview.css";
import Navbar from "../User/Navbar";

function Dogview() {
  const userid = localStorage.getItem("userid");
  console.log(userid);

  const [data, setData] = useState([]);
  const { id } = useParams();
  
  useEffect(() => {
    axios
      .post("http://localhost:4000/viewdog", { id })
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const AddtoCart = (productId) => {
    const cartItem = {
      userId: userid,
      productId: productId, 
    };

    axios.post("http://localhost:4000/savecart", cartItem)
      .then((response) => {
        console.log(response);
        if (response.data.status==200){
          alert(" Selected Item Added to Cart")
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };



  return (
    <div className="dogview-container">
      <div className="dogview-navbar">
        <Navbar />
      </div>
      <div className="dogview-row">
        {data.map((pet, i) => (
          <div key={i} className="dogview-card">
            <img
              src={`http://localhost:4000/${pet.image.filename}`}
              className="dogview-card-img"
              alt="Dog"
            />
            <div className="dogview-card-body">
              <h5 className="dogview-card-title">Name: {pet.Productname}</h5>
              <p className="dogview-card-text">Category: {pet.Productcategory}</p>
              <p className="dogview-card-text">Price₹: {pet.price}</p>
              <button className="dogview-btn" onClick={() => AddtoCart(pet._id)}>
                Add to Cart
              </button>
              {/* <a href="#" className="dogview-buy">
                Buy Now
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dogview;
