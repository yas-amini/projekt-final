// Home.jsx - The home page showing popular products

import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import './Home.css';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from our backend API
    fetch('http://localhost:4000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <main className="home">
      <section className="hero">
        <h1>Lorem ipsum dolor</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </section>

      <section className="products-section">
        <h2>Populära Produkter</h2>
        <div className="products-grid">
          {products.slice(0, 8).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;