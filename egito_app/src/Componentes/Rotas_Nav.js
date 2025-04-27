// Importando Rotas 
import { Route, Routes } from 'react-router-dom';

// Componentes
import Main from './Main';
import Historia from './Historia';

function Rotas_Nav() {
    return (
      <div className="Rotas_Nav">
        <Routes>
            <Route path='/' element = {<Main />}/>
            <Route path='/historia' element = {<Historia />} />
        </Routes>
      </div>
    );
  }
  
  export default Rotas_Nav;
  