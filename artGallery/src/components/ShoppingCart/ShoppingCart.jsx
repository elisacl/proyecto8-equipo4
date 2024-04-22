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
      {isOpen && (
        <div className="modal">
          <div className="shopping-card">
            <p className="tu-cesta">Tu cesta</p>

            <div className="product-content">
              {cart.map(product => (
                <div key={product.id} className="product-container">
                  <div className="painting-image-container">
                    <img className="painting-image" src={product.productImage} alt={product.productName} />
                  </div>

                  <div className="painting-details">
                    <p className="painting-title">{product.productName}</p>
                    <p className="painting-description">{product.productDescription}</p>
                    <p className="painting-measures">{product.productMeasures}</p>

                    <div className="painting-delete-button-and-price-container">
                      <p className="painting-price">{product.productPrice.monto} {product.productPrice.moneda}</p>
                      <button className="painting-delete-button" onClick={() => removeFromCart(product.id)}>
                        <img className="trash-icon" src="/images/trash-icon.svg" alt="Eliminar" />
                      </button>
                    </div>

                  </div>


                </div>


              ))}
            </div>


            <div className="total-price-container">
              <hr className="line" />
              <div className="total-price-details">
              <p className="total-price">Total: </p>
              <p className="total-price">{cart.reduce((total, product) => total + product.productPrice.monto, 0)}€</p>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;