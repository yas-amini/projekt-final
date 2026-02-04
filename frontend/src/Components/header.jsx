// Header.jsx - The navigation header for Freaky Fashion
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';

function Header() {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    if (event.key === 'Enter' && searchInput.trim() !== '') {
      navigate(`/search?q=${encodeURIComponent(searchInput.trim())}`);
      setSearchInput(''); // Clear search input after navigating
    }
  };

  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">Freaky Fashion</Link>
      </div>

      <div className="header-search">
        <input 
          type="text" 
          placeholder="Sök produkt" 
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyPress={handleSearch}
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
