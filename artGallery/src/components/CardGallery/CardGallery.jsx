import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useState, useEffect } from 'react';
import ProductHandler from '../../handler/ProductHandler';
import './CardGallery.css';



function CardGallery({ selectedCategory }) {
  const [products, setProducts] = useState([]);
  const { setCart } = useContext(CartContext);
 
  useEffect(() => {
     ProductHandler.getFilteredProducts(selectedCategory).then(filteredProducts => {
       setProducts(filteredProducts);
     });
  }, [selectedCategory]);
 
  const addToCart = (productToAdd) => {
     setCart(prevCart => [...prevCart, productToAdd]);
  };
 
  return (
     <div className="product-container">
       {products?.map((product, index) => (
         <div key={index} className="card">
           <div className="product-details">
             <div className='product-image-container'>
               <img src={product.productImage} alt={product.productName} />
             </div>
             <div className="product-title">{product.productName}</div>
             <div className="product-description">{product.productDescription}</div>
             <div className="product-measures">{product.productMeasures}</div>
             <div className="price-details">
               <span className="price">{product.productPrice?.monto} {product.productPrice?.moneda}</span>
             </div>
             <div className="add-to-cart">
               <button onClick={() => addToCart(product)} className="add-to-cart-button">
                 <img src="https://i.postimg.cc/VNjYh4ZK/Add-2x.png" id="add-icon"/>
               </button>
             </div>
           </div>
         </div>
       ))}
     </div>
  );
 }
 
 export default CardGallery;
 