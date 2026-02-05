// App.jsx - Main application component
// Brings in the components
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetailPage";
import SearchResultsPage from "./pages/SearchResultsPage"; // Import SearchResultsPage
import AdminProductListPage from "./pages/admin/AdminProductListPage"; // Import AdminProductListPage
import "./App.css";

function App() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <div className="app">
      {!isAdminPage && <Header />}
      <div className="content-area">
        {" "}
        {/* Wrap main content and sidebar */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:slug" element={<ProductDetailPage />} />
            <Route path="/search" element={<SearchResultsPage />} />{" "}
            {/* Add SearchResultsPage route */}
            <Route path="/admin/products" element={<AdminProductListPage />} />
            <Route path="/admin/products/new" element={<div>Admin New Product Form (Placeholder)</div>} />
          </Routes>
        </main>
      </div>
      {!isAdminPage && <Footer />}
    </div>
  );
}

export default App;
