import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../Components/Admin/Viewallproducts.css";

function Viewallproducts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:4000/getallproducts")
      .then((res) => {
        console.log(res);
        setData(res.data.data || []); // Ensure data is an array
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteProduct = (id) => {
    const conformDelete=window.confirm("Are you sure you want to delete this product?");
    if(conformDelete){
    axios
      .post("http://localhost:4000/deleteproduct", { id: id })
      .then((res) => {
        console.log(res);
        alert("product deleted successfully!");
        window.location.reload();
      })
      .catch((err) => {
        console.log("Error deleting user:",err);
      });
  }else{
    console.log("product deletion cancelled");
    
  }
  }
  return (
    <div className="viewallproducts">
      <div className="viewallproducts-head">
        <h1> View All Products</h1>
      </div>
      {data.map((product, i) => (
        <div key={i} className="viewallproduct-box">
          <img
            src={`http://localhost:4000/${product.image.filename}`}
            className="viewallproduct-img-top"
            alt={product.Productname}
          />
          <div className="viewallproduct-body">
            <h5 className="viewallproduct-title">
              Name: {product.Productname}
            </h5>
            <p className="viewallproduct-text">Category: {product.Category}</p>
            <p className="viewallproduct-text">Price: ${product.price}</p>
            <button className="viewallproducts-button"
              onClick={() => deleteProduct(product._id)}>
              Delete Product
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Viewallproducts;
