import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './CheckoutPage.css';
import Header from './Header';
import Footer from './Footer';

const stripePromise = loadStripe('pk_test_51TEVDJ2NjEthwAueNl1NDo16SS1Dr1townzKlDvO9362T1pxXULrkU6532ZomvBOX5GxTtfBqj9o579UscborjBX00mdXltKPN');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '', email: '', address: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('processing');

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);

    if (result.error) {
      setStatus('error');
    } else {
      setStatus('success');
    }
  };

  return (
    <form className="ck-form" onSubmit={handleSubmit}>

      {status === 'success' && (
        <div className="ck-success">✓ Payment Successful! Thank you for your order.</div>
      )}
      {status === 'error' && (
        <div className="ck-error">✗ Payment failed. Please check your card details.</div>
      )}
      {status === 'processing' && (
        <div className="ck-processing">⏳ Processing your payment...</div>
      )}

      <div className="ck-section-title">Contact Information</div>

      <div className="ck-field">
        <label className="ck-label">Full Name</label>
        <input className="ck-input" type="text" name="name" placeholder="Your full name" value={formData.name} onChange={handleChange} required />
      </div>

      <div className="ck-field">
        <label className="ck-label">Email Address</label>
        <input className="ck-input" type="email" name="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
      </div>

      <div className="ck-field">
        <label className="ck-label">Delivery Address</label>
        <input className="ck-input" type="text" name="address" placeholder="Your full address" value={formData.address} onChange={handleChange} required />
      </div>

      <div className="ck-section-title">Payment Details</div>

      <div className="ck-field">
        <label className="ck-label">Card Information</label>
        <div className="ck-card-element">
          <CardElement options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#2a2a2a',
                fontFamily: 'Montserrat, sans-serif',
                '::placeholder': { color: '#aaa' }
              }
            }
          }} />
        </div>
      </div>

      <div className="ck-test-info">
        🧪 Test Mode — Use card: <strong>4242 4242 4242 4242</strong> | Any future date | Any CVC
      </div>

      <button className="ck-submit" type="submit" disabled={!stripe || status === 'processing'}>
        {status === 'processing' ? 'Processing...' : 'Pay Now'}
      </button>

    </form>
  );
};

const CheckoutPage = () => {
  return (
    <div className="checkout-page">
      <Header />

      <div className="ck-hero">
        <div className="ck-hero-text">
          <p className="ck-hero-sub">Secure Payment</p>
          <h1 className="ck-hero-title">Checkout</h1>
          <div className="ck-hero-line"></div>
        </div>
      </div>

      <div className="ck-main">

        {/* Order Summary */}
        <div className="ck-summary">
          <h2 className="ck-summary-title">Order Summary</h2>
          <div className="ck-summary-items">
            <div className="ck-item">
              <span className="ck-item-name">Steel Bracelet</span>
              <span className="ck-item-price">PKR 1,500</span>
            </div>
            <div className="ck-item">
              <span className="ck-item-name">Gold Necklace</span>
              <span className="ck-item-price">PKR 2,500</span>
            </div>
            <div className="ck-item">
              <span className="ck-item-name">Silver Earrings</span>
              <span className="ck-item-price">PKR 1,200</span>
            </div>
          </div>
          <div className="ck-divider"></div>
          <div className="ck-item ck-total">
            <span className="ck-item-name">Total</span>
            <span className="ck-item-price">PKR 5,200</span>
          </div>
          <div className="ck-secure">
            🔒 Secured by Stripe
          </div>
        </div>

        {/* Payment Form */}
        <div className="ck-form-wrap">
          <h2 className="ck-form-title">Payment Information</h2>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default CheckoutPage;