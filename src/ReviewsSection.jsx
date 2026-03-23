import React from 'react';
import './ReviewsSection.css';

const ReviewsSection = () => {
  return (
    <section className="reviews-section">
      <div className="reviews-container">
        <h2 className="reviews-title">Client Reviews</h2>
        
        <div className="reviews-grid">
          <div className="review-card">
            <div className="review-image-wrapper">
              <img src="/review-1.jpg" alt="Mishie Elvina" className="review-image" />
            </div>
            <div className="review-content">
              <h3 className="review-name">Mishie Elvina</h3>
              <p className="review-text">
                TESTIMONIALS ARE SHORT QUOTES FROM PEOPLE WHO LOVE YOUR BRAND. 
                IT'S A GREAT WAY TO CONVINCE CUSTOMERS TO TRY YOUR SERVICES.
              </p>
            </div>
          </div>

          <div className="review-card">
            <div className="review-image-wrapper">
              <img src="/review-2.jpg" alt="Nicholas Bentley" className="review-image" />
            </div>
            <div className="review-content">
              <h3 className="review-name">Nicholas Bentley</h3>
              <p className="review-text">
                TESTIMONIALS ARE SHORT QUOTES FROM PEOPLE WHO LOVE YOUR BRAND. 
                IT'S A GREAT WAY TO CONVINCE CUSTOMERS TO TRY YOUR SERVICES.
              </p>
            </div>
          </div>

          <div className="review-card">
            <div className="review-image-wrapper">
              <img src="/review-3.jpg" alt="Alyanna Silvestre" className="review-image" />
            </div>
            <div className="review-content">
              <h3 className="review-name">Alyanna Silvestre</h3>
              <p className="review-text">
                TESTIMONIALS ARE SHORT QUOTES FROM PEOPLE WHO LOVE YOUR BRAND. 
                IT'S A GREAT WAY TO CONVINCE CUSTOMERS TO TRY YOUR SERVICES.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;