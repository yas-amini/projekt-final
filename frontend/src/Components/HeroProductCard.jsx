// HeroProductCard.jsx - A featured product card for the home page.

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeroProductCard.css';

function HeroProductCard() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the first product to be featured
    const fetchFeaturedProduct = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/products');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.length > 0) {
          setProduct(data[0]); // Feature the first product
        }
      } catch (e) {
        setError(e.message);
        console.error('Failed to fetch featured product:', e);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProduct();
  }, []);

  if (loading) {
    return <section className="hero-product-card loading">Loading featured product...</section>;
  }

  if (error || !product) {
    // Don't render the component if there's an error or no product
    return null;
  }

  // The entire card can be a link to the product detail page
  return (
    <section className="hero-product-section">
      <Link to={`/products/${product.slug}`} className="hero-product-card">
        <div className="hero-product-image">
          <img src={product.image} alt={product.name} />
          <button className="favorite-btn">♡</button>
        </div>
        
        <div className="hero-product-info">
          <h2 className="hero-product-name">{product.name}</h2>
          <p className="hero-product-brand">{product.brand}</p>
          <p className="hero-product-price">{product.price} SEK</p>
          <p className="hero-product-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </Link>
    </section>
  );
}

export default HeroProductCard;
