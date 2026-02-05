// HeroSection.jsx
import React, { useState, useEffect } from 'react';
import './HeroSection.css';

function HeroSection() {
  const [heroItems, setHeroItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeroItems = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/hero-items');
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to fetch hero items');
        }
        const data = await response.json();
        if (data.length > 0) {
          setHeroItems(data);
          setSelectedItem(data[0]); // Default to the first item
        } else {
          // Handle case where no hero items are returned
          setError('No hero items found.');
        }
      } catch (e) {
        setError(e.message);
        console.error('Error fetching hero items:', e);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroItems();
  }, []);

  const handleSelectChange = (e) => {
    const selectedId = parseInt(e.target.value, 10);
    const item = heroItems.find(h => h.id === selectedId);
    setSelectedItem(item);
  };

  if (loading) {
    return <section className="hero-section loading">Loading...</section>;
  }

  // Do not render anything if there's an error or no items
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

      {heroItems.length > 1 && (
        <div className="hero-selector">
          <label htmlFor="hero-item-select">Choose a promotion: </label>
          <select 
            id="hero-item-select" 
            onChange={handleSelectChange} 
            value={selectedItem.id}
          >
            {heroItems.map(item => (
              <option key={item.id} value={item.id}>
                Promotion {item.id}
              </option>
            ))}
          </select>
        </div>
      )}
    </section>
  );
}

export default HeroSection;
