// Home.jsx - The home page showing popular products

import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import HeroSection from "../components/HeroSection"; // Import the new HeroSection
import "./Home.css";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products for the main grid
    fetch("http://localhost:4000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <main className="home">
      <HeroSection />

      <section className="products-section">
        <h2>Populära Produkter</h2>
        <div className="products-grid">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
