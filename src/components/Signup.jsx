import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faLock,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup-page">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form>
          <div className="input-container">
            <FontAwesomeIcon icon={faUser} />
            <input type="text" placeholder="Full Name" />
          </div>
          <div className="input-container">
            <FontAwesomeIcon icon={faEnvelope} />
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="input-container">
            <FontAwesomeIcon icon={faLock} />
            <input type="password" placeholder="Password" />
          </div>
          <div className="input-container">
            <FontAwesomeIcon icon={faLock} />
            <input type="password" placeholder="Confirm Password" />
          </div>
          <div className="input-container">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <input type="text" placeholder="Full Address" />
          </div>
          <div className="input-container">
            <FontAwesomeIcon icon={faPhone} />
            <input type="text" placeholder="Contact Number" />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <div className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
