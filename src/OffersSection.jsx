import React from 'react';
import './OffersSection.css';

const OffersSection = () => {
  return (
    <section className="offers-section">
      <div className="offers-container">
        <h2 className="offers-title">What We Offer</h2>
        
        <div className="offers-grid">
          <div className="offer-card">
            <div className="offer-image">
              <img src="/offer-earrings.jpg" alt="Earrings" />
            </div>
            <h3 className="offer-heading">earings</h3>
            <p className="offer-description">
              SILVER, GOLD, GEMS.<br />
              WE PROVIDE A VARIETY OF OPTIONS.
            </p>
          </div>

          <div className="offer-card">
            <div className="offer-image">
              <img src="/offer-necklaces.jpg" alt="Necklaces" />
            </div>
            <h3 className="offer-heading">Neclaces</h3>
            <p className="offer-description">
              WE CREATE DESIGNS THAT MATCH YOUR PERSONALITY.
            </p>
          </div>

          <div className="offer-card">
            <div className="offer-image">
              <img src="/offer-bracelets.jpg" alt="Bracelets" />
            </div>
            <h3 className="offer-heading">Bracelete</h3>
            <p className="offer-description">
              WE GIVE YOU REGULAR UPDATES ABOUT YOUR JEWELRY.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;