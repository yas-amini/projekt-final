// Footer.jsx - The footer for Freaky Fashion
import { Link } from 'react-router-dom';
import './Footer.css'; // Import the new CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content-grid"> {/* New container for grid layout */}
        <div className="footer-section">
          <h4>Shopping</h4>
          <Link to="/category/vinterjackor">Vinterjackor</Link>
          <Link to="/category/pufferjackor">Pufferjackor</Link>
          <Link to="/category/kappa">Kappa</Link>
          <Link to="/category/trenchcoats">Trenchcoats</Link>
        </div>

        <div className="footer-section">
          <h4>Mina Sidor</h4>
          <Link to="/my-orders">Mina Ordrar</Link>
          <Link to="/my-account">Mitt Konto</Link>
        </div>

        <div className="footer-section">
          <h4>Kundtjänst</h4>
          <Link to="/return-policy">Returpolicy</Link>
          <Link to="/privacy-policy">Integritetspolicy</Link>
        </div>


      </div>
      <div className="footer-bottom">
        <p>© Freaky Fashion | Educado AB</p>
      </div>
    </footer>
  );
}

export default Footer;