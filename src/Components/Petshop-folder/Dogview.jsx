import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../Components/Petshop-folder/Dogview.css"

function Dogview() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  // console.log("category is",id);

  useEffect(() => {
    axios
      .post("http://localhost:3000/viewdog", { id })

      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {data.map((pet, i) => {
            // console.log(pet.image.filename);
            
          return (
            <div class="card width: 10rem;">
              <img src={`http://localhost:3000/${pet.image.filename}`} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Name: {pet.Productname}</h5>
                <p class="card-text">Category: {pet.Productcategory}</p>
                <p class="card-text">Price₹: {pet.price}</p>
                {/* <p class="card-text">Price₹: {pet.productdetail}</p> */}
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
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dogview;
