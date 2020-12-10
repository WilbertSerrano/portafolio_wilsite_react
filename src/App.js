import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {useEffect} from 'react'
//Componentes
import Nav from './components/Nav'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
//Pagina
import Inicio from './pages/Inicio'
import Portafolio from './pages/Portafolio'
import SobreMi from './pages/SobreMi'
import Error from './pages/Error'


export default function App() {
  useEffect(()=>{
    //MENÚ
    //Variables
    const menu = document.querySelector('#movil');
    const degradado = document.querySelector('#degradado');
    const btnMenu = document.querySelector('#btnMenu');
    const btnSalir = document.querySelector('#salir');
    const enlaces = document.querySelectorAll('.link');

    //Eventos
    btnMenu.addEventListener('click', mostrarMenu);
    btnSalir.addEventListener('click', ocultarMenu);
    document.addEventListener('keydown', filtroTecla);
    degradado.addEventListener('click', ocultarMenu);
    enlaces.forEach(enlace=>{
        enlace.addEventListener('click', ocultarMenu);
    })

    //Funciones
    function filtroTecla(e){
        e.keyCode===27 && ocultarMenu();
    }
    function mostrarMenu(){
        menu.style.left = '0';
        degradado.style.display = 'block';
        setTimeout(() => {
            degradado.style.background = 'rgba(0, 0, 0, .75)';
        }, 10);
    }

    function ocultarMenu(){
        menu.style.left = '-80%';
        degradado.style.background = 'rgba(0, 0, 0, 0)';
        setTimeout(() => {
            degradado.style.display = 'none';
        }, 250);
    }
  },[]);
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Inicio}/>
        <Route exact path="/sobre-mi" component={SobreMi}/>
        <Route exact path="/portafolio" component={Portafolio}/>
        <Route exact path="/contacto" component={Contacto}/>
        <Route component={Error}/>
      </Switch>
      <Footer />
    </Router>
  );
}