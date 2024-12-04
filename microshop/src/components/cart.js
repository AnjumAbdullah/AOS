// src/components/Cart.js
import React from 'react';
import './cart.css'; // Import the CSS for styling

const Cart = ({ cart, setCart }) => {

  // Calculate the total price of the cart items
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Remove a product from the cart or decrease quantity if greater than 1
  const removeFromCart = (productId) => {
    const productInCart = cart.find((item) => item.id === productId);

    if (productInCart && productInCart.quantity > 1) {
      setCart(
        cart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else {
      setCart(cart.filter((item) => item.id !== productId));
    }
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Shopping Cart</h2>
      
      {/* If the cart is empty */}
      {cart.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="cart-item-info">
                  <span className="cart-item-title">{item.title}</span>
                  <span className="cart-item-quantity">x {item.quantity}</span>
                  <span className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</span>
                  <button 
                    onClick={() => removeFromCart(item.id)} 
                    className="remove-button"
                  >
                    Remove 1
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Total Section */}
          <div className="cart-total">
            <span className="total-title">Total: </span>
            <span className="total-price">${totalPrice.toFixed(2)}</span>
          </div>

          {/* Checkout Button */}
          <div className="checkout-section">
            <button className="checkout-button">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;