import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFileImage,
} from "react-icons/fa";
import "./Contactus.css";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setFormData({ ...formData, image: imageFile });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    setFormData({ name: "", email: "", message: "", image: null });
  };

  return (
    <div className="contact-form-container">
      <h1>Contact Support</h1>
      <div className="contact-info">
        <p>You can contact us via the following methods:</p>
        <ul>
          <li>
            <FaEnvelope /> Email: bogsangitelvis@gmail.com
          </li>
          <li>
            <FaPhone /> Phone: 09555261873
          </li>
          <li>
            <FaMapMarkerAlt /> Address: Pagadian City, Zamboanga Del Sur,
            Philippines
          </li>
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            <FaEnvelope /> Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">
            <FaEnvelope /> Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">
            <FaEnvelope /> Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="image">
            <FaFileImage /> Upload Image:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contactus;
