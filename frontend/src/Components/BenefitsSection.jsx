// BenefitsSection.jsx
import React from 'react';
import './BenefitsSection.css'; // Will create this next

function BenefitsSection() {
  return (
    <section className="benefits-section">
      <div className="benefit-item">
        <span>🌍</span> {/* Globe Icon */}
        <p>Gratis frakt och returer</p>
      </div>
      <div className="benefit-item">
        <span>✈️</span> {/* Plane Icon */}
        <p>Expressfrakt</p>
      </div>
      <div className="benefit-item">
        <span>🛡️</span> {/* Shield Icon */}
        <p>Säkra betalningar</p>
      </div>
      <div className="benefit-item">
        <span>😊</span> {/* Smiley Face Icon */}
        <p>Nyheter varje dag</p>
      </div>
    </section>
  );
}

export default BenefitsSection;
