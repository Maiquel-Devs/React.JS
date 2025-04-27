import './App.css';
import Navegacao from './Componentes/Navegacao';
import Body from './Componentes/Body';
import Main from './Componentes/Main';
import Rotas_Nav from './Componentes/Rotas_Nav'; // Rota

// Importando Rotas
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Body />

      <Router>
      <Navegacao />
      <Rotas_Nav />
      </Router>

      <Main />
    </div>
  );
}

export default App;
