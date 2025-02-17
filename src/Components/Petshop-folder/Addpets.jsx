import axios from "axios";
import React, { useState } from "react";
import "./Addpets.css";

function AddPets() {
  const [data, setData] = useState({
    Productname: "",
    image: null,
    Productcategory: "",
    // Productdetail: "",
    price: "",
    imagePreview: "",
  });


  const handlePets = (e) => {
    e.preventDefault()
    
    console.log({
      petname,
      petimage,
      petcategory,
      petprice
      
    })
  }
  const handleFunction = (u) => {
    const { name, value } = u.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setData((prevData) => ({
        ...prevData,
        image: file,
        imagePreview: URL.createObjectURL(file),
      }));
    }
  };

  const showAlert = () => {
    alert("Added Successfully")
    window.location.reload();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("Productname", data.Productname);
    formData.append("image", data.image);
    formData.append("Productcategory", data.Productcategory);
    formData.append("price", data.price);
    // formData.append(" Productdetail", data.Productdetail);

    console.log(formData);

    axios
      .post("http://localhost:3000/addproduct", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="add-pets">
      <h1>Add Pets</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-addpets">
          <label>Pet Name:</label>
          <input
            type="text"
            name="Productname"
            value={data.Productname}
            onChange={handleFunction}
          />
        </div>

        <div className="add-pets">
          <label>Pet Image:</label>
          <input type="file" onChange={handleImageChange} />
        </div>

        {data.imagePreview && (
          <div className="image-preview">
            <img
              src={data.imagePreview}
              alt="Pet Preview"
              style={{ maxWidth: "200px", maxHeight: "200px" }}
            />
          </div>
        )}
 {/* <div className="pet-price">
          <label>Productdetail:</label>
          <input
            type="text"
            name="Productdetail"
            value={data.Productdetail}
            onChange={handleFunction}
          />
        </div>   */}

        <div className="pet-price">
          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={data.price}
            onChange={handleFunction}
          />
        </div>

        <div className="add-pets">
          <label>Pet Category:</label>
          <select
            name="Productcategory"
            value={data.Productcategory}
            onChange={handleFunction}
            required
          >
            <option value="">Select Category</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="pet treats">Pet Treats</option>
            <option value="accessories">Accessories</option>
            <option value="grooming">Grooming</option>
            <option value="pet toy">Pet Toy</option>
            <option value="dog food">Dog Food</option>
            <option value="cat food">Cat Food</option>
          </select>
        </div>

        <button className="addpetbutton" type="submit" onClick={showAlert}>
          Add
        </button>
      </form>
    </div>
  );
}

export default AddPets;
