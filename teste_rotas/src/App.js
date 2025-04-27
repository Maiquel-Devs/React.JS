import './App.css';

// importar Route
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Componentes
import Nav from './Componentes/Nav';  
import Home from './Componentes/Home';
import Sobre from './Componentes/Sobre';


function App() {
  return (
    <div className="App">
      <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

// Importar <Routes> e adicionar debaixo do Nav (componente de navegação)
