// Header.jsx - The navigation header for Freaky Fashion
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">Freaky Fashion</Link>
      </div>

      <div className="header-search">
        <input 
          type="text" 
          placeholder="Sök produkt" 
        />
      </div>

      <nav className="header-nav">
        <Link to="/nyheter">Nyheter</Link>
        <Link to="/topplistan">Topplistan</Link>
        <Link to="/rea">Rea</Link>
        <Link to="/kampanjer">Kampanjer</Link>
      </nav>

      <div className="header-icons">
        <span>♡</span> {/* Heart Icon */}
        <span>⚙️</span> {/* Settings/Menu Icon */}
      </div>
    </header>
  );
}

export default Header;
