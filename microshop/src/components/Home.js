import React from 'react';
import './Home.css'; // Optional: for styling

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to MicroShop!</h1>
      <p>
        Your one-stop solution for a seamless e-commerce experience.
      </p>
      <p>
        Explore our extensive product catalog, manage your orders, and enjoy secure payment processing—all powered by our microservices architecture.
      </p>
      <h2>Key Features:</h2>
      <ul>
        <li>User-friendly profile management</li>
        <li>Extensive product catalog</li>
        <li>Effortless order processing</li>
        <li>Secure payment handling</li>
      </ul>
      <p>
        Start shopping today and experience the future of e-commerce!
      </p>
    </div>
  );
};

export default Home;