import React from "react";
import { Link } from "react-router-dom";
import { BiUser, BiLockAlt } from "react-icons/bi"; // Importing icons from Boxicons
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="input-container">
            <BiUser className="input-icon" />
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-container">
            <BiLockAlt className="input-icon" />
            <input type="password" placeholder="Password" />
          </div>
          <button type="submit">Login</button>
        </form>

        <div className="create-account-link">
          Don't have an account? <Link to="/signup">Create Account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
