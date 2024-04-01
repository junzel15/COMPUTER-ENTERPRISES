import React from "react";
import { Link } from "react-router-dom";
import { RiContactsLine, RiUserLine } from "react-icons/ri";
import { BiCart, BiDesktop, BiLaptop } from "react-icons/bi";
import "./Navigation.css";
import logo from "../HomeLogoimages/Logo.png";

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/">
        <span>El Flo Computer and Enterprises</span>
        <img
          src={logo}
          alt="El Flo Computer and Enterprises"
          className="logo"
        />
      </Link>

      {/* Laptops Dropdown */}
      <div className="dropdown black-bar">
        <button className="dropdown-toggle" id="dropdown-laptops">
          <BiLaptop className="icon" />
          <span>Laptops</span>
        </button>

        <div className="dropdown-menu">
          <Link to="/gaminglaptops" className="dropdown-item">
            Gaming Laptops
          </Link>
          <Link to="/laptops/gaming" className="dropdown-item">
            Acer
          </Link>
          <Link to="/laptops/business" className="dropdown-item">
            Lenovo
          </Link>
          <Link to="/laptops/business" className="dropdown-item">
            HP
          </Link>
        </div>
      </div>

      {/* Desktop PC Dropdown */}
      <div className="dropdown black-bar">
        <button className="dropdown-toggle" id="dropdown-laptops">
          <BiDesktop className="icon" />
          <span>Desktop PC</span>
        </button>

        <div className="dropdown-menu">
          <Link to="/gaminglaptops" className="dropdown-item">
            Gaming Desktop PC
          </Link>
          <Link to="/laptops/gaming" className="dropdown-item">
            Office Desktop PC
          </Link>
        </div>
      </div>

      {/* Laptop and PC Parts Dropdown */}
      <div className="dropdown black-bar">
        <button className="dropdown-toggle" id="dropdown-parts">
          <div className="combined-icon">
            <BiLaptop className="laptop-icon" />
            <BiDesktop className="desktop-icon" />
          </div>
          <span>Laptop and PC Parts</span>
        </button>

        <div className="dropdown-menu">
          <Link to="/parts/cpu" className="dropdown-item">
            Laptops Parts
          </Link>
          <Link to="/parts/gpu" className="dropdown-item">
            Desktop PC Parts
          </Link>
          <Link to="/parts/gpu" className="dropdown-item">
            Graphics Cards
          </Link>
        </div>
      </div>

      {/* Contact Us */}
      <Link to="/contactus">
        <RiContactsLine className="icon" />
        <span>Contact Support</span>
      </Link>

      {/* Cart */}
      <Link to="/cart">
        <BiCart className="icon" />
        <span>Cart</span>
      </Link>

      {/* Login */}
      <Link to="/login" className="login-bar">
        <RiUserLine className="icon" />
        <span>Login</span>
      </Link>
    </nav>
  );
};

export default Navigation;
