import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Your Logo</div>
      <button className="menu-button" onClick={toggleMenu}>
        Menu
      </button>
      <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li className="dropdown">
          <a href="/services">Services</a>
          <div className="dropdown-content">
            <a href="/service1">Service 1</a>
            <a href="/service2">Service 2</a>
          </div>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;