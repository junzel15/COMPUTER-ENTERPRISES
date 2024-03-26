import React, { useState, useEffect } from "react";
import "./GamingLaptops.css";
import Laptop1Image from "../Gamingimages/laptop1.png";
import Laptop2Image from "../Gamingimages/laptop2.png";
import Laptop3Image from "../Gamingimages/laptop3.png";
import Laptop4Image from "../Gamingimages/laptop4.png";
import Laptop5Image from "../Gamingimages/laptop5.png";
import Laptop6Image from "../Gamingimages/laptop6.png";
import Laptop7Image from "../Gamingimages/laptop7.png";
import BannerImage from "../Gamingimages/banner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTh,
  faList,
  faCartPlus,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const laptopsData = [
  {
    id: 1,
    name: "Nitro V ANV15-51-519K OPI Obsidian Black",
    price: 46549,
    specs:
      "Intel® Core™ i5-13420H, 8GB RAM, 512G SSD, NVIDIA® GeForce RTX™ 2050, 15.6 display with IPS, Windows 11 Home",
    image: Laptop1Image,
  },
  {
    id: 2,
    name: "Nitro V ANV15-51-53DG OPI Obsidian Black",
    price: 56999,
    specs:
      "Intel® Core™ i5-13420H, 8GB RAM, 512G SSD, NVIDIA® GeForce RTX™ 4050, 15.6 display with IPS, Windows 11 Home",
    image: Laptop2Image,
  },
  {
    id: 3,
    name: "Nitro 5 AN515-45-R5RJ",
    price: 90000,
    specs:
      "AMD RyzenTM 9 5900HX, 16GB DDR4, 512GB NVMe SSD, NVIDIA GeForce RTXTM 3070, 15.6 FHD 1920x1080, Windows 11 Home",
    image: Laptop3Image,
  },
  {
    id: 4,
    name: "Predator Helios Neo PHN16-71-59F1 OPI",
    price: 73149,
    specs:
      "Intel® Core i5-13500HX, 8GB of DDR5 upgradable to 32 GB, 512GB SSD, NVIDIA® GeForce RTX™ 4050 with 6GB of dedicated GDDR6 VRAM, 16.0 display with IPS , Full HD 1920 x1080, Windows 11 Home ",
    image: Laptop4Image,
  },
  {
    id: 5,
    name: "Predator Helios 300 PH16-71-95L8",
    price: 118749,
    specs:
      "Intel® Core™ i9-13900HX, 16GB of DDR5, 1TB NVMe, NVIDIA® GeForce RTX™ 4070, 16.0 display with IPS technology, Windows 11 Home",
    image: Laptop5Image,
  },
  {
    id: 6,
    name: "Predator Helios 300 PH315-54-55NE ",
    price: 83599,
    specs:
      "Intel Core i5 - 11400H, 16GB LPDDR4, 512GB SSD, 15.6 QHD & NVIDIA GeForce RTX TM 3060, Windows 10 Home",
    image: Laptop6Image,
  },
  {
    id: 7,
    name: "Predator Triton 500 PT515-52-74VQ",
    price: 161499,
    specs:
      "Intel Core i7- 10875H, 32GB LPDDR4, 1TB SSD, 15.6 FHD & NVIDIA® GeForce® RTX 2070, Windows 10 Home",
    image: Laptop7Image,
  },
  // Other laptop data...
];

const GamingLaptops = () => {
  const [cartItems, setCartItems] = useState([]);
  const [filteredLaptops, setFilteredLaptops] = useState([]);
  const [specsFilter, setSpecsFilter] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // Default view mode is grid

  useEffect(() => {
    let filtered = laptopsData;

    // Filter by specs
    if (specsFilter) {
      filtered = filtered.filter((laptop) =>
        laptop.specs.toLowerCase().includes(specsFilter.toLowerCase())
      );
    }

    // Sort by price
    if (sortBy === "priceLowToHigh") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "priceHighToLow") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredLaptops(filtered);
  }, [specsFilter, sortBy]);

  const addToCart = (laptop) => {
    setCartItems([...cartItems, laptop]);
  };

  const toggleViewMode = (mode) => {
    setViewMode(mode);
  };

  return (
    <div className="app-container">
      {/* Banner */}
      <div className="banner">
        <img src={BannerImage} alt="Banner" className="banner-image" />
        <div className="banner-content">
          <h1 className="banner-heading">
            Check out our latest gaming laptops!
          </h1>
          <p className="banner-text">
            Upgrade your gaming experience with our high-performance laptops.
          </p>
        </div>
      </div>

      {/* Sidebar */}
      <div className="sidebar">
        {/* Filters */}
        <div className="filters-and-sort">
          <div className="filters">
            <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
              <option value="">Sort by</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
            </select>
          </div>
          {/* Dropdown for filtering by specs */}
          <div className="specs-dropdown">
            <select
              onChange={(e) => setSpecsFilter(e.target.value)}
              value={specsFilter}
            >
              <option value="">Filter by Specs</option>
              <option value="Intel">Intel</option>
              <option value="AMD">AMD</option>
              <option value="NVIDIA">NVIDIA</option>
              {/* Add more options as needed */}
            </select>
          </div>
          {/* View mode toggle */}
          <div className="view-mode-toggle">
            {/* Clickable icons for switching between grid and list views */}
            <div onClick={() => toggleViewMode("grid")}>
              <FontAwesomeIcon icon={faTh} /> Grid View
            </div>
            <div onClick={() => toggleViewMode("list")}>
              <FontAwesomeIcon icon={faList} /> List View
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="main-content">
        {/* Laptops */}
        <div className={`laptop-container ${viewMode}`}>
          {filteredLaptops.map((laptop) => (
            <div key={laptop.id} className="laptop-card">
              <img
                src={laptop.image}
                alt={laptop.name}
                className="laptop-image"
              />
              <div className="laptop-details">
                <h2 className="laptop-name">{laptop.name}</h2>
                <p className="laptop-price">Price: Php{laptop.price}</p>
                <p className="laptop-specs">Specs: {laptop.specs}</p>
                <div className="button-container">
                  <button
                    className="cart-button"
                    onClick={() => addToCart(laptop)}
                  >
                    <FontAwesomeIcon icon={faCartPlus} /> Add to Cart
                  </button>
                  <button className="wishlist-button">
                    <FontAwesomeIcon icon={faHeart} /> Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamingLaptops;
