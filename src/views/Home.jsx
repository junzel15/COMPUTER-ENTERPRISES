import React from "react";
import homeImage from "../HomeLogoimages/home.png";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="home1-banner">
        <div className="banner1-image">
          <img src={homeImage} alt="Banner" />
        </div>
        <div className="banner1-content">
          <h1>Welcome to Our Shop</h1>
          <p>
            PC Occasion is the expert in PREMIUM refurbished laptops and
            desktops. Browse our products and benefit from exclusive advantages.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
