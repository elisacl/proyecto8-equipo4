import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import './ShoppingCart.css';

function ShoppingCart() {
 const { cart, setCart, isOpen, closeModal } = useContext(CartContext);
 const [showBuyContent, setShowBuyContent] = useState(false); 
 
 function removeFromCart(productId) {
    setCart(prevCart => prevCart.filter(product => product.id !== productId));
 }

 
 function handleBuyClick() {
    setShowBuyContent(true); 
 }

 return (
    <div>
      {isOpen && (
        <div className="modal">
          <div className="shopping-card">
            <button className="close-button" onClick={closeModal}> x </button>

            
            {cart.length === 0 ? (
              <div>
                <div>
                 <p className="tu-cesta-empty">Tu cesta está vacía</p>
                </div>
                <div>
                 <img className="empty-cart" src="/images/empty.png" alt="Descripción de la imagen" />
                </div>
                <div className="total-price-container">
                 <hr className="line" />
                 <div className="see-paintings-button-container">
                    <button className="generic-button">Ver obras</button>
                 </div>
                </div>
              </div>
            ) : showBuyContent ? (
              <div>
                <p className="thank-you">¡Gracias por tu compra!</p>
                <div>
                 <img className="delivered" src="/images/delivered.png" alt="Descripción de la imagen" />
                </div>
                <p className="delivered-message">Tu pedido está en camino...</p>
              </div>
            ) : (
              <div className="product-content">
                <p className="tu-cesta">Tu cesta</p>
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
                <div className="total-price-container">
                 <hr className="line" />
                 <div className="total-price-details">
                    <p className="total-price-title">Precio total:    </p>
                    <p className="total-price">{cart.reduce((total, product) => total + product.productPrice.monto, 0)}€</p>
                 </div>
                </div>
                <div className="buy-button-container">
                 <button className="generic-button" id="buy-button" onClick={handleBuyClick}>Comprar</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
 );
}

export default ShoppingCart;