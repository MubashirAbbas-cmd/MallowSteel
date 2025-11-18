import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="contact-title">Work with Us</h2>
          
          <div className="contact-details">
            <div className="contact-item">
              <h3 className="contact-label">Mailing Address</h3>
              <p className="contact-value">123 ANYWHERE ST., ANY CITY, STATE, COUNTRY 12345</p>
            </div>

            <div className="contact-item">
              <h3 className="contact-label">Email Address</h3>
              <p className="contact-value">HELLO@REALLYGREATSITE.COM</p>
            </div>

            <div className="contact-item">
              <h3 className="contact-label">Phone Number</h3>
              <p className="contact-value">(123) 456 7890</p>
            </div>
          </div>
        </div>

        <div className="contact-image">
          <img src="/contact-image.jpg" alt="Contact Us" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;