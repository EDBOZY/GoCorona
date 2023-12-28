import React from 'react';
import './Navbar.css'; // Import your CSS file for styling
import a from './logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Your logo goes here */}
        <img src={a} alt="Logo" />
      </div>
      <div className="navbar-links">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#support">Support</a></li>
          <li><a href="#contact" >Contact Us</a></li>
        </ul>
      </div>
      <div className="navbar-download" style={{background:"#EC5863"}} >
        <button>Download</button>
      </div>
    </nav>
  );
};

export default Navbar;
