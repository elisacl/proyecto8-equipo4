import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar" style={{ backgroundColor: '#EBEDEA' }}>
      <div className="navbar-left">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/nuestro-arte">Nuestro Arte</Link></li>
          <li><Link to="/artistas">Artistas</Link></li>
          <li><Link to="/exhibiciones">Exhibiciones</Link></li>
          <li><Link to="/colaboraciones">Colaboraciones</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </div>

      <div className="navbar-center">
        <input type="text" placeholder="Buscar..." />
      </div>

      <div className="navbar-right">
        <ul>
          <li><Link to="/carrito"><FontAwesomeIcon icon={faShoppingCart} /></Link></li>
          <li><Link to="/login">Log in</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;