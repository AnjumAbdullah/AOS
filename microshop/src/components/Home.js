import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel styles

const Home = () => {
  return (
    <div className="main-wrapper">
      <div className="home-container">
        <h1 className="sale-link">Welcome to MicroShop!</h1>
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

        <Carousel
          autoPlay
          infiniteLoop
          interval={3000}
          showThumbs={false}
          showStatus={false}
          className="project-carousel"
        >
          <div>
            <img src="/assets/perfume.jpg" alt="User Management" />
          </div>
          <div>
            <img src="/assets/products.webp" alt="Product Catalog" />
          </div>
          <div>
            <img src="/assets/shirts.jpg" alt="Order Processing" />
          </div>
          <div>
            <img src="/assets/watch.png" alt="Secure Payments" />
          </div>
        </Carousel>

        <Link to="/products">
          <button className="cta-button">Start Shopping Now!</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;