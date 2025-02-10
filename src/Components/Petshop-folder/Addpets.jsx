import React, { useState } from 'react'

function Addpets() {

  const [petname,SetPetName]=useState("")
  const [petimage,SetPetImage]=useState(null)
  const [petcategory,SetPetCategory]=useState()
  const[petprice,setPetPrice]=useState()


  const handlePets=(e)=>{
    e.preventDefault()
    console.log({
      petname,petimage,petcategory,petprice
    })

    const handleImageChange = (event)=>{
      const file  = event.target.files[0]
      if (file){
        SetPetImage(file)
      }
    }
    
  }
  return (
    <div className='add-pets'>
      <h1>Add Pets</h1>
      <form onSubmit={handlePets}>
        <div className='form-addpets'>
          <label>Pet Name:</label>
          <input type='text' placeholder='addpet' value={petname}onChange={(e)=>SetPetName(e.target.value)
          }></input>
        </div>
        <div className='add-pets'>
          <label>Pet Image:</label>
          <input type='file' value={petimage}onChange={(e)=>SetPetImage(e.target.name)}></input>
            
          
        </div>
        <div className='pet-price'>
          <label>Price:</label>
          <input type='text' value={petprice}onChange={(e)=>setPetPrice(e.target.name)}></input>

        </div>
        <div className='add-pets'>
          <label>Pet Category</label>
          <select value={petcategory}onChange={(e)=>SetPetCategory(e.target.value)}required>
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
 
  )
}

export default Addpets