import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import './ShopPage.css';
import Header from './Header';
import Footer from './Footer';

const ShopPage = () => {
  const navigate = useNavigate();
  const { cart, addToCart, removeFromCart, updateQty, cartCount, cartTotal, cartOpen, setCartOpen } = useCart();
  const location = useLocation();
const queryCategory = new URLSearchParams(location.search).get('category') || 'all';
const [selectedCategory, setSelectedCategory] = useState(queryCategory);

React.useEffect(() => {
  const cat = new URLSearchParams(location.search).get('category') || 'all';
  setSelectedCategory(cat);
}, [location.search]);
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [notification, setNotification] = useState('');

  const products = [
    { id: 1, name: 'Gold Bracelet', category: 'bracelets', price: 299, image: '/offer-bracelets.jpg', featured: true, new: true },
    { id: 2, name: 'Diamond Earrings', category: 'earrings', price: 499, image: '/offer-earrings.jpg', featured: true, new: false },
    { id: 3, name: 'Pearl Necklace', category: 'necklaces', price: 399, image: '/offer-necklaces.jpg', featured: false, new: true },
    { id: 4, name: 'Silver Ring Set', category: 'rings', price: 199, image: '/feature-image-1.jpg', featured: true, new: false },
    { id: 5, name: 'Custom Gold Ring', category: 'rings', price: 349, image: '/feature-image-2.jpg', featured: false, new: true },
    { id: 6, name: 'Luxury Bracelet', category: 'bracelets', price: 599, image: '/jewelry-image.jpg', featured: true, new: false }
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    return categoryMatch && priceMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'name': return a.name.localeCompare(b.name);
      default: return b.featured - a.featured;
    }
  });

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification(`✓ ${product.name} added to cart!`);
    setTimeout(() => setNotification(''), 3000);
  };

  return (
    <div className="shop-page">
      <Header />

      {/* Notification */}
      {notification && <div className="sp-notification">{notification}</div>}

      {/* Cart Overlay */}
      <div className={`sp-cart-overlay ${cartOpen ? 'open' : ''}`} onClick={() => setCartOpen(false)}></div>

      {/* Cart Sidebar */}
      <div className={`sp-cart-sidebar ${cartOpen ? 'open' : ''}`}>
        <div className="sp-cart-header">
          <h2 className="sp-cart-title">Your Cart ({cartCount})</h2>
          <button className="sp-cart-close" onClick={() => setCartOpen(false)}>✕</button>
        </div>

        {cart.length === 0 ? (
          <div className="sp-cart-empty">
            <p>🛒 Your cart is empty</p>
            <button className="sp-continue-btn" onClick={() => setCartOpen(false)}>Continue Shopping</button>
          </div>
        ) : (
          <>
            <div className="sp-cart-items">
              {cart.map(item => (
                <div key={item.id} className="sp-cart-item">
                  <img src={item.image} alt={item.name} className="sp-cart-img" />
                  <div className="sp-cart-info">
                    <p className="sp-cart-name">{item.name}</p>
                    <p className="sp-cart-price">${item.price}</p>
                    <div className="sp-cart-qty">
                      <button onClick={() => updateQty(item.id, item.qty - 1)}>−</button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                    </div>
                  </div>
                  <button className="sp-cart-remove" onClick={() => removeFromCart(item.id)}>✕</button>
                </div>
              ))}
            </div>

            <div className="sp-cart-footer">
              <div className="sp-cart-total">
                <span>Total</span>
                <span>${cartTotal}</span>
              </div>
              <button className="sp-checkout-btn" onClick={() => { setCartOpen(false); navigate('/checkout'); }}>
                Proceed to Checkout →
              </button>
              <button className="sp-continue-btn" onClick={() => setCartOpen(false)}>
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>

      {/* Hero */}
      <section className="shop-hero">
        <div className="shop-hero-content">
          <h1 className="shop-hero-title">Our Collection</h1>
          <p className="shop-hero-subtitle">Discover Handcrafted Elegance</p>
        </div>
      </section>

      {/* Shop Content */}
      <div className="shop-container">
        <aside className="shop-sidebar">
          <div className="filter-section">
            <h3 className="filter-title">Categories</h3>
            <div className="filter-options">
              {['all', 'rings', 'necklaces', 'bracelets', 'earrings'].map(cat => (
                <button key={cat} className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`} onClick={() => setSelectedCategory(cat)}>
                  {cat === 'all' ? 'All Products' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h3 className="filter-title">Price Range</h3>
            <div className="price-range">
              <input type="range" min="0" max="1000" value={priceRange[1]} onChange={(e) => setPriceRange([0, parseInt(e.target.value)])} className="price-slider" />
              <div className="price-labels">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </div>
        </aside>

        <main className="shop-main">
          <div className="shop-toolbar">
            <p className="product-count">{sortedProducts.length} Products</p>
            <div className="sort-select-wrapper">
              <select className="sort-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A-Z</option>
              </select>
            </div>
          </div>

          <div className="products-grid">
            {sortedProducts.map(product => (
              <div key={product.id} className="product-card">
                {product.new && <span className="product-badge new">New</span>}
                {product.featured && <span className="product-badge featured">Featured</span>}
                <div className="product-image-wrapper">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className="product-overlay">
                    <button className="quick-view-btn">Quick View</button>
                    <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
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
            <div className="no-products"><p>No products found matching your criteria.</p></div>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default ShopPage;