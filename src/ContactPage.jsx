import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactPage.css';
import Header from './Header';
import Footer from './Footer';

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState('inquiry');
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', message: '', subject: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs.send(
      'service_2mawi8g',
      'template_f59vbdi',
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        inquiry_type: activeTab,
        message: formData.message,
      },
      'aSuV-yvXQluYxsovG'
    ).then(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '', subject: '' });
      setTimeout(() => setStatus(''), 5000);
    }).catch(() => {
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    });
  };

  const openWhatsApp = () => {
    const text = `Hi! I am ${formData.name || 'a customer'} and I want to ${activeTab}. ${formData.message || ''}`;
    window.open(`https://wa.me/923001234567?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="contact-page">
      <Header />

      <div className="cp-hero">
        <div className="cp-hero-text">
          <p className="cp-hero-sub">Get In Touch</p>
          <h1 className="cp-hero-title">Contact Us</h1>
          <div className="cp-hero-line"></div>
        </div>
      </div>

      <div className="cp-tabs">
        <button className={`cp-tab ${activeTab === 'inquiry' ? 'active' : ''}`} onClick={() => setActiveTab('inquiry')}>General Inquiry</button>
        <button className={`cp-tab ${activeTab === 'custom order' ? 'active' : ''}`} onClick={() => setActiveTab('custom order')}>Custom Order</button>
        <button className={`cp-tab ${activeTab === 'appointment' ? 'active' : ''}`} onClick={() => setActiveTab('appointment')}>Book Appointment</button>
        <button className={`cp-tab ${activeTab === 'track order' ? 'active' : ''}`} onClick={() => setActiveTab('track order')}>Track Order</button>
      </div>

      <div className="cp-main">
        <div className="cp-info">
          <h2 className="cp-info-title">Work with Us</h2>
          <p className="cp-info-desc">
            We'd love to hear from you. Whether you have a question about our collections,
            custom orders, or anything else — our team is ready to answer.
          </p>
          <div className="cp-info-items">
            <div className="cp-info-item">
              <div className="cp-info-icon">📍</div>
              <div>
                <h3 className="cp-info-label">Mailing Address</h3>
                <p className="cp-info-value">123 Anywhere St., Any City, Pakistan</p>
              </div>
            </div>
            <div className="cp-info-item">
              <div className="cp-info-icon">✉️</div>
              <div>
                <h3 className="cp-info-label">Email Address</h3>
                <p className="cp-info-value">hello@mallowsteel.com</p>
              </div>
            </div>
            <div className="cp-info-item">
              <div className="cp-info-icon">📞</div>
              <div>
                <h3 className="cp-info-label">Phone Number</h3>
                <p className="cp-info-value">+92 (123) 456 7890</p>
              </div>
            </div>
            <div className="cp-info-item">
              <div className="cp-info-icon">🕐</div>
              <div>
                <h3 className="cp-info-label">Working Hours</h3>
                <p className="cp-info-value">Mon – Sat: 10am – 7pm</p>
              </div>
            </div>
          </div>

          <button className="cp-whatsapp" onClick={openWhatsApp}>
            💬 Chat on WhatsApp
          </button>

          <div className="cp-social">
            <a href="#instagram" className="cp-social-link">Instagram</a>
            <a href="#facebook" className="cp-social-link">Facebook</a>
            <a href="#twitter" className="cp-social-link">Twitter</a>
          </div>
        </div>

        <div className="cp-form-wrap">
          <h2 className="cp-form-title">
            {activeTab === 'inquiry' && 'Send a Message'}
            {activeTab === 'custom order' && 'Place a Custom Order'}
            {activeTab === 'appointment' && 'Book an Appointment'}
            {activeTab === 'track order' && 'Track Your Order'}
          </h2>

          {status === 'success' && <div className="cp-success">✓ Message sent! We will contact you soon.</div>}
          {status === 'error' && <div className="cp-error">✗ Something went wrong. Please try again.</div>}
          {status === 'sending' && <div className="cp-sending">⏳ Sending your message...</div>}

          <form className="cp-form" onSubmit={handleSubmit}>
            <div className="cp-form-row">
              <div className="cp-field">
                <label className="cp-label">Full Name</label>
                <input className="cp-input" type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="cp-field">
                <label className="cp-label">Email Address</label>
                <input className="cp-input" type="email" name="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
              </div>
            </div>

            <div className="cp-field">
              <label className="cp-label">Phone Number</label>
              <input className="cp-input" type="tel" name="phone" placeholder="+92 300 1234567" value={formData.phone} onChange={handleChange} required />
            </div>

            {activeTab === 'track order' && (
              <div className="cp-field">
                <label className="cp-label">Order ID</label>
                <input className="cp-input" type="text" name="subject" placeholder="Enter your Order ID" value={formData.subject} onChange={handleChange} required />
              </div>
            )}

            {activeTab === 'appointment' && (
              <div className="cp-field">
                <label className="cp-label">Preferred Date & Time</label>
                <input className="cp-input" type="datetime-local" name="subject" value={formData.subject} onChange={handleChange} required />
              </div>
            )}

            <div className="cp-field">
              <label className="cp-label">Message</label>
              <textarea className="cp-input cp-textarea" name="message" placeholder={
                activeTab === 'custom order' ? 'Describe your custom order in detail...' :
                activeTab === 'appointment' ? 'What would you like to discuss?' :
                activeTab === 'track order' ? 'Any additional info about your order...' :
                'Write your message here...'
              } rows={5} value={formData.message} onChange={handleChange} required />
            </div>

            <button className="cp-submit" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      <div className="cp-map">
        <div className="cp-map-inner">
          <p className="cp-map-text">📍 Visit Us in Pakistan</p>
          <p className="cp-map-sub">123 Anywhere St., Any City, Pakistan</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;