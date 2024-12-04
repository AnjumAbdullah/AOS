import React, { useState, useEffect } from 'react';
import './Products.css'; // Importing the updated CSS file

const Products = () => {
  const [cart, setCart] = useState([]);

  // Static products array
  const products = [
    {
      id: 1,
      title: 'Stylish Jacket',
      description: 'Comfortable and warm jacket for winter.',
      image: '/assets/products.webp',
      price: 59.99,
    },
    {
      id: 2,
      title: 'Running Shoes',
      description: 'Lightweight shoes for everyday running.',
      image: '/assets/shirts.jpg',
      price: 89.99,
    },
    {
      id: 3,
      title: 'Smart Watch',
      description: 'Track your fitness and stay connected.',
      image: '/assets/watch.png',
      price: 199.99,
    },
  ];

  // Add product to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.title} has been added to your cart!`);
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
    alert('Product removed from your cart.');
  };

  return (
    <div className="main-container">
      <header className="header-section">
        <h1>Welcome to Our Shop</h1>
        <p>Find the best deals and explore amazing products tailored for you.</p>
      </header>

      {/* Products Section */}
      <div className="products-container">
        <h2 className="section-title">Our Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} className="product-image" />
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <button onClick={() => addToCart(product)} className="buy-button">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Section */}
      <div className="cart-container">
        <h2 className="section-title">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="empty-cart-message">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-details">
                <span className="cart-item-title">{item.title}</span>
                <span className="cart-item-price">${item.price.toFixed(2)}</span>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="remove-button">
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;