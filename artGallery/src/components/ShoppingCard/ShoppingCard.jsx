import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import './ShoppingCard.css'; 

function ShoppingCard() {
 const { cart, setCart } = useContext(CartContext);

 function removeFromCart(productId) {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
 }

 return (
    <div className="shopping-card">
      {cart.map(item => (
        <div key={item.id}>
          <img src={item.productImage} alt={item.productName} />
          <h3>{item.productName}</h3>
          <p>{item.productDescription}</p>
          <p>{item.productPrice.monto} {item.productPrice.moneda}</p>
          <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
      ))}
    </div>
 );
}

export default ShoppingCard;