import React from 'react';
import emailjs from 'emailjs-com'

export default function Contacto(){
        function sendEmail(e) {
            e.preventDefault();
        
            emailjs.sendForm('service_ff5436h', 'template_m0ias2f', e.target, 'user_UNFjrU0EbrTk6WDQXTCfx')
              .then((result) => {
                  console.log(result.text);
                  alert('Su mensaje ha sido enviado');
              }, (error) => {
                  console.log(error.text);
              });
          }
    return(
        <>
        <section class="contactame" id="contactame">
        <div class="caja-form" id="caja-form">
            <h3>Contáctame</h3>
            <div class="contacto-form" id="contacto-form">
                <div class="logo-contacto">
                    <img src="img/logo-negro.svg" alt="" />
                </div>
                <div class="formulario" id="formulario">
                    <form name="formulario" id="formularioEmailJS" onSubmit={sendEmail}>
                        <input type="hidden" name="contact_number" />
                        <div class="campo">
                            <label for="nombre"><strong>Nombre completo:</strong></label>
                            <input type="text" id="nombre" name="nombre" placeholder="Escribir aquí..." required="" />
                        </div>
                        <div class="campo">
                            <label for="correo"><strong>Correo electrónico:</strong></label>
                            <input type="email" id="correo" name="correo" placeholder="Escribir aquí..." required="" />
                        </div>
                        <div class="campo">
                            <label for="nombreEmpresa"><strong>Nombre de la empresa:</strong></label>
                            <input type="text" id="nombreEmpresa" name="nombreEmpresa" placeholder="Escribir aquí..." required="" />
                        </div>
                        <div class="campo">
                            <label for="descripcion"><strong>Descripción del proyecto:</strong></label>
                            <textarea name="descripcion" id="descripcion" placeholder="Escriba aquí..." required=""></textarea>
                        </div>
                        <input type="submit" value="Enviar" class="enviar-datos" id="enviar-datos" />
                    </form>
                </div>
            </div>
        </div>
    </section>
    </>
    );
}