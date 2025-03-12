import { FaEnvelope } from "react-icons/fa";
import "./forgetpass.css";

function Forget() {

  

  return (
    <div className="back-ground-forget">
      <div className="forget-all">
        <form>
          <h1>Forget Password</h1>

          <label className="forget-label" htmlFor="email">
            Email <FaEnvelope className="forget-icon" />
          </label>
          <input
            type="email"
            id="email"
            className="forget-password-input"
            placeholder="Enter your email"
            required
          />

          <label className="forget-label" htmlFor="password">
            New Password
          </label>
          <input
            type="password"
            id="password"
            className="forget-password-input"
            placeholder="Enter your new password"
            required
          />

          <label className="forget-label" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="forget-password-input"
            placeholder="Confirm your new password"
            required
          />

          <button type="submit" className="forget-btn">
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default Forget;
