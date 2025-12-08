import React from 'react';
import '../styles/navbar.css';
import LogoImg from '../assets/logo.png';

const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        {/* Logo */}
        <div className="navbar__logo">
          <img src={LogoImg} alt="Selecta logo" />
        </div>

        {/* Links */}
        <nav className="navbar__links">
          <a href="#home" className="navbar__link navbar__link--active">
            Home
          </a>
          <a href="#products" className="navbar__link">
            Products
          </a>
          <a href="#about" className="navbar__link">
            About Us
          </a>
          <a href="#services" className="navbar__link">
            Services
          </a>
        </nav>

        {/* Right side: moon + button */}
        <div className="navbar__right">
          <button className="navbar__icon-btn" aria-label="Toggle theme">
            ☾
          </button>
          <button className="navbar__cta">Contact Us</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;