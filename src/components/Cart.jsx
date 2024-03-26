import React, { useState } from "react";
import GamingLaptops from "./GamingLaptops";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (laptop) => {
    setCartItems([...cartItems, laptop]);
  };

  return (
    <div>
      <GamingLaptops addToCart={addToCart} />{" "}
      {/* Pass addToCart function as a prop */}
      {/* Other components or content */}
    </div>
  );
};

export default Cart;
