// src/components/Products.js
import React, { useState, useEffect } from 'react';
import './Products.css'; // Importing the new CSS file

const products = [
    { id: 1, title: 'Stylish Jacket', description: 'Comfortable and warm jacket for winter.', image: '/assets/products.webp', price: '$59.99' },
    { id: 2, title: 'Running Shoes', description: 'Lightweight shoes for everyday running.', image: '/assets/products.webp', price: '$89.99' },
    { id: 3, title: 'Smart Watch', description: 'Track your fitness and stay connected.', image: '/assets/products.webp', price: '$199.99' },
    
    { id: 1, title: 'Stylish Jacket', description: 'Comfortable and warm jacket for winter.', image: '/assets/products.webp', price: '$59.99' },
    { id: 2, title: 'Running Shoes', description: 'Lightweight shoes for everyday running.', image: '/assets/products.webp', price: '$89.99' },
    { id: 3, title: 'Smart Watch', description: 'Track your fitness and stay connected.', image: '/assets/products.webp', price: '$199.99' },

    { id: 1, title: 'Stylish Jacket', description: 'Comfortable and warm jacket for winter.', image: '/assets/shirts.jpg', price: '$59.99' },
    { id: 2, title: 'Running Shoes', description: 'Lightweight shoes for everyday running.', image: '/assets/shirts.jpg', price: '$89.99' },
    { id: 3, title: 'Smart Watch', description: 'Track your fitness and stay connected.', image: '/assets/shirts.jpg', price: '$199.99' },

    { id: 1, title: 'Stylish Jacket', description: 'Comfortable and warm jacket for winter.', image: '/assets/shirts.jpg', price: '$59.99' },
    { id: 2, title: 'Running Shoes', description: 'Lightweight shoes for everyday running.', image: '/assets/shirts.jpg', price: '$89.99' },
    { id: 3, title: 'Smart Watch', description: 'Track your fitness and stay connected.', image: '/assets/shirts.jpg', price: '$199.99' },

    { id: 1, title: 'Stylish Jacket', description: 'Comfortable and warm jacket for winter.', image: '/assets/shirts.jpg', price: '$59.99' },
    { id: 2, title: 'Running Shoes', description: 'Lightweight shoes for everyday running.', image: '/assets/shirts.jpg', price: '$89.99' },
    { id: 3, title: 'Smart Watch', description: 'Track your fitness and stay connected.', image: '/assets/shirts.jpg', price: '$199.99' },
];

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
  
    // Fetch products from the API
    useEffect(() => {
      fetch('http://127.0.0.1:5000/api/products')
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error('Error fetching products:', error));
    }, []);
  
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
      <div className="outer-container">
        <div className="products-container">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} className="product-image" />
              <div className="product-info">
                <h2 className="product-title">{product.title}</h2>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <button onClick={() => addToCart(product)} className="buy-button">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
  
        {/* Cart Section */}
        <div className="cart-container">
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <span>{item.title}</span>
                <button onClick={() => removeFromCart(item.id)} className="remove-button">Remove</button>
              </div>
            ))
          )}
        </div>
      </div>
    );
  };

export default Products;