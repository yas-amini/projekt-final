import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import './Home.css'; // Reusing Home.css for the grid
import './SearchResultsPage.css'; // Specific styles for this page

function SearchResultsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('q') || '';
    setSearchTerm(query);

    if (query) {
      setLoading(true);
      fetch(`http://localhost:4000/api/search?q=${encodeURIComponent(query)}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          setProducts(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching search results:', error);
          setProducts([]); // Clear products on error
          setLoading(false);
        });
    } else {
      setProducts([]); // Clear products if no search term
      setLoading(false);
    }
  }, [location.search]); // Re-run effect when the URL search params change

  return (
    <main className="search-results-page">
      <section className="search-info">
        {/* The "Sök produkt" heading can be removed if the main header search is sufficient */}
        <h1>Sökresultat för: "{searchTerm}"</h1>
        {loading ? (
          <p className="results-count">Laddar...</p>
        ) : (
          <p className="results-count">Hittade {products.length} produkter</p>
        )}
      </section>

      <section className="products-section">
        <div className="products-grid">
          {!loading && products.length === 0 && searchTerm ? (
            <p>Inga produkter matchade din sökning.</p>
          ) : (
            products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </section>
    </main>
  );
}

export default SearchResultsPage;
