// Sidebar.jsx - The sidebar component for categories and account links
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="sidebar">
      <section className="sidebar-categories">
        <h3>Kategorier</h3>
        <nav>
          <Link to="/category/vinterjackor">Vinterjackor</Link>
          <Link to="/category/pufferjackor">Pufferjackor</Link>
          <Link to="/category/kappa">Kappa</Link>
          <Link to="/category/trenchcoats">Trenchcoats</Link>
        </nav>
      </section>
      <section className="sidebar-account">
        <h3>Mitt konto</h3>
        <nav>
          <Link to="/login">Logga in</Link>
          <Link to="/register">Registrera</Link>
        </nav>
      </section>
    </aside>
  );
}

export default Sidebar;
