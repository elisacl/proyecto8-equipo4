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
                        <p>123 Calle Principal, Ciudad Arte, AR</p>
                        <p>+930 778 456</p>
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
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faInstagram} />
            </div>
        </footer>
    );
};

export default Footer;


//© 2024, Gallery ARET - Todos los derechos reservados