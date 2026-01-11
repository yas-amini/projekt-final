// App.jsx - Main application component
// Brings in the components
import Header from './Components/header';
import Footer from './Components/footer';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;