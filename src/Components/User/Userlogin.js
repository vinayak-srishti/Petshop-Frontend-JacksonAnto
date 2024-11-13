// import React from 'react'
// import "./Edit.css"
// import userloginback from "../../Assets/userloginback.jpg"
// function Userlogin() {
//   return (
//     <div className='main-user'>
//       <div>
//         <form className='login-main'>
//           <h1>Login</h1>
//           <div className='user-login1'>
//             <input type='text' placeholder='Username'></input>
//           <i i class="ri-user-3-fill"></i>
//           </div>
//           <div className='user-login1'>
//             <input type='password' placeholder='Password'></input>
//             <i  i class="ri-lock-2-fill"></i>
//           </div>
//           <div className='user-login3'> 
//         <label><input type='checkbox'></input>Remember Me</label>
//         <a href='#'>Forget Password</a>
      
//           </div>
//           <div>
//           <button type='button' className='login-user-button'>login</button>
//           </div>
//           <div className='register-link'>
//             <p>Dont have an account? <a href='#'>Register</a></p>
//           </div>

//         </form>
//       </div>
//     </div>
//   )
// }

// export default Userlogin


import React from 'react';
import './Edit.css';  // Ensure the CSS file has styles for the updated class names
import { RiUser3Fill, RiLock2Fill } from 'react-icons/ri';  // Import icons from react-icons

function Userlogin() {
  return (
    <div className="main-user">
      <div className="login-container">
        <form className="login-form">
          <h1>Login</h1>

          {/* Username Input */}
          <div className="input-group">
            <input type="text" placeholder="Username" className="input-field" required />
            <RiUser3Fill className="input-icon" />
          </div>

          {/* Password Input */}
          <div className="input-group">
            <input type="password" placeholder="Password" className="input-field" required />
            <RiLock2Fill className="input-icon" />
          </div>

          {/* Remember Me and Forget Password */}
          <div className="options-group">
            <label className="remember-me">
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#" className="forget-password">Forget Password?</a>
          </div>

          {/* Login Button */}
          <div>
            <button type="submit" className="login-btn">Login</button>
          </div>

          {/* Register Link */}
          <div className="register-link">
            <p>Don't have an account? <a href="#">Register</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Userlogin;
