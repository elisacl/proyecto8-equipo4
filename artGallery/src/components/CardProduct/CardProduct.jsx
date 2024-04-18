import React from "react";
import "./CardProduct.css";

const CardProduct = ({ product, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h2>{product.name}</h2>

        <img
          className="image-product"
          src={product.imageUrl}
          alt={product.name}
        />
        <p>{product.price}</p>
        {product.description && <p>{product.description}</p>}
      </div>
    </div>
  );
};

export default CardProduct;