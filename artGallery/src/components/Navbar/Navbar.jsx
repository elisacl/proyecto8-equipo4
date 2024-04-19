
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../contexts/CartContext';
import './Navbar.css';

function Navbar() {
 const { cart } = useContext(CartContext);

 return (
    <nav className="navbar" style={{ backgroundColor: '#EBEDEA' }}>
      <div className="navbar-left">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/nuestro-arte">Nuestro Arte</Link></li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li>
            <Link to="/carrito">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span>{cart.length}</span> 
            </Link>
          </li>
          <li><Link to="/login">Log in</Link></li>
        </ul>
      </div>
    </nav>
 );
}

export default Navbar;