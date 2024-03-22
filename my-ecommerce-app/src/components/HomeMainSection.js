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
        <p>At Ethereal Jewels, we envision a world where luxury is redefined through exceptional craftsmanship and timeless elegance. Our mission is to curate and craft exquisite, handcrafted jewelry that seamlessly intertwines tradition with contemporary allure. With a commitment to the highest standards of quality, we use only the finest materials and employ skilled artisans who share our passion for beauty and innovation.
        Let our jewelry become a symbol of your distinctive style, an expression of timeless refinement and exquisite craftsmanship.Driven by the belief that jewelry should transcend trends and become cherished heirlooms, our mission is to provide an unparalleled experience for our customers. We aim to create a collection where each piece tells a unique story, celebrating life's special moments with enduring beauty and individuality. At Ethereal Jewels, we are dedicated to becoming synonymous with timeless style, offering our customers a symbol of refinement that lasts for generations.</p>
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
