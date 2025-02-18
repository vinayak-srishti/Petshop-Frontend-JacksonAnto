import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../Components/Petshop-folder/Dogview.css";

function Dogview() {
  // const userid=(localStorage.getItem("userid"))

  const [data, setData] = useState([]);
  const { id } = useParams();
  const[cart,setCart]=useState({
    userId:6666666,
    productId:""
  })
  

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

  const AddtoCart=((id)=>{
axios.post("http://localhost:4000/savecart",cart)
.then((res)=>{
  console.log(res);
  setCart(res.data.data) 
})
.catch((err)=>{
  console.log(err);
  
})
  })

  return (

    <div className="container">
      <div className="row">
        {data.map((pet, i) => {
            // console.log(pet.image.filename);
            
          return (
            <div class="card width: 10rem;">
              <img src={`http://localhost:4000/${pet.image.filename}`} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Name: {pet.Productname}</h5>
                <p class="card-text">Category: {pet.Productcategory}</p>
                <p class="card-text">Price₹: {pet.price}</p>
                {/* <p class="card-text">Price₹: {pet.productdetail}</p> hai*/}
                <a href="#" class="btn btn-primarys">
                  Go somewhere
                </a>
              </div>
              {/* <button
                onClick={() => {
                  console.log(data);
                }}
              >
                click
              </button> */}

    <div className="dogview-container">
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
              <a href="#" className="dogview-btn" onClick={AddtoCart} >
    Add To Cart
              </a>
              <a href="#" className="dogview-buy">
   Buy Now
              </a>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
// bhbadehghwh
export default Dogview;
