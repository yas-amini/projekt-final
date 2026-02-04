// App.jsx - Main application component
// Brings in the components
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import ProductDetailPage from "./pages/ProductDetailPage";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:slug" element={<ProductDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
