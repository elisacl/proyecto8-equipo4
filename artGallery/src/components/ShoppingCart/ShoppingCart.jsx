import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import './ShoppingCart.css'; 

function ShoppingCart() {
 const { cart, setCart, isOpen, openModal } = useContext(CartContext);

 // Función para cerrar el modal
 function closeModal() {
   openModal(false); // Asegúrate de que la función openModal pueda aceptar un valor booleano
 }

 // Función para eliminar un producto del carrito
 function removeFromCart(productId) {
    setCart(prevCart => prevCart.filter(product => product.id !== productId));
 }

 return (
    <div>
      {/* Aquí iría el código para mostrar el modal si isOpen es true */}
      {isOpen && (
        <div className="modal">
          <div className="shopping-card">
            <h1>Carrito</h1>
            {cart.map(product => (
              <div key={product.id}>
                <img src={product.productImage} alt={product.productName} />
                <h3>{product.productName}</h3>
                <p>{product.productDescription}</p>
                <p>{product.productPrice.monto} {product.productPrice.moneda}</p>
                <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
              </div>
            ))}
          </div>
          
        </div>
      )}
    </div>
 );
}

export default ShoppingCart;