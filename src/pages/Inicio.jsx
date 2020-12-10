import Contacto from '../components/Contacto'
//import {useEffect} from 'react'
import {Helmet} from 'react-helmet'

export default function Inicio(){
    /*useEffect(()=>{
        //SPLASH
            const splash = document.querySelector('.splash');

            document.addEventListener('DOMContentLoaded', (e)=>{
                setTimeout(()=>{
                    splash.classList.add('display-none');
                }, 2000);
            })
    }, [])*/
    
    return(
        <>
        <Helmet>
            <title>Wilsite - Inicio</title>
            <meta name="descripcion" content="Sitio web del portafolio de Wilsite, un diseñador web especializado en diseño y desarrollo front end" />
        </Helmet>
        <header class="header">
        <div class="texto-header" id="texto-header">
            <p id="hola-header">Hola, soy</p>
            <br/>
            <h1 id="nombre-header">Wilbert Serrano</h1>
            <br/>
            <p id="especialidad-header">Me especializo en Diseño y Desarrollo Front End.</p>
            <br/>
            <a href="/sobre-mi"><button id="btn-header">Sobre Mí</button></a>
        </div>
        <div class="img-header" id="img-header">
            <img src="./img/img-header.png" alt="" />
        </div>
    </header>
    <section class="proyectos-destacados-home" id="proyectos-destacados-home">
        <h2>Proyectos Destacados</h2>
        <div class="tarjetas">
            <div class="tarjeta-proyecto" id="tarjeta-proyecto">
                <img src="./img/cover_dalli.jpg" alt="" class="img-proyecto" />
                <div class="texto-proyecto" id="texto-proyecto">
                    <h4>App Librería Dallí</h4>
                    <p>Diseño de aplicación para una librería que atiende en línea y es dirigida a los estudiantes de diseño gráfico.</p>
                    <a href="https://www.behance.net/gallery/107823847/Libreria-Dalli-App" target="_blank "><button class="ver-proyecto">Ver</button></a>
                </div>
            </div>
            <div class="tarjeta-proyecto" id="tarjeta-proyecto">
                <img src="./img/cover_maketa.jpg" alt="" class="img-proyecto" />
                <div class="texto-proyecto" id="texto-proyecto">
                    <h4>MAKETA</h4>
                    <p>Diseño de sitio web para agencia de diseño de interiores, la cual tiene más de 10 años de experiencia en su sector.</p>
                    <a href="https://www.behance.net/gallery/108795785/MAKETA-Diseno-Web" target="_blank "><button class="ver-proyecto">Ver</button></a>
                </div>
            </div>
        </div>
        <a href="/portafolio"><button class="mas-proyectos" id="mas-proyectos">Más Proyectos</button></a>
    </section>
        <Contacto />
        </>
    );
}