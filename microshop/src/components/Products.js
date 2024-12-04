import React, { useState, useEffect } from 'react';
import './Products.css';

const Products = ({ cart, setCart }) => {
  const products = [
    { id: 1, title: 'Stylish Jacket', description: 'Comfortable and warm jacket for winter.', image: '/assets/products.webp', price: 59.99 },
    { id: 2, title: 'Running Shoes', description: 'Lightweight shoes for everyday running.', image: '/assets/shirts.jpg', price: 89.99 },
    { id: 3, title: 'Smart Watch', description: 'Track your fitness and stay connected.', image: '/assets/watch.png', price: 199.99 },
  ];

  // Add product to cart or increase quantity if it already exists
  const addToCart = (product) => {
    const productInCart = cart.find((item) => item.id === product.id);

    if (productInCart) {
      // If the product is already in the cart, increment the quantity
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If the product is not in the cart, add it with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    alert(`${product.title} has been added to your cart!`);
  };

  // Remove product from cart or decrease quantity if greater than 1
  const removeFromCart = (productId) => {
    const productInCart = cart.find((item) => item.id === productId);

    if (productInCart && productInCart.quantity > 1) {
      // If quantity is more than 1, decrease the quantity
      setCart(
        cart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else {
      // If quantity is 1, remove the item completely
      setCart(cart.filter((item) => item.id !== productId));
    }
    alert('Product updated in your cart.');
  };

  return (
    <div className="main-container">
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

     
    </div>
  );
};

export default Products;