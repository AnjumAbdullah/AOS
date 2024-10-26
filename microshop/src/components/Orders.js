// src/components/Orders.js
import React, { useState } from 'react';
import './Orders.css';

const ordersData = [
  { id: '001', customer: 'Alice Johnson', status: 'Processing', total: 299.99 },
  { id: '002', customer: 'Bob Smith', status: 'Shipped', total: 499.50 },
  { id: '003', customer: 'Charlie Brown', status: 'Delivered', total: 159.99 },
  { id: '004', customer: 'Diana Prince', status: 'Cancelled', total: 75.00 },
];

const Orders = () => {
  const [orders, setOrders] = useState(ordersData);

  const handleOrderClick = (id) => {
    alert(`Viewing details for order: ${id}`);
  };

  return (
    <div className="main-wrapper">
      <div className="order-container">
        <h1>Order Management</h1>
        <table className="order-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>
                  <span className={`status-badge ${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                </td>
                <td>${order.total.toFixed(2)}</td>
                <td>
                  <button
                    className="view-button"
                    onClick={() => handleOrderClick(order.id)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;