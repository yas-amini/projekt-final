// ProductCard.jsx - Displays a single product
// {product} Receives product data from parent component

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <button className="favorite-btn">♡</button>
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-brand">{product.brand}</p>
        <p className="product-price">{product.price} SEK</p>
      </div>
    </div>
  );
}

export default ProductCard;