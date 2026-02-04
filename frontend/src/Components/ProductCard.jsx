// ProductCard.jsx - Displays a single product
import { Link } from 'react-router-dom';

// {product} Receives product data from parent component
function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.slug}`} className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <button className="favorite-btn">♡</button>
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-brand">{product.brand}</p>
        <p className="product-price">{product.price} SEK</p>
      </div>
    </Link>
  );
}

export default ProductCard;