import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h6 className='footer-text' style={textStyle}>© 2024, Gallery ARET - Todos los derechos reservados</h6>
                <div>
                    <a href="https://www.facebook.com/tucuenta" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size="2x" style={iconStyle} />
                    </a>
                    <a href="https://twitter.com/tucuenta" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} size="2x" style={iconStyle} />
                    </a>
                    <a href="https://www.instagram.com/tucuenta" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x" style={iconStyle} />
                    </a>
                </div>
            </div>
    
        </footer>
    );
};

const footerStyle = {
    backgroundColor: '#000000',
    color: '#EBEDEA',
    textAlign: 'center',
    padding: '1rem',
};

const iconStyle = {
    marginRight: '1rem',
    color: '#EBEDEA',
};

const textStyle = {
    margin: '0',
};

export default Footer;
