// Header.jsx - The navigation header for Freaky Fashion
import { Link } from 'react-router-dom';

//Creates a React component
function Header() {
    //What gets displayed on screen
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">Freaky Fashion</Link>
      </div>
      
      <div className="header-search">
        <input 
          type="text" 
          placeholder="Sök produkter..." 
        />
        <button type="submit">Sök</button>
      </div>

      <nav className="header-nav">
        <Link to="/nyheter">Nyheter</Link>
        <Link to="/topplistan">Topplistan</Link>
        <Link to="/rea">Rea</Link>
        <Link to="/kampanjer">Kampanjer</Link>
      </nav>
    </header>
  );
}
//Makes this component usable in other files
export default Header;