// Home.jsx - The home page showing popular products

import { useState, useEffect } from 'react';
import ProductCard from '../Components/productcard';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from our backend API
    fetch('http://localhost:3000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <main className="home">
      <section className="hero">
        <h1>Freaky Fashion</h1>
        <p>Upptäck vår senaste kollektion av trendiga kläder och accessoarer.</p>
      </section>

      <section className="products-section">
        <h2>Populära Produkter</h2>
        <div className="products-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;