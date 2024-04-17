import { useState, useEffect } from 'react';
import ProductHandler from '../../handler/ProductHandler';


function CardGallery({ selectedCategory, product }) {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    ProductHandler.getFilteredProducts(selectedCategory).then(filteredProducts => {
      setProducts(filteredProducts);
    });
  }, [selectedCategory]);



  return (
    <div className="product-container">
      {products?.map((product, index) => (

        <div key={index} className="card">

          <div className="product-details">
          <div className='product-image-container'>
              <img
                src={product.productImage}
                alt={product.productName}
              />
            </div>

            <div className="product-title">{product.productName}</div>
            <div>{product.productDescription}</div>
            <div>{product.productMeasures}</div>
            <div className="price-details">
              <span className="price">{product.productPrice?.monto} {product.productPrice?.moneda}</span>
            </div>
          </div>

          <div className="add-to-cart">
            <button className="add-to-cart-button">
              <img src="" alt="Añadir al carrito" id="heart-icon" />
            </button>
          </div>

        </div>

      ))}
    </div>
  );
}

export default CardGallery;
