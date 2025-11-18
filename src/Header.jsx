import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <div className="logo-circle">
            <svg className="logo-svg" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="#3a5a5a" stroke="#d4af37" strokeWidth="2"/>
              <text x="50" y="70" fontSize="48" fill="#e8d5c4" fontFamily="Playfair Display" textAnchor="middle">M</text>
            </svg>
          </div>
          <span className="logo-text">Elegant Steel</span>
        </Link>

        <nav className="nav">
          <Link to="/" className="nav-link">HOME</Link>
          <Link to="/shop" className="nav-link">SHOP</Link>
          <div className="nav-dropdown">
            <span className="nav-link">
              CATEGORIES <span className="dropdown-arrow">▼</span>
            </span>
            <div className="dropdown-menu">
              <Link to="/shop">Rings</Link>
              <Link to="/shop">Necklaces</Link>
              <Link to="/shop">Bracelets</Link>
              <Link to="/shop">Earrings</Link>
            </div>
          </div>
          <Link to="/about" className="nav-link">ABOUT US</Link>
          <Link to="/contact" className="nav-link">CONTACT</Link>
        </nav>

        <div className="header-icons">
          <button className="icon-btn">🔍</button>
          <button className="icon-btn">🛒</button>
          <button className="icon-btn">👤</button>
        </div>
      </div>
    </header>
  );
};

export default Header;