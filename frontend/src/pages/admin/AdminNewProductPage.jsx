// AdminNewProductPage.jsx - Page for adding a new product

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminNewProductPage.css';

function AdminNewProductPage() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    sku: '',
    brand: '',
    price: '',
    image: '',
  });
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    for (const key in formData) {
      if (!formData[key]) {
        setError(`Fältet "${key}" får inte vara tomt.`);
        return;
      }
    }

    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3000/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          price: Number(formData.price), // Ensure price is a number
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }
      
      // On successful submission, redirect to the product list
      navigate('/admin/products');

    } catch (e) {
      setError(e.message);
      console.error('Failed to create product:', e);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="admin-new-product-page">
      <header className="admin-header">
        <h1>Administration</h1>
      </header>
      
      <main className="admin-content">
        <h2>Ny produkt</h2>
        <form onSubmit={handleSubmit} className="new-product-form">
          <div className="form-group">
            <label htmlFor="name">Namn</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Beskrivning</label>
            <textarea id="description" name="description" value={formData.description} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="sku">SKU</label>
            <input type="text" id="sku" name="sku" value={formData.sku} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="brand">Märke</label>
            <input type="text" id="brand" name="brand" value={formData.brand} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="price">Pris</label>
            <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="image">Bild (URL)</label>
            <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} />
          </div>
          
          {error && <p className="form-error">{error}</p>}
          
          <button type="submit" disabled={submitting} className="submit-button">
            {submitting ? 'Lägger till...' : 'Lägg till'}
          </button>
        </form>
      </main>
    </div>
  );
}

export default AdminNewProductPage;
