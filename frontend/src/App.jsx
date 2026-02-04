// App.jsx - Main application component
// Brings in the components
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar'; // Import the Sidebar
import Home from './pages/Home';
import ProductDetailPage from './pages/ProductDetailPage';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content-area"> {/* New container for sidebar and main content */}
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:slug" element={<ProductDetailPage />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
