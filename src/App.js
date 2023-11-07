import './App.css';
import logo from './imagenes/FreeCodeCamp_logo.png'
import ListaTareas from './componentes/ListaTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='logo-contenedor'>
        <img src={logo} className='logo' />
      </div>
      <div className='tareas-principal'>
        <h1>Mis tareas</h1>
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
