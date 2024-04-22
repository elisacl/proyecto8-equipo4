import React, { useState, useEffect, useRef } from 'react';
import './FormProduct.css';
import CardProduct from '../CardProduct/CardProduct';
import { getAllProducts } from '../../apiUtils.jsx';

const FormProduct = () => {
    const [products, setProducts] = useState([]);
    // const [selectedProductId, setSelectedProductId] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        dimensions: '',
        price: '',
        category: '',
        image: '',
    });
    const formRef = useRef(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const productsData = await getAllProducts();
            setProducts(productsData);
        } catch (error) {
            console.error('Error al obtener las obras:', error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (isEditing) {
                // Aquí va la lógica para actualizar la obra
            } else {
                // Aquí la lógica para agregar la obra
            }
            setFormData({
                title: '',
                description: '',
                dimensions: '',
                price: '',
                category: '',
                image: '',
            });
            setIsEditing(false);
            fetchData();
        } catch (error) {
            console.error('Error al guardar la obra:', error);
        }
    };

    const handleEdit = async (productId) => {
        const productToEdit = products.find((product) => product.id === productId);
        const { title, description, dimensions, price, category, image } = productToEdit;
        setFormData({
            title: title || '',
            description: description || '',
            dimensions: dimensions || '',
            price: price || '',
            category: category || '',
            image: image || '',
        });
    };

    const handleDelete = (productId) => {
        try {
            const updatedProducts = products.filter(product => product.id !== productId);
            setProducts(updatedProducts);
            alert('Obra eliminada exitosamente');
        } catch (error) {
            console.error('Error al eliminar la obra:', error);
        }
    };

    const categories = ['Arte abstracto', 'Realismo contemporáneo', 'Expresionismo', 'Arte digital', 'Neo-pop'];

    return (
        <div>
            <div className='add-product'>
                <form className='Form-add-product' ref={formRef} onSubmit={handleSubmit}>
                    <h1>Publica tu obra</h1>
                    <div className='form-group'>
                        <label htmlFor="title">Título:</label>
                        <input className='form-input'
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="description">Descripción:</label>
                        <input className='form-input'
                            type="text"
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="dimensions">Dimensiones:</label>
                        <input className='form-input'
                            type="text"
                            id="dimensions"
                            name="dimensions"
                            value={formData.dimensions}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="price">Precio:</label>
                        <input className='form-input'
                            type="text"
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            inputMode='numeric'
                            pattern='[0-9]*'
                            placeholder='0.00'
                            required
                        />
                    </div>
                    <div className='formgroup'>
                        <label htmlFor="category">Categoría:</label>
                        <select className='form-select'
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Selecciona una categoría</option>
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="image">Imagen:</label>
                        <input className='form-input'
                            type="text"
                            id="image"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            required
                        />
                        {formData.image && (
                            <img
                                src={formData.image}
                                alt="Previsualización de la imagen"
                                style={{ maxWidth: "17%", height: "200px" }}
                            />
                        )}
                    </div>
                    <button className='button-add-product' type="submit">
                        {isEditing ? "Actualizar obra" : "Agregar obra"}
                    </button>
                </form>
            </div>

            <div className="product-list">
                {products.map((product) => (
                    <CardProduct 
                        key={product.id}
                        product={product}
                        onEdit={() => handleEdit(product.id)}
                        onDelete={() => handleDelete(product.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default FormProduct;