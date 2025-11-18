import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import OffersSection from './OffersSection';
import AboutSection from './AboutSection';
import ReviewsSection from './ReviewsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <OffersSection />
      <AboutSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;