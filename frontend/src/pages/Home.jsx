// Home.jsx - The home page showing popular products

import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import HeroSection from "../components/HeroSection"; // Import the new HeroSection
import BenefitsSection from "../components/BenefitsSection"; // Import the new BenefitsSection
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

      {/* Promotional Content Section (Desktop only) */}
      <section className="promotional-content">
        <div className="promo-item">
          <img src="https://via.placeholder.com/400x250/FFC0CB/FFFFFF?text=Promo+1" alt="Promotional Offer 1" />
          <div className="promo-text">Sommarrea!</div>
        </div>
        <div className="promo-item">
          <img src="https://via.placeholder.com/400x250/ADD8E6/FFFFFF?text=Promo+2" alt="Promotional Offer 2" />
          <div className="promo-text">Nya Anlända</div>
        </div>
        <div className="promo-item">
          <img src="https://via.placeholder.com/400x250/90EE90/FFFFFF?text=Promo+3" alt="Promotional Offer 3" />
          <div className="promo-text">Fri Frakt</div>
        </div>
      </section>

      <section className="products-section">
        <h2>Populära Produkter</h2>
        <div className="products-grid">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <BenefitsSection />
    </main>
  );
}

export default Home;
