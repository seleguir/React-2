import logo from './logo.svg';
import './App.css';
import Galeria from './components/e1/Galeria';
import Formulario from './components/e2/Formulario'; 
import Juego from './components/e3/Juego';
import Botones from './components/e4/Botones'; 
import AplicacionDeNotas from './components/e5/AplicacionDeNotas';

function App() {
  return (
    <div className="App">
      <Galeria/>
      <Formulario/>
      <Juego/>
      <Botones/>
      <AplicacionDeNotas/>
    </div>
  );
}

export default App;
