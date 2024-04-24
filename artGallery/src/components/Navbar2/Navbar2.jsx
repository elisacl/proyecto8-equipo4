import './Navbar2.css';
import Logo from "../img/logoGallery.svg";
import Cart from "../img/CartIcon.svg";
import User from "../img/UserIcon.svg";

function Navbar() {


  return (

    <nav className="navbar">
      <img src={Logo} alt="logo" className="logoGallery" />

      <div className="navbar-left">
        <ul>
          <button className="button-navbar" id="button-paintings">Obras de arte</button>
          <button className="button-navbar">Contacto</button>
        </ul>
      </div>

      <div className="navbar-center">
        <ul>
          <img src={User} alt="UserLogo" className="userLogo" />
          <button className="button-navbar">Login</button>
        </ul>
      </div>

      <div className="navbar-right">
        
        <img src={Cart} alt="cart" className="cart" />
        
        <div className="search-bar-container">
        <input className="search-bar" type="text" placeholder="       Buscar..." />
        </div>
      </div>

    </nav>
  );
}

export default Navbar;


