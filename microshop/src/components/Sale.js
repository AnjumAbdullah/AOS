// src/components/Sale.js
import React, { useState, useEffect } from 'react';
import './Sale.css';

const Sale = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Countdown to Christmas Sale (e.g., November 29, 2024)
  useEffect(() => {
    const targetDate = new Date('December 22, 2024 00:00:00').getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (difference < 0) clearInterval(timer); // Stop countdown when time is up
    }, 1000);

    return () => clearInterval(timer); // Clean up on component unmount
  }, []);

  return (
    <div className="sale-container">
      <h1 className="sale-title">🎉 Early Christmas Sale! 🎉</h1>
      <div className="countdown-timer">
        <h2>Sale Begins In:</h2>
        <div className="timer">
          <div>{timeLeft.days} <span>Days</span></div>
          <div>{timeLeft.hours} <span>Hours</span></div>
          <div>{timeLeft.minutes} <span>Minutes</span></div>
          <div>{timeLeft.seconds} <span>Seconds</span></div>
        </div>
      </div>
      <div className="offers">
        <h2>🔥 Hot Deals 🔥</h2>
        <ul>
          <li>Up to 70% Off on Electronics</li>
          <li>Buy 1 Get 1 Free on Apparel</li>
          <li>Flat 50% Off on Home Appliances</li>
        </ul>
      </div>
      <button className="shop-now-btn">Shop Now</button>
    </div>
  );
};

export default Sale;
