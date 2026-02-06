// App.jsx - Main application component
// Brings in the components & defines the inside of the app

// Imports routing tools from react-router-dom:
// - Routes: container for all route definitions (maps URLs to components)
// - Route: defines a single route (URL path → component to render)
// - useLocation: hook to get current URL info, useful for reacting to navigation
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BenefitsSection from "./components/BenefitsSection"; // Import BenefitsSection
import ProductDetailPage from "./pages/ProductDetailPage";
import SearchResultsPage from "./pages/SearchResultsPage"; // Import SearchResultsPage
import AdminProductListPage from "./pages/admin/AdminProductListPage"; // Import AdminProductListPage
import AdminNewProductPage from "./pages/admin/AdminNewProductPage"; // Import AdminNewProductPage
import "./App.css";

function App() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

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
            <Route
              path="/admin/products/new"
              element={<AdminNewProductPage />}
            />
          </Routes>
        </main>
      </div>
      {!isAdminPage && <BenefitsSection />}{" "}
      {/* Conditionally render BenefitsSection */}
      {!isAdminPage && <Footer />}
    </div>
  );
}

export default App;
