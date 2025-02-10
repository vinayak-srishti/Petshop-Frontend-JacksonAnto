import React, { useState } from 'react'

function Addpets() {
  const [petname, SetPetName] = useState("")
  const [petimage, SetPetImage] = useState(null)  
  const [petcategory, SetPetCategory] = useState("")
  const [petprice, setPetPrice] = useState("")
  const [imagePreview, setImagePreview] = useState("") 

  const handlePets = (e) => {
    e.preventDefault()
    console.log({
      petname,
      petimage,
      petcategory,
      petprice
    })
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]  // Get the first selected file
    SetPetImage(file)  

    // Create an image preview URL
    const previewUrl = URL.createObjectURL(file)
    setImagePreview(previewUrl)  // Set the preview URL
    console.log(file)
  }

  return (
    <div className='add-pets'>
      <h1>Add Pets</h1>
      <form onSubmit={handlePets}>
        <div className='form-addpets'>
          <label>Pet Name:</label>
          <input 
            type='text' 
            placeholder='Add pet'
            value={petname}
            onChange={(e) => SetPetName(e.target.value)}  // Handle pet name change
          />
        </div>

        <div className='add-pets'>
          <label>Pet Image:</label>
          <input 
            type='file' 
            onChange={handleImageChange} 
          />
        </div>

        {/* Display the image preview if an image is selected */}
        {imagePreview && (
          <div className="image-preview">
            <img src={imagePreview} alt="Pet Preview" style={{ maxWidth: '200px', maxHeight: '200px' }} />
          </div>
        )}

        <div className='pet-price'>
          <label>Price:</label>
          <input 
            type='text' 
            value={petprice}
            onChange={(e) => setPetPrice(e.target.value)}  // Handle price change
          />
        </div>

        <div className='add-pets'>
          <label>Pet Category:</label>
          <select 
            value={petcategory} 
            onChange={(e) => SetPetCategory(e.target.value)} 
            required
          >
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Pet Treats">Pet Treats</option>
            <option value="Accessories">Accessories</option>
            <option value="Grooming">Grooming</option>
            <option value="Pet Toy">Pet Toy</option>
            <option value="Dog Food">Dog Food</option>
            <option value="Cat Food">Cat Food</option>
          </select>
        </div>

        <button type='submit'>Add</button>
      </form>
    </div>
    // dfghj
  )
}

export default Addpets
