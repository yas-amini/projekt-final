// Header.jsx - The navigation header for Freaky Fashion
//Creates a React component
function Header() {
    //What gets displayed on screen
  return (
    <header className="header">
      <div className="header-logo">
        <a href="/">Freaky Fashion</a>
      </div>
      
      <div className="header-search">
        <input 
          type="text" 
          placeholder="Sök produkter..." 
        />
        <button type="submit">Sök</button>
      </div>

      <nav className="header-nav">
        <a href="#">Nyheter</a>
        <a href="#">Topplistan</a>
        <a href="#">Rea</a>
        <a href="#">Kampanjer</a>
      </nav>
    </header>
  );
}
//Makes this component usable in other files
export default Header;