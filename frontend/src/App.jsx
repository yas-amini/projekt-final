// App.jsx - Main application component
// Brings in the components
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetailPage";
import SearchResultsPage from "./pages/SearchResultsPage"; // Import SearchResultsPage
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content-area">
        {" "}
        {/* Wrap main content and sidebar */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:slug" element={<ProductDetailPage />} />
            <Route path="/search" element={<SearchResultsPage />} />{" "}
            {/* Add SearchResultsPage route */}
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
