import React, { useState, useEffect } from 'react';
import './FormProduct.css';
// import CardProduct from '../CardProduct/CardProduct';
import axios from "axios";

const ArtisticsPage = () => {
  const [art, setArt] = useState([]);
  const [formData, setFormData] = useState({
    ID_User: "",
    Title: "",
    Description: "",
    Measurements: "",
    Unit_Price: "",
    Image: "",
    Stock: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

    const handleSubmitCreate = async (e) => {
    e.preventDefault();
    const arts = {
        ID_User: formData.ID_User,
        Title: formData.Title,
        Description: formData.Description,
        Measurements: formData.Measurements,
        Unit_Price: formData.Unit_Price,
        Image: formData.Image,
        Stock: formData.Stock
      }
    try {
       await axios.post(`http://localhost:5000/personalgallery/create`, arts);

       const response = await axios.get("http://localhost:5000/personalgallery");
       setArt(response.data);
    } catch (error) {
      console.error("Error al enviar la solicitud de eliminación al servID_Useror:", error);
    }
  };

    const handleSubmitUpdate = async (e) => {
          e.preventDefault();
        const arts = {
            ID_Art: formData.ID_Art,
            ID_User: formData.ID_User,
            Title: formData.Title,
            Description: formData.Description,
            Measurements: formData.Measurements,
            Unit_Price: formData.Unit_Price,
            Image: formData.Image,
            Stock: formData.Stock
         }
          try {
            await axios.put(`http://localhost:5000/personalgallery/update`, arts);

            const response = await axios.get("http://localhost:5000/personalgallery");
            setArt(response.data);
          } catch (error) {
            console.error("Error al enviar la solicitud de eliminación al servID_Useror:", error);
          }
     };

  const handleEdit = (arts) => {
    setFormData({
      ID_Art:arts.ID_Art,
      ID_User: arts.ID_User,
      Title: arts.Title,
      Description: arts.Description,
      Measurements: arts.Measurements,
      Unit_Price: arts.Unit_Price,
      Image: arts.Image,
      Stock: arts.Stock
    });
  };

  const handleDelete = async (arts) => {
  const id = arts.ID_Art;
  try {
    await axios.delete(`http://localhost:5000/personalgallery/remove`, { data: { "ID_Art": id } });
    const response = await axios.get("http://localhost:5000/personalgallery");
    setArt(response.data);
  } catch (error) {
    console.error("Error al enviar la solicitud de eliminación al servidor:", error);
  }
};

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await axios.get("http://localhost:5000/personalgallery");
        setArt(response.data);
      } catch (error) {
        console.error("Error al obtener los datos del servidor:", error);
      }
    };
    fetchAPI();
  }, []);

  return (
    <div>
      <div className='add-product'>
        <form className='Form-add-product' onSubmit={handleSubmitCreate}>
          <h1>Publica tu obra</h1>
          <div className='form-group'>
            <label htmlFor="ID_User">Artista:</label>
            <input
              className='form-input'
              type="number"
              id="ID_User"
              name="ID_User"
              value={formData.ID_User}
              onChange={handleChange}
              required
            />
            <label htmlFor="title">Título:</label>
            <input
              className='form-input'
              type="text"
              id="title"
              name="Title"
              value={formData.Title}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor="description">Descripción:</label>
            <input
              className='form-input'
              type="text"
              id="description"
              name="Description"
              value={formData.Description}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor="measurements">Dimensiones:</label>
            <input
              className='form-input'
              type="text"
              id="measurements"
              name="Measurements"
              value={formData.Measurements}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor="price">Precio:</label>
            <input
              className='form-input'
              type="text"
              id="price"
              name="Unit_Price"
              value={formData.Unit_Price}
              onChange={handleChange}
              inputMode='numeric'
              pattern='[0-9]*'
              placeholder='0.00'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor="image">Imagen:</label>
            <input
              className='form-input'
              type="text"
              id="image"
              name="Image"
              value={formData.Image}
              onChange={handleChange}
              required
            />
            {formData.Image && (
              <img
                src={formData.Image}
                alt="Previsualización de la imagen"
                style={{ maxWidth: "50%", height: "200px" }}
              />
            )}
          </div>
          <div className='form-group'>
            <label htmlFor="stock">Stock:</label>
            <input
              className='form-input'
              type="text"
              id="stock"
              name="Stock"
              value={formData.Stock}
              onChange={handleChange}
              required
            />
          </div>
          <button className='button-add-product' type="submit" onClick={handleSubmitCreate}>
            Agregar obra
          </button>
           <button className='button-add-product' type="submit" onClick={handleSubmitUpdate}>
            Editar obra
          </button>
        </form>
      </div>

      <div className='product-container'>
        {art.map((arts, index) => (
          <div key={index} className='card'>
            <div className='product-details'>
              <div className='card-product'>
                <img src={arts.Image} alt='{arts.Image}' />
              </div>
            <div className='product-title'>{arts.Title}</div>
            <div className='product-description'>{arts.Description}</div>
            <div className='product-measures'>{arts.Measurements}</div>
            <span className='price'>{arts.Unit_Price}</span>
            <div className='product-stock'>{arts.Stock}</div>
             <div><button className='generic-button' onClick={() => handleEdit(arts)}>Editar</button></div>
              {arts.ID_Art && (
            <div><button className='generic-button' onClick={() => { console.log(arts.ID_Art); handleDelete(arts); }}>Eliminar</button></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtisticsPage;