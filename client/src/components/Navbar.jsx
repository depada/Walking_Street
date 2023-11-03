import React, { useState, useEffect } from "react";
// import logo from "../assets/logo.jpg";
import logoTransparent from "../assets/logo_white.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  // Function to toggle the menu open/closed
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function for smooth scrolling when an anchor element is clicked
  const handleAnchorClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{ opacity: 1 }}
      className={`navbar ${visible ? "visible" : "hidden"}`}
    >
      <button className="hamburger" onClick={toggleMenu}>
        <div className={`line ${menuOpen ? "open" : ""}`}></div>
        <div className={`line ${menuOpen ? "open" : ""}`}></div>
        <div className={`line ${menuOpen ? "open" : ""}`}></div>
      </button>
      <ul className={`menu ${menuOpen ? "open" : ""}`}>
        <div className="logo-container">
          <img src={logoTransparent} alt="logo" />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <li className="menu-item">
            <a
              href="#hero-container"
              onClick={(e) => handleAnchorClick(e, "hero-container")}
            >
              Home
            </a>
          </li>
          <li className="menu-item">
            <a href="#about" onClick={(e) => handleAnchorClick(e, "about")}>
              About
            </a>
          </li>
          <li className="menu-item">
            <a href="#booking" onClick={(e) => handleAnchorClick(e, "booking")}>
              Booking
            </a>
          </li>
          <li className="menu-item">
            <a href="#contact" onClick={(e) => handleAnchorClick(e, "contact")}>
              Contact
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
