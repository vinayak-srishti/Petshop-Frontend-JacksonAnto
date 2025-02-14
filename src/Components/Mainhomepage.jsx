  import React from 'react'
  import MainNavbar from './MainNavbar'
  import "../Components/Mainhomepage.css"
  // import petadv from "../Assets/petadv.mp4"
  import cursor8 from "../Assets/cursor8.webp"
  import cat1 from "../Assets/cat1.jpg"
  import cat2 from "../Assets/cat2.jpg"

  function Mainhomepage() {
    return (
      <div className='mainhome'>
  <div ><MainNavbar/></div>
  <div className="mainhome-bg">
          {/* <video autoPlay controls>
            <source src={petadv} type="video/mp4" />
            <source src={petadv} type="video/ogg" />
          </video> */}
          <img src={cursor8}/>
        </div>

      </div>
    )
  }

  export default Mainhomepage