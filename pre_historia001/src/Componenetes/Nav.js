import './Nav.css';

import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="Nav">
      <nav className="navbar">
        <h1>Pré-História</h1>
        <ul className="nav-links">
          <li><Link to="/">Idade da Pedra</Link></li>
          <li><Link to="/bronze">Idade do Bronze</Link></li>
          <li><Link to="/ferro">Idade do Ferro</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;   