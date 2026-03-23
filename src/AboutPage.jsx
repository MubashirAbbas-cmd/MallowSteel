import React from 'react';
import './AboutPage.css';
import Header from './Header';
import Footer from './Footer';

const AboutPage = () => {
  return (
    <div className="about-page">
      <Header />

      {/* Hero Section */}
      <div className="ab-hero">
        <div className="ab-hero-content">
          <p className="ab-hero-sub">Our Story</p>
          <h1 className="ab-hero-title">Mallow Steel<br />Elegance</h1>
          <div className="ab-hero-line"></div>
          <p className="ab-hero-desc">
            Crafting timeless pieces that tell a story of strength, elegance, and enduring beauty.
          </p>
        </div>
        <div className="ab-hero-overlay"></div>
      </div>

      {/* Mission Section */}
      <div className="ab-mission">
        <div className="ab-mission-inner">
          <div className="ab-mission-text">
            <p className="ab-section-sub">Who We Are</p>
            <h2 className="ab-section-title">More Than Just Jewelry</h2>
            <div className="ab-gold-line"></div>
            <p className="ab-mission-desc">
              At Mallow Steel Elegance, we craft more than just jewelry — we create pieces of art
              that tell a story of strength, elegance, and timeless beauty. Our stainless steel
              collections are designed to be worn, loved, and passed down through generations.
            </p>
            <p className="ab-mission-desc">
              With every piece, we aim to unsteel your style and reveal the elegance within.
              Explore our collections and discover the perfect blend of modern design and
              enduring sophistication.
            </p>
          </div>
          <div className="ab-mission-image">
            <div className="ab-image-frame">
              <img src="/jewelry-image.jpg" alt="Mallow Steel Jewelry" />
              <div className="ab-image-badge">
                <span className="ab-badge-num">100%</span>
                <span className="ab-badge-text">Stainless Steel</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="ab-stats">
        <div className="ab-stats-inner">
          <div className="ab-stat-item">
            <span className="ab-stat-num">500+</span>
            <span className="ab-stat-label">Unique Designs</span>
          </div>
          <div className="ab-stat-divider"></div>
          <div className="ab-stat-item">
            <span className="ab-stat-num">10K+</span>
            <span className="ab-stat-label">Happy Customers</span>
          </div>
          <div className="ab-stat-divider"></div>
          <div className="ab-stat-item">
            <span className="ab-stat-num">5+</span>
            <span className="ab-stat-label">Years Experience</span>
          </div>
          <div className="ab-stat-divider"></div>
          <div className="ab-stat-item">
            <span className="ab-stat-num">100%</span>
            <span className="ab-stat-label">Handcrafted</span>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="ab-values">
        <div className="ab-values-inner">
          <p className="ab-section-sub">What Drives Us</p>
          <h2 className="ab-section-title">Our Core Values</h2>
          <div className="ab-gold-line" style={{margin: '0 auto 60px'}}></div>

          <div className="ab-values-grid">
            <div className="ab-value-card">
              <div className="ab-value-icon">💎</div>
              <h3 className="ab-value-title">Quality First</h3>
              <p className="ab-value-desc">Every piece is crafted with premium stainless steel, ensuring durability and lasting shine for years to come.</p>
            </div>
            <div className="ab-value-card">
              <div className="ab-value-icon">✨</div>
              <h3 className="ab-value-title">Timeless Design</h3>
              <p className="ab-value-desc">Our designs blend modern aesthetics with classic elegance, creating pieces that never go out of style.</p>
            </div>
            <div className="ab-value-card">
              <div className="ab-value-icon">🤝</div>
              <h3 className="ab-value-title">Customer Love</h3>
              <p className="ab-value-desc">We build lasting relationships with our customers by delivering exceptional service and unforgettable experiences.</p>
            </div>
            <div className="ab-value-card">
              <div className="ab-value-icon">🌿</div>
              <h3 className="ab-value-title">Ethical Crafting</h3>
              <p className="ab-value-desc">We are committed to responsible sourcing and sustainable practices in every step of our creation process.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="ab-team">
        <div className="ab-team-inner">
          <p className="ab-section-sub">The People Behind</p>
          <h2 className="ab-section-title">Meet Our Team</h2>
          <div className="ab-gold-line" style={{margin: '0 auto 60px'}}></div>

          <div className="ab-team-grid">
            <div className="ab-team-card">
              <div className="ab-team-avatar">M</div>
              <h3 className="ab-team-name">Mubashir Abbas</h3>
              <p className="ab-team-role">Founder & CEO</p>
              <p className="ab-team-desc">Visionary behind Mallow Steel, passionate about bringing elegance to everyday life.</p>
            </div>
            <div className="ab-team-card">
              <div className="ab-team-avatar">A</div>
              <h3 className="ab-team-name">Aisha Khan</h3>
              <p className="ab-team-role">Head of Design</p>
              <p className="ab-team-desc">Creative mind crafting each unique piece with precision, passion, and artistic flair.</p>
            </div>
            <div className="ab-team-card">
              <div className="ab-team-avatar">S</div>
              <h3 className="ab-team-name">Sara Ahmed</h3>
              <p className="ab-team-role">Customer Relations</p>
              <p className="ab-team-desc">Dedicated to ensuring every customer feels valued and leaves with a smile.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="ab-cta">
        <div className="ab-cta-inner">
          <h2 className="ab-cta-title">Ready to Find Your Perfect Piece?</h2>
          <p className="ab-cta-desc">Explore our collection and discover jewelry that speaks to your soul.</p>
          <div className="ab-cta-buttons">
            <a href="/shop" className="ab-cta-btn-primary">Shop Now</a>
            <a href="/contact" className="ab-cta-btn-secondary">Contact Us</a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;