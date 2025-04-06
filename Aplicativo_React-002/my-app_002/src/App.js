import './App.css';
import Menu from './Menu';
import Contador from './hooks_de_estado';

function App(props) {
  return (
    <div className="App">
      <Menu /> 
      <Contador />
    </div>
  );
}

export default App;
