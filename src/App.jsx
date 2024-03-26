import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import Home from "./views/Home";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import "./App.css";
import Contactus from "./views/Contactus";
import Desktop from "./views/Desktop";
import GamingLaptops from "./components/GamingLaptops";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
            exact={route.exact}
          />
        ))}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contactus" element={<Contactus />} />

        <Route path="/desktop" element={<Desktop />} />
        <Route path="/gaminglaptops" element={<GamingLaptops />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
