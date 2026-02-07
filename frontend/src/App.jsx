// App.jsx - Main application component
// Brings in the components & defines the inside of the app
// the app adapts the layout based on the current URL to show a “regular user view” or an “admin view.”

// Imports routing tools from react-router-dom:
// - Routes: container for all route definitions (maps URLs to components)
// - Route: defines a single route (URL path → component to render)
// - useLocation: hook to get current URL info, useful for reacting to navigation

import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BenefitsSection from "./components/BenefitsSection";
import ProductDetailPage from "./pages/ProductDetailPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import AdminProductListPage from "./pages/admin/AdminProductListPage";
import AdminNewProductPage from "./pages/admin/AdminNewProductPage";
import "./App.css";

// Inside the App function, get the current location using useLocation(), and then check if the path starts with /admin to see if this is an admin page.
function App() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  //  return (...) = “What the user sees”
  // {!isAdminPage && <Header />} = “If this is NOT an admin page, show the header.”
  return (
    <div className="app">
      {!isAdminPage && <Header />}
      {/* Create a container for the main content area. */}
      <div className="content-area">
        {" "}
        <main>
          {/* If the URL is /, show the Home page.*/}
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
      {/* If this is not an admin page , show footer */}
      {!isAdminPage && <Footer />}
    </div>
  );
}

export default App;
