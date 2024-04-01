import React from "react";
import { Link } from "react-router-dom";
import { BiUser, BiLockAlt } from "react-icons/bi";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="input1-container">
            <BiUser className="input1-icon" />
            <input type="text" placeholder="Username" />
          </div>
          <div className="input1-container">
            <BiLockAlt className="input1-icon" />
            <input type="password" placeholder="Password" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <Link to="/forgot-password">Forgot password?</Link>
          </div>
          <button type="submit">Login</button>
        </form>

        <div className="or-divider">
          <span>or</span>
        </div>

        <div className="oauth-buttons">
          <button className="oauth-button google">
            <FaGoogle />
            Continue with Google
          </button>
          <button className="oauth-button facebook">
            <FaFacebook />
            Continue with Facebook
          </button>
          <button className="oauth-button apple">
            <FaApple />
            Continue with Apple ID
          </button>
        </div>

        <div className="create-account-link">
          Don't have an account? <Link to="/signup">Create Account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
