import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu open/closed
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <button className="hamburger" onClick={toggleMenu}>
        <div className={`line ${menuOpen ? "open" : ""}`}></div>
        <div className={`line ${menuOpen ? "open" : ""}`}></div>
        <div className={`line ${menuOpen ? "open" : ""}`}></div>
      </button>
      <ul className={`menu ${menuOpen ? "open" : ""}`}>
        <li className="menu-item">Home</li>
        <li className="menu-item">About</li>
        <li className="menu-item">Categories</li>
        <li className="menu-item">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
