import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-column">
            <h3 className="footer-heading">SUPPORT</h3>
            <ul className="footer-links">
              <li><a href="#track">Track Your Order</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#appointment">Book an Appointment</a></li>
              <li><a href="#faq">Frequently Asked Questions</a></li>
              <li><a href="#shipping">Shipping & Return Policy</a></li>
              <li><a href="#stores">Store Information</a></li>
              <li><a href="#gift-card">Gift Card</a></li>
              <li><a href="#gift-guide">Jewelry Gift Guide</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">SERVICES</h3>
            <ul className="footer-links">
              <li><a href="#repair">Request Repair</a></li>
              <li><a href="#personalization">Personalization</a></li>
              <li><a href="#custom">Custom Orders</a></li>
              <li><a href="#engraving">Engraving Services</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">ABOUT</h3>
            <ul className="footer-links">
              <li><a href="#sustainability">Our Story</a></li>
              <li><a href="#foundation">Craftsmanship</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#press">Press</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">LEGAL</h3>
            <ul className="footer-links">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#accessibility">Accessibility Statement</a></li>
              <li><a href="#transparency">Transparency in Coverage</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span className="footer-location">Pakistan</span>
            <span className="footer-copyright">© Mallow Steel 2025</span>
          </div>

          <div className="footer-logo">
            <div className="footer-logo-circle">
              <svg viewBox="0 0 200 200" className="footer-logo-svg">
                <circle cx="100" cy="100" r="95" fill="black" stroke="#d4af37" strokeWidth="5"/>
                <text x="100" y="85" textAnchor="middle" fill="white" fontSize="60" fontFamily="Arial, sans-serif" fontWeight="300">
                  <tspan>M</tspan>
                </text>
                <text x="100" y="115" textAnchor="middle" fill="white" fontSize="18" fontFamily="Arial, sans-serif" fontWeight="300" letterSpacing="2">
                  MALLOW
                </text>
                <text x="100" y="135" textAnchor="middle" fill="#d4af37" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="300" letterSpacing="3">
                  STEEL ELEGANCE
                </text>
              </svg>
            </div>
          </div>

          <div className="footer-social">
            <a href="#instagram" className="footer-social-link">Instagram</a>
            <a href="#twitter" className="footer-social-link">Twitter</a>
            <a href="#facebook" className="footer-social-link">Facebook</a>
            <a href="#youtube" className="footer-social-link">YouTube</a>
            <a href="#pinterest" className="footer-social-link">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;