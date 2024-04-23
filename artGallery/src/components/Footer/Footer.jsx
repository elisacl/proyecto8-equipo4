import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "../Footer/Footer.css";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="left-section">
                <div>
                    <h4 className='contact-footer'>Contacto</h4>
                    <div className="contact-info">
                        <a href="https://maps.app.goo.gl/ULUPipbVHFqfJMq7A" target="_blank" alt="Direction">
                            <p>123 Calle Principal, Ciudad Arte, AR</p>
                        </a>
                        <p>+930 778 456</p>
                        <p className="Derechos">© 2024, Gallery ARET - Todos los derechos reservados</p>
                    </div>
                </div>
                <div>
                    <h4 className='time-footer'>Horario</h4>
                    <div className="time-info">
                        <p>Lunes - Viernes: 10:00 - 18:00</p>
                        <p>Sábado: 10:00 - 14:00</p>
                    </div>
                </div>
            </div>
            <div className="social-media">
                <a href="https://www.facebook.com/?locale=es_ES" target="_blank" alt="Facebook">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://twitter.com/home?lang=es" target="_blank" alt="Twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://www.instagram.com/" target="_blank" alt="Instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </div >

        </footer >
    );
};

export default Footer;


