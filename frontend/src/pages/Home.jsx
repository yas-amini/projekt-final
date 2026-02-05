// Home.jsx - The home page showing popular products

import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import HeroProductCard from '../components/HeroProductCard'; // Import the new component
import './Home.css';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from our backend API
    // We fetch all products and then slice for the grid. The hero fetches its own.
    fetch('http://localhost:4000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <main className="home">
      <HeroProductCard />

      <section className="products-section">
        <h2>Populära Produkter</h2>
        <div className="products-grid">
          {/* We can slice from the 2nd product to avoid showing the hero product in the grid */}
          {products.slice(1, 9).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;