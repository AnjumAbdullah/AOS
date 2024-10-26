import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="main-wrapper">
      <div className="home-container">
        <h1 className='sale-link'>Welcome to MicroShop!</h1>
        <p className="home-description">
          Your one-stop solution for a seamless e-commerce experience.
        </p>
        <p className="home-description">
          Explore our extensive product catalog, manage your orders, and enjoy secure payment processing—all powered by our microservices architecture.
        </p>
        <h2>Key Features:</h2>
        <ul className="features-list">
          <li className="feature-item">User-friendly profile management</li>
          <li className="feature-item">Extensive product catalog</li>
          <li className="feature-item">Effortless order processing</li>
          <li className="feature-item">Secure payment handling</li>
        </ul>
        <button className="cta-button">Start Shopping Now!</button>
      </div>
    </div>
  );
};

export default Home;