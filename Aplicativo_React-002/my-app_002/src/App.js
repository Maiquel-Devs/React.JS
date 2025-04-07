import './App.css';
import Menu from './Menu';
import Contador from './hooks_de_estado';
import ContadorComAviso from './hooks_de_efeito';

function App(props) {
  return (
    <div className="App">
      <Menu /> 
      <Contador />
      <ContadorComAviso />
    </div>
  );
}

export default App;

