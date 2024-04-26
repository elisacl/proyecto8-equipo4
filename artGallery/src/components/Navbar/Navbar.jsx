import {CartContext} from '../contexts/CartContext'
// import { CartProvider } from '../contexts/CartContext';
import React, { useContext } from 'react';
import './Navbar.css';
import Logo from "../img/logoGallery.svg";
import Cart from "../img/CartIcon.svg";
import User from "../img/UserIcon.svg";
import { useNavigate } from "react-router-dom";


function Navbar({ isLogged}) {
  const navigate = useNavigate();

  const { cart, openModal } = useContext(CartContext);
  
  const handleLogoClick = () => {
    navigate('/'); 
  };
  
  const handleLoginClick = () => {
    navigate('/login'); 
  };

  return (
    <nav className="navbar">
      <img src={Logo} alt="logo" className="logoGallery" onClick={handleLogoClick} />
      <div className="navbar-left">
        <ul>
          <button className="button-navbar" id="button-paintings">Obras de arte</button>
          <button className="button-navbar">Contacto</button>
        </ul>
      </div>
      <div className="navbar-center">
        <ul>
          <img src={User} alt="UserLogo" className="userLogo" />
          <button className="button-navbar" onClick={handleLoginClick}>Login</button>
        </ul>
      </div>
      <div className="navbar-right">
        
        <img src={Cart} alt="cart" className="cart" onClick={openModal}/>
        <span className="cart-counter">{cart.length}</span> 
        
        <div className="search-bar-container">
        <input className="search-bar" type="text" placeholder="       Buscar..." />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;





















// import { CartContext } from '../contexts/CartContext';
// import React, { useContext } from 'react';
// import './Navbar.css';
// import Logo from "../img/logoGallery.svg";
// import Cart from "../img/CartIcon.svg";
// import User from "../img/UserIcon.svg";
// import { useNavigate } from "react-router-dom";

// function Navbar({ isLogged}) {
//   const navigate = useNavigate();

//   const { cart, openModal } = useContext(CartContext);

//   return (

//     <nav className="navbar">
//       <img src={Logo} alt="logo" className="logoGallery" />

//       <div className="navbar-left">
//         <ul>
//           <button className="button-navbar" id="button-paintings">Obras de arte</button>
//           <button className="button-navbar">Contacto</button>
//         </ul>
//       </div>

//       <div className="navbar-center">
//         <ul>
//           <img src={User} alt="UserLogo" className="userLogo" />
//           <button className="button-navbar">Login</button>
//         </ul>
//       </div>

//       <div className="navbar-right">
        
//         <img src={Cart} alt="cart" className="cart" onClick={openModal}/>
//         <span className="cart-counter">{cart.length}</span> 
        
//         <div className="search-bar-container">
//         <input className="search-bar" type="text" placeholder="       Buscar..." />
//         </div>
//       </div>

//     </nav>
//   );
// }

// export default Navbar;


