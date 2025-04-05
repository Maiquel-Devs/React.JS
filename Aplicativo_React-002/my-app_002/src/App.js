import './App.css';
import Menu from './Menu';

function App(props) {
  return (
    <div className="App">
      <h2>{props.texto}</h2>
      <Menu /> 
    </div>
  );
}

export default App;
