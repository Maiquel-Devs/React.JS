import './App.css';
import Menu from './Menu';
import Contador from './hooks_de_estado';
import ContadorComAviso from './hooks_de_efeito';
import Relogio from './relogio';

function App(props) {
  return (
    <div className="App">
      <Menu /> 
      <Contador />
      <ContadorComAviso />
      <Relogio />
    </div>
  );
}

export default App;

