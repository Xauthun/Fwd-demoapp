import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">TravelApp</a>
        </div>
        <div className="navbar-login">
          <a href="/login">Login</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
