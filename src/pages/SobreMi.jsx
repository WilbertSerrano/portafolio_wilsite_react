import Contacto from '../components/Contacto'
import {Helmet} from 'react-helmet'

export default function SobreMi(){
    return(
        <>
            <Helmet>
                <title>Wilsite - Sobre mí</title>
            </Helmet>

            <section class="sobre-mi">
                <div class="foto-sobre-mi">
                    <img src="./img/img-header.png" alt="" />
                </div>
                <div class="info-sobre-mi">
                    <h2>Sobre mí</h2>
                    <p>Me especializo en crear sitios web con un diseño minimalista y responsive para que te comuniques de manera eficiente con tus clientes.</p>
            
                    <a href="https://drive.google.com/file/d/1bxyh872O13ZndqMcUv05Bb1MI7KprO62/view?usp=sharing" target="_blank "><button>Descargar CV</button></a>
                </div>
            </section>
            <section class="habilidades">
                <h2>Habilidades</h2>
                <div class="contenedores-habilidades">
                    <div class="container">
                        <h2>Desarrollador</h2>
                        <div class="skills">
                            <span class="Name">Html</span>
                            <div class="percent">
                                <div class="progress" style={{ width: '90%' }}></div>
                            </div>
                            <span class="Value">90%</span>
                        </div>
                        <div class="skills">
                            <span class="Name">CSS</span>
                            <div class="percent">
                                <div class="progress" style={{ width: '80%' }}></div>
                            </div>
                            <span class="Value">80%</span>
                        </div>
                        <div class="skills">
                            <span class="Name">SASS</span>
                            <div class="percent">
                                <div class="progress" style={{ width: '90%' }}></div>
                            </div>
                            <span class="Value">90%</span>
                        </div>
                        <div class="skills">
                            <span class="Name">Javascript</span>
                            <div class="percent">
                                <div class="progress" style={{ width: '70%' }}></div>
                            </div>
                            <span class="Value">70%</span>
                        </div>
                        <div class="skills">
                            <span class="Name">React</span>
                            <div class="percent">
                                <div class="progress" style={{ width: '50%' }}></div>
                            </div>
                            <span class="Value">50%</span>
                        </div>
                    </div>
                    <div class="container">
                        <h2>Diseñador</h2>
                        <div class="skills">
                            <span class="Name">Adobe XD</span>
                            <div class="percent">
                                <div class="progress" style={{ width: '85%' }}></div>
                            </div>
                            <span class="Value">85%</span>
                        </div>
                        <div class="skills">
                            <span class="Name">Photoshop</span>
                            <div class="percent">
                                <div class="progress" style={{ width: '80%' }}></div>
                            </div>
                            <span class="Value">80%</span>
                        </div>
                        <div class="skills">
                            <span class="Name">Lightroom</span>
                            <div class="percent">
                                <div class="progress" style={{ width: '90%' }}></div>
                            </div>
                            <span class="Value">90%</span>
                        </div>
                        <div class="skills">
                            <span class="Name">Illustrator</span>
                            <div class="percent">
                                <div class="progress" style={{ width: '70%' }}></div>
                            </div>
                            <span class="Value">70%</span>
                        </div>
                        <div class="skills">
                            <span class="Name">Premiere</span>
                            <div class="percent">
                                <div class="progress" style={{ width: '70%' }}></div>
                            </div>
                            <span class="Value">70%</span>
                        </div>
                    </div>
                </div>
            </section>
            <Contacto />
        </>
    );
}