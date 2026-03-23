import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import ShopPage from './ShopPage';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="contact" element={<ContactSection />} />
      </Routes>
    </Router>
  );
}

export default App;