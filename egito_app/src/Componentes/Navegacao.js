import './Navegacao.css'; 

import { Link } from 'react-router-dom';

function Navegacao(props) {
  return (
    <div className="Nav">
      <header>
    <h1>Egito Antigo: Alto e Baixo Egito</h1>
    <nav>
      <Link to="/">Início</Link>
      <Link to="/historia">História</Link>
      <Link to="/cultura">Cultura</Link>
      <Link to="/religiao">Religião</Link>
    </nav>
      </header>
    </div>
  );
}

export default Navegacao;
