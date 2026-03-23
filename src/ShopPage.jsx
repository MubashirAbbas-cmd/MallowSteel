import React, { useState } from 'react';
import './ShopPage.css';
import Header from './Header';
import Footer from './Footer';

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  // Product data - you can move this to a separate file later
  const products = [
    {
      id: 1,
      name: 'Gold Bracelet',
      category: 'bracelets',
      price: 299,
      image: '/offer-bracelets.jpg',
      featured: true,
      new: true
    },
    {
      id: 2,
      name: 'Diamond Earrings',
      category: 'earrings',
      price: 499,
      image: '/offer-earrings.jpg',
      featured: true,
      new: false
    },
    {
      id: 3,
      name: 'Pearl Necklace',
      category: 'necklaces',
      price: 399,
      image: '/offer-necklaces.jpg',
      featured: false,
      new: true
    },
    {
      id: 4,
      name: 'Silver Ring Set',
      category: 'rings',
      price: 199,
      image: '/feature-image-1.jpg',
      featured: true,
      new: false
    },
    {
      id: 5,
      name: 'Custom Gold Ring',
      category: 'rings',
      price: 349,
      image: '/feature-image-2.jpg',
      featured: false,
      new: true
    },
    {
      id: 6,
      name: 'Luxury Bracelet',
      category: 'bracelets',
      price: 599,
      image: '/jewelry-image.jpg',
      featured: true,
      new: false
    }
  ];

  // Filter products
  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    return categoryMatch && priceMatch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'featured':
      default:
        return b.featured - a.featured;
    }
  });

  return (
    <div className="shop-page">
      <Header />
      
      {/* Hero Banner */}
      <section className="shop-hero">
        <div className="shop-hero-content">
          <h1 className="shop-hero-title">Our Collection</h1>
          <p className="shop-hero-subtitle">Discover Handcrafted Elegance</p>
        </div>
      </section>

      {/* Shop Content */}
      <div className="shop-container">
        {/* Sidebar Filters */}
        <aside className="shop-sidebar">
          <div className="filter-section">
            <h3 className="filter-title">Categories</h3>
            <div className="filter-options">
              <button 
                className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('all')}
              >
                All Products
              </button>
              <button 
                className={`filter-btn ${selectedCategory === 'rings' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('rings')}
              >
                Rings
              </button>
              <button 
                className={`filter-btn ${selectedCategory === 'necklaces' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('necklaces')}
              >
                Necklaces
              </button>
              <button 
                className={`filter-btn ${selectedCategory === 'bracelets' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('bracelets')}
              >
                Bracelets
              </button>
              <button 
                className={`filter-btn ${selectedCategory === 'earrings' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('earrings')}
              >
                Earrings
              </button>
            </div>
          </div>

          <div className="filter-section">
            <h3 className="filter-title">Price Range</h3>
            <div className="price-range">
              <input 
                type="range" 
                min="0" 
                max="1000" 
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                className="price-slider"
              />
              <div className="price-labels">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <main className="shop-main">
          {/* Toolbar */}
          <div className="shop-toolbar">
            <p className="product-count">{sortedProducts.length} Products</p>
            <div className="sort-select-wrapper">
              <select 
                className="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A-Z</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {sortedProducts.map(product => (
              <div key={product.id} className="product-card">
                {product.new && <span className="product-badge new">New</span>}
                {product.featured && <span className="product-badge featured">Featured</span>}
                
                <div className="product-image-wrapper">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className="product-overlay">
                    <button className="quick-view-btn">Quick View</button>
                    <button className="add-to-cart-btn">Add to Cart</button>
                  </div>
                </div>
                
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-category">{product.category}</p>
                  <p className="product-price">${product.price}</p>
                </div>
              </div>
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="no-products">
              <p>No products found matching your criteria.</p>
            </div>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default ShopPage;