import Contacto from '../components/Contacto'
import infoProyectos from '../helper/infoProyectos'
import {Helmet} from 'react-helmet'

export default function Portafolio(){
    return(
        <>
            <Helmet>
                <title>Wilsite - Portafolio</title>
            </Helmet>

            <section class="proyectos-portafolio" id="proyectos-portafolio">
                <h2>Mi Portafolio</h2>
                <div class="tarjetas-portafolio">
                    {infoProyectos.map((proyecto, index)=>(
                        <div class="tarjeta-proyecto-portafolio" id="tarjeta-proyecto-portafolio" key={index}>
                            <img src={proyecto.cover} alt="" class="img-proyecto" />
                            <div class="texto-proyecto-portafolio" id="texto-proyecto-portafolio">
                                <h4>{proyecto.nombre}</h4>
                                <p>{proyecto.descripcion}</p>
                                <a href={proyecto.enlace} target="_blank "><button class="ver-proyecto-individual">Ver</button></a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Contacto />
        </>
    );
}