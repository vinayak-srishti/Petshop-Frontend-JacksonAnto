import React from 'react'
import "./Edit.css";


function Userlogin() {
  return (

    <div className='all'>
      <h1 className='one'>User Login</h1>
      <div class="container text-center">
        <div class="row">
          <div class="col-6" className='jack'>
            <label>UserName:</label>
            <input type='text' className='div'/>
          </div>
          <div class="col-6" className='second'>
            <label>Password:</label>
            <input type='password' className='three'/>
          </div>
          


          <div class="col-6"  >
            <div className='button'>
              <button type='button' >Login</button>
            </div>
          </div>

        </div>
      </div>


    </div>
  )
}

export default Userlogin