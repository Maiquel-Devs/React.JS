import './App.css';
import Body from './Componenetes/Body';
import Nav from './Componenetes/Nav';
import AppRoutes from './Componenetes/AppRoutes';

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Body />

     
      <Router>
      <Nav />
      <AppRoutes /> 
      </Router>

    </div>
  );
}

export default App;
