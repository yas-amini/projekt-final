// ProductDetailPage.jsx - Displays full details for a single product

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import './ProductDetailPage.css'; // Dedicated CSS for this page

function ProductDetailPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        // Fetch main product details
        const productResponse = await fetch(`http://localhost:3000/api/products/${slug}`);
        if (!productResponse.ok) {
          throw new Error(`HTTP error! status: ${productResponse.status}`);
        }
        const productData = await productResponse.json();
        setProduct(productData);

        // Fetch all products to get similar ones
        const allProductsResponse = await fetch('http://localhost:3000/api/products');
        if (!allProductsResponse.ok) {
          throw new Error(`HTTP error! status: ${allProductsResponse.status}`);
        }
        const allProductsData = await allProductsResponse.json();
        
        // Filter out the current product and take the first 3
        const filteredSimilar = allProductsData
          .filter(p => p.slug !== slug)
          .slice(0, 3);
        setSimilarProducts(filteredSimilar);

      } catch (e) {
        setError(e.message);
        console.error('Error fetching product details:', e);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [slug]); // Re-fetch when slug changes

  if (loading) {
    return <main className="product-detail-page">Laddar produkt...</main>;
  }

  if (error) {
    return <main className="product-detail-page">Fel: {error}</main>;
  }

  if (!product) {
    return <main className="product-detail-page">Produkt hittades inte.</main>;
  }

  return (
    <main className="product-detail-page">
      {/* Main Product Section */}
      <section className="product-main-details">
        <div className="product-image-container">
          <img src={product.image} alt={product.name} className="product-detail-image" />
        </div>
        
        <div className="product-info-panel">
          <h1>{product.name}</h1>
          <p className="product-brand">Märke: {product.brand}</p>
          {/* Placeholder for breadcrumbs/categories */}
          <div className="product-categories">
            {/* Example: <Link to="/nyheter">Nyheter</Link> / <Link to="/rea">Rea</Link> */}
            {/* These can be dynamic based on product data if available */}
          </div>
          
          <p className="product-description">{product.description}</p>
          <p className="product-price">{product.price} SEK</p>
          <button className="add-to-cart-button">Lägg i varukorg</button>
        </div>
      </section>

      {/* Similar Products Section */}
      {similarProducts.length > 0 && (
        <section className="similar-products-section">
          <h2>Liknande produkter</h2>
          <div className="products-grid">
            {similarProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

export default ProductDetailPage;