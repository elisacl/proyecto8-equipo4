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
        <p>Continua agregando tus obras</p>
        // </div>
    );
};

export default CardProduct;