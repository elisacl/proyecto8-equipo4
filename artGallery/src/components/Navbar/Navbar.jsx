import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from "../img/logoGallery.svg";
import Cart from "../img/CartIcon.svg";
import User from "../img/UserIcon.svg";
import Lupa from "../img/lupa.svg";


function Navbar() {

  return (

    <nav className="navbar">
      <img src={Logo} alt="logo" className="logoGallery" />

      <div className="navbar-left">
        <ul>
          <p>Obras de Arte</p>
          <p className="contact">Contacto</p>
        </ul>
      </div>

      <div className="navbar-center">
        <ul>
          <img src={User} alt="UserLogo" className="userLogo" />
        </ul>
      </div>

      <div className="navbar-right">
        <img src={Cart} alt="cart" className="cart" />
        <input type="text" placeholder="Buscar..." />
      </div>

    </nav>
  );
}

export default Navbar;