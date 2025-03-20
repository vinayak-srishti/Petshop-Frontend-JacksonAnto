import { FaEnvelope } from "react-icons/fa";
import "./forgetpass.css";
import axios from "axios";
import { useState } from "react";

function Forget() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const forgetpass = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("USER DOES NOT EXIST");
      return;
    }

    try {
      const res = await axios.post("http://localhost:4000/forgetpass", {
        email,
      });
      console.log(res);
      setIsVerified(true);
      // alert("Verified email!");
    } catch (err) {
      console.error(err);
      alert("Error  verified email");
    }
  };

  const changePass = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    axios
      .post("http://localhost:4000/changepassword", {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        alert("Password changed successfully!");
        setPassword("");
        setConfirmPassword("");
      })
      .catch((err) => {
        console.error(err);
        alert("Error changing password");
      });
  };

  const handleVerify = () => {
    if (email.includes("@") && email.includes(".")) {
      setIsVerified(true);
      setShowInput(true);
    } else {
      alert("Invalid email. Please enter a valid email address.");
    }
  };

  return (
    <div className="back-ground-forget">
      <div className="forget-all">
        <h1>Forget Password</h1>

        <form onSubmit={forgetpass}>
          <label className="forget-label" htmlFor="email">
            Email <FaEnvelope className="forget-icon" />
          </label>
          <input
            type="email"
            id="email"
            className="forget-password-input"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="forget-btn" onClick={handleVerify}>
            Verify
          </button>
        </form>

        {showInput && isVerified && (
          <form onSubmit={changePass}>
            <label className="forget-label" htmlFor="password">
              New Password
            </label>
            <input
              type="password"
              id="password"
              className="forget-password-input"
              placeholder="Enter your new password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button type="submit" className="forget-btn">
              Update Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Forget;
