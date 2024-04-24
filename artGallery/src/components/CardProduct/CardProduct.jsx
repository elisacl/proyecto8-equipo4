import React from "react";
import "./CardProduct.css";
import { useState, useEffect } from 'react';
import axios from "axios";

const CardProduct = ({ onEdit, onDelete }) => {
  const [art, setArt] = useState({
    ID_User: "",
    Title: "",
    Description: "",
    Measurements: "",
    Unit_Price: "",
    Image: "",
    Stock: ""
  });


  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await axios.get("http://localhost:5000/personalgallery");
        setArt(response.data);
      } catch (error) {
        console.error("Error al obtener los datos del servID_Useror:", error);
      }
    };
    fetchAPI();
  }, []);

    return (
        // <div className="product-card">
        //     {/* {art ? (
        //         <>
        //             <p>ID del Artículo: {art.ID_Art}</p>
        //             <p>ID del Usuario: {art.ID_User}</p>
        //             <p>Título: {art.Title}</p> 
        //             <p>Descripción: {art.Description}</p>
        //             <p>Dimensiones: {art.Measurements}</p>
        //             <p>Precio: {art.Unit_Price}</p>
        //             {/* <p>Categoría: {product.Category}</p>  */}
        //             <img
        //                 className="image-product"
        //                 src={art.Image}
        //                 alt={art.Title} 
        //             />
        //             <p>Stock: {art.Stock}</p>
        //         <div>
        //             <button onClick={onEdit}>Editar</button>
        //             <button onClick={onDelete}>Eliminar</button>
        //         </div>
        //         </>
        //     ) : (
        <p></p>
        //     )} */}
        // </div>
    );
};

export default CardProduct;