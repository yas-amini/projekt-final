// Sidebar.jsx - The sidebar component for categories and account links
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="sidebar">
      <section className="sidebar-section">
        <h3>Shopping</h3>
        <nav>
          <Link to="/category/vinterjackor">Vinterjackor</Link>
          <Link to="/category/pufferjackor">Pufferjackor</Link>
          <Link to="/category/kappa">Kappa</Link>
          <Link to="/category/trenchcoats">Trenchcoats</Link>
        </nav>
      </section>
      
      <section className="sidebar-section">
        <h3>Mina Sidor</h3>
        <nav>
          <Link to="/my-orders">Mina Ordrar</Link>
          <Link to="/my-account">Mitt Konto</Link>
          <Link to="/customer-service">Kundtjänst</Link>
        </nav>
      </section>

      <footer className="sidebar-footer">
        <nav>
          <Link to="/return-policy">Returnpolicy</Link>
          <Link to="/privacy-policy">Integritetspolicy</Link>
        </nav>
      </footer>
    </aside>
  );
}

export default Sidebar;
