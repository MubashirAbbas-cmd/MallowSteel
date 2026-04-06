import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="image-section">
          <img src="/jewelry-image.jpg" alt="Jewelry" className="hero-image" />
        </div>
        <div className="text-section">
          <h1 className="brand-name">Mallow Steel</h1>
          <p className="tagline">ELEGANCE</p>
          <button className="shop-button" onClick={() => navigate('/shop')}>SHOP NOW</button>
        </div>
      </div>
      <div className="logo-circle">
        <span>M</span>
      </div>
    </div>
  );
};

export default HeroSection;