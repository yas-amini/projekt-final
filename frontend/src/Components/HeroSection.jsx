// HeroSection.jsx
import React, { useState, useEffect } from 'react';
import './HeroSection.css';

function HeroSection() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeroItem = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/hero-items');
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to fetch hero item');
        }
        const data = await response.json();
        if (data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.length);
          setSelectedItem(data[randomIndex]);
        } else {
          setError('No hero item found.');
        }
      } catch (e) {
        setError(e.message);
        console.error('Error fetching hero item:', e);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroItem();
  }, []);

  if (loading) {
    return <section className="hero-section loading">Loading...</section>;
  }

  if (error || !selectedItem) {
    return null;
  }

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-image-container">
          <img src={selectedItem.image_url} alt="Featured content" />
        </div>
        <div className="hero-text-container">
          <p>{selectedItem.cta_text}</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
