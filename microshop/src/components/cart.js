import React, { useState } from 'react';
import './cart.css';

const Cart = ({ cart, setCart, saveOrder }) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      name: formData.name,
      address: formData.address,
      items: cart,
      total: totalPrice,
      date: new Date().toISOString(),
    };

    saveOrder(order); 
    setCart([]); 
    setShowCheckout(false);
    alert('Order confirmed!');
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Shopping Cart</h2>
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
                    onClick={() => setCart(cart.filter((c) => c.id !== item.id))}
                    className="remove-button"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <span className="total-title">Total: </span>
            <span className="total-price">${totalPrice.toFixed(2)}</span>
          </div>

          <div className="checkout-section">
            <button className="checkout-button" onClick={() => setShowCheckout(true)}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}

      {showCheckout && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
              <label>Name:</label>
              <input type="text" name="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              <label>Address:</label>
              <textarea name="address" required value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })}></textarea>
              <label>Card Number:</label>
              <input type="text" name="cardNumber" maxLength="16" required value={formData.cardNumber} onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })} />
              <label>Expiry Date:</label>
              <input type="text" name="expiryDate" placeholder="MM/YY" required value={formData.expiryDate} onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })} />
              <label>CVV:</label>
              <input type="text" name="cvv" maxLength="3" required value={formData.cvv} onChange={(e) => setFormData({ ...formData, cvv: e.target.value })} />
              <button type="submit" className="submit-button">Confirm Order</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
