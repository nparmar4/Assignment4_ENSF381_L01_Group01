import React, { useState, useEffect } from 'react';
import reviews from '../data/reviews';

const HomeMainSection = () => {
  const [randomReviews, setRandomReviews] = useState([]);

  useEffect(() => {
    // Selecting random reviews from reviews.js
    const shuffledReviews = reviews.sort(() => 0.5 - Math.random());
    const selectedReviews = shuffledReviews.slice(0, 2);
    setRandomReviews(selectedReviews);
  }, []);

  return (
    <div className="home-main-section">
      <section className="about-us">
        <h2>About Us</h2>
        <p>Company's vision and mission description goes here...</p>
        <button onClick={() => console.log("Navigate to Product Page")}>Shop Now</button>
      </section>
      <section className="customer-reviews">
        <h2>Customer Reviews</h2>
        <div className="reviews">
          {randomReviews.map((review, index) => (
            <div key={index} className="review">
              <h3>{review.customerName}</h3>
              <p>{review.reviewContent}</p>
              <div className="rating">
                {[...Array(review.stars)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomeMainSection;
