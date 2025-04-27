import { Link } from 'react-router-dom'; // Importar Link

function Nav() {
  return (
    <div className="Nav">

         <nav>
      <ul>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
      </ul>
    </nav>

    </div>
  );
}

export default Nav;

// Criar link com <Link> e não com <a>