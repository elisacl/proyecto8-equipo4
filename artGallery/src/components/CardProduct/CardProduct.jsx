import React from "react";
import "./CardProduct.css";

const CardProduct = ({ product, onEdit, onDelete }) => {
    return (
        <div className="product-card">
            {product && (
                <>
                    <p>{product.title}</p> 
                    <p>{product.description}</p>
                    <p>{product.dimensions}</p>
                    <p>{product.price}</p>
                    <p>{product.category}</p> 
                    <img
                        className="image-product"
                        src={product.image}
                        alt={product.title} 
                    />
                    <div>
                        <button onClick={onEdit}>Editar</button>
                        <button onClick={onDelete}>Eliminar</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default CardProduct;