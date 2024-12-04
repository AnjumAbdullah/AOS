import React, { useState } from 'react';
import axios from 'axios';
import './cart.css';

const Cart = ({ cart, setCart }) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
  });

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      name: formData.name,
      address: formData.address,
      items: cart,
      total: totalPrice,
      date: new Date().toISOString(),
    };

    try {
      await axios.post('http://localhost:5000/api/orders', order);
      alert('Order saved successfully!');
      setCart([]); // Clear cart after successful order
      setShowCheckout(false);
    } catch (error) {
      console.error('Error saving order:', error);
    }
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.title} - ${item.price} x {item.quantity}
              </li>
            ))}
          </ul>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button onClick={() => setShowCheckout(true)}>Checkout</button>
        </>
      )}

      {showCheckout && (
        <form onSubmit={handleSubmit}>
          <label>Name: <input type="text" required onChange={(e) => setFormData({ ...formData, name: e.target.value })} /></label>
          <label>Address: <textarea required onChange={(e) => setFormData({ ...formData, address: e.target.value })}></textarea></label>
          <button type="submit">Place Order</button>
        </form>
      )}
    </div>
  );
};

export default Cart;
