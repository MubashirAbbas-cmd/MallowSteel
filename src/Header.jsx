import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import './Header.css';

const Header = () => {
  const { cartCount, setCartOpen } = useCart();
  const navigate = useNavigate();

  const goToCategory = (category) => {
    navigate(`/shop?category=${category}`);
  };

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
              <button onClick={() => goToCategory('rings')}>Rings</button>
              <button onClick={() => goToCategory('necklaces')}>Necklaces</button>
              <button onClick={() => goToCategory('bracelets')}>Bracelets</button>
              <button onClick={() => goToCategory('earrings')}>Earrings</button>
            </div>
          </div>
          <Link to="/about" className="nav-link">ABOUT US</Link>
          <Link to="/contact" className="nav-link">CONTACT</Link>
        </nav>

        <div className="header-icons">
          <button className="icon-btn">🔍</button>
          <button className="icon-btn cart-btn" onClick={() => {
            navigate('/shop');
            setTimeout(() => setCartOpen(true), 100);
          }}>
            🛒
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </button>
          <button className="icon-btn">👤</button>
        </div>
      </div>
    </header>
  );
};

export default Header;