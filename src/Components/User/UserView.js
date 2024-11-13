import React from 'react'
import "./User.css"

function UserView() {
    return (
   <div>
    <div class="card  justify-content-center align-items-center container-fluid d-flex" style={{width: "45rem", height:"570px"}}  >
 <label>Name</label>
 <input type='text '></input>
 <label>Password</label>
 <input type='password'></input>
 <label>Email</label>
 <input type='text'></input>
 <label>City</label>
 <input type='text'></input>
 <label>Contact No</label>
 <input type='phone'></input>
 <label>Gender</label>
 <input type='text'></input>
 <label>Zip</label>
 <input type='text'></input>
 
</div>
   </div>
    )
}

export default UserView