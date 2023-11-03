import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
      </ul>
    </div>
  );
};

export default Navbar;
