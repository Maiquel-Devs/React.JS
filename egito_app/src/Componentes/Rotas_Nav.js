// Importando Rotas 
import { Route, Routes } from 'react-router-dom';

// Componentes
import Main from './Main';
import Historia from './Historia';
import Cultura from './Cultura';
import Religiao from './Religiao';

function Rotas_Nav() {
    return (
      <div className="Rotas_Nav">
        <Routes>
            <Route path='/' element = {<Main />}/>
            <Route path='/historia' element = {<Historia />} />
            <Route path='/cultura' element = {<Cultura />} />
            <Route path='/religiao' element = {<Religiao />} />
        </Routes>
      </div>
    );
  }
  
  export default Rotas_Nav;
  