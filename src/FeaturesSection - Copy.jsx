import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="features-content">
        <div className="features-text">
          <h2 className="features-title">Made for You</h2>
          <p className="features-description">
            LET YOUR PERSONALITY SHINE WITH HANDCRAFTED PIECES MADE JUST FOR YOU.
          </p>
        </div>
        <div className="features-images">
          <div className="feature-image-1">
            <img src="/feature-image-1.jpg" alt="Handcrafted Jewelry" />
          </div>
          <div className="feature-image-2">
            <img src="/feature-image-2.jpg" alt="Custom Pieces" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;