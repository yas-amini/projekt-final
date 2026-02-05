// AdminProductListPage.jsx - Administration page for listing products
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AdminProductListPage.css'; // Import the CSS for this page

function AdminProductListPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/products');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (e) {
        setError(e.message);
        console.error("Error fetching products:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <main className="admin-product-list-page">Laddar produkter...</main>;
  }

  if (error) {
    return <main className="admin-product-list-page">Fel: {error}</main>;
  }

  return (
    <div className="admin-product-list-page">
      <header className="admin-header">
        <h1>Administration</h1>
        <Link to="/admin/products/new" className="new-product-button">
          Ny produkt
        </Link>
      </header>

      <div className="admin-main-section">
        <aside className="admin-sidebar">
          <h3>Produkter</h3>
          {/* Add other admin navigation links here if needed */}
        </aside>

        <div className="admin-main-content">
          <h2>Produkter</h2>
          {products.length > 0 ? (
            <table className="products-table">
              <thead>
                <tr>
                  <th>Namn</th>
                  <th>SKU</th>
                  <th>Pris</th>
                  {/* Add more headers if needed for actions like edit/delete */}
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.sku}</td>
                    <td>{product.price} SEK</td>
                    {/* Add more cells for actions */}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Inga produkter hittades.</p>
          )}
          <p className="table-note">Samtliga produkter i databasen visas i tabellen</p>
        </div>
      </div>
    </div>
  );
}

export default AdminProductListPage;
