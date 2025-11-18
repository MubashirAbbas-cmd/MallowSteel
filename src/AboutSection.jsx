import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-overlay">
        <div className="about-content">
          <h2 className="about-title">Mallow Steel Elegance</h2>
          <div className="about-text-box">
            <p className="about-description">
              At Mallow Steel Elegance, we craft more than just jewelry: 
              We create pieces of art that tell a story of strength, elegance, 
              and timeless beauty. Our stainless steel collections are designed 
              to be worn, loved, and passed down. With every piece, we aim to 
              unsteel your style and reveal the elegance within. Explore our 
              collections and discover the perfect blend of modern design and 
              enduring sophistication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;