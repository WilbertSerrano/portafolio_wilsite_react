import {Link} from 'react-router-dom'

export default function Nav(){
    return(
        <>
            <nav class="escritorio">
                <div class="logo-escritorio" id="logo-escritorio">
                    <Link to="/"> <img src="./img/logo-horizontal-negro.svg" alt="" /></Link>
                </div>
                <div class="enlaces" id="enlaces">
                    <Link to="/">Inicio</Link>
                    <Link to="/portafolio">Portafolio</Link>
                    <Link to="/sobre-mi">Sobre mí</Link>
                    <Link to="/contacto">Contacto</Link>
                </div>
            </nav>

            <div class="degradado" id="degradado"></div>

            <nav class="movil" id="movil">
                <div class="top-menu">
                    <div class="logo-movil" id="logo-movil">
                        <img src="./img/logo-horizontal-negativo.svg" alt="" />
                    </div>
                    <div class="salir" id="salir"><i class="fas fa-times"></i></div>
                </div>
                <div class="hamburguesa" id="hamburguesa">
                    <Link to="/">Inicio</Link>
                    <Link to="/portafolio">Portafolio</Link>
                    <Link to="/sobre-mi">Sobre mí</Link>
                    <Link to="/contacto">Contacto</Link>
                </div>
            </nav>

            <div class="btnMenu" id="btnMenu"><i class="fas fa-bars"></i></div>
        </>
    );
}