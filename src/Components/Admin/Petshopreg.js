import React from 'react'
import "./Petreg.css"
import "../../Assets/regs.jpg"



function Petshopreg() {
  return (
    <div className='parent'>
      <div className="total24">
        <div class="row g-3 reg">
          <h1>PETSHOP REGISTRATION</h1>
          <form class="row g-4 input-padding">
            <div class="col-md-6">
              <label for="inputFirstName" class="form-label">First Name*</label>
              <input type="text" class="form-control" placeholder="First name" />
            </div>
            <div class="col-md-6">
              <label for="inputLastName" class="form-label">Last Name*</label>
              <input type="text" class="form-control" placeholder="Last name" />
            </div>
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">Email</label>
              <input type="email" class="form-control" placeholder="Email" />
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">Phone Number</label>
              <input type="number" class="form-control" placeholder='Number' />
            </div>
            <div class="col-6">
              <label for="inputAddress" class="form-label">Address</label>
              <input type="text" class="form-control" placeholder="Address" />
            </div>
            <div class="col-6">
              <label for="inputAddress" class="form-label">Shopcode</label>
              <input type="text" class="form-control" placeholder="Shopcode" />
            </div>
            <div class="col-6">
              <label for="inputAddress" class="form-label">Password</label>
              <input type="password" class="form-control" placeholder="Password" />
            </div>
            <div class="col-6 .ml-3">
              <label for="inputAddress2" class="form-label">Confirm Password</label>
              <input type="password" class="form-control" placeholder="Confirm Password" />
            </div>
            <div class="col-md-6">
              <label for="inputCity" class="form-label">City</label>
              <input type="text" class="form-control" placeholder='city' />
            </div>
            <div class="col-md-6 state"  >
              <label for="inputState" class="form-label">State</label>
              <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>
                </option>
              </select>
            </div>
            {/* <div class="col-md-2">
              <label for="inputZip" class="form-label">Pin Code</label>
              <input type="text" class="form-control" placeholder='Pin code' />
            </div> */}
            <div class="col-6 ">
              <div >

                <div>
                  <div class="col-12 sign-button ">
                    <button type="submit" class="btn btn-primary">Sign in</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6">
            </div>
          </form>
        </div>
      </div>
    </div >
  )
}




export default Petshopreg