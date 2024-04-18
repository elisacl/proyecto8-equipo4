import React, { useState, useEffect, useRef } from 'react';
import './FormProduct.css';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        title: '',
        description: '',
        dimensions: '',
        price: '',
        category: '',
        image: null,
    });
    const [isEditing, setIsEditing] = useState(false);
    const formRef = useRef(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const productsData = await userService.getAllProducts();
            setProducts(productsData);
        } catch (error) {
            console.error('Error al obtener las obras:', error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name == 'price') {
            const regex = /^\d+(\.\d{0,2})?$/;
            if (value == '' || regex.test(value)) {
                setNewProduct({ ...newProduct, [name]: value });
            }
        } else {
            setNewProduct({ ...newProduct, [name]: value })
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (newProduct.id) {
                await userService.updateProduct(newProduct.id, newProduct);
                alert('Obra actualizada exitosamente');
            } else {
                await userService.addProduct(newProduct);
                alert('Obra agregada exitosamente');
            }
            setNewProduct({
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
        setNewProduct(productToEdit);
        setIsEditing(true);
        formRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const handleDelete = async (productId) => {
        try {
            await userService.deleteProduct(productId);
            alert('Obra eliminada exitosamente');
            fetchData();
        } catch (error) {
            console.error('Error al eliminar la obra:', error);
        }
    };

    const filteredProducts = products.filter((product) => {
        if (selectedCategory.length === 0) {
            return true;
        } else {
            return selectedCategory.includes(product.category);
        }
    });

    const categories = ['Arte abstracto', 'Realismo contemporáneo', 'Expresionismo', 'Arte digital', 'Neo-pop'];

    return (
        <div>

            <div className='add-product'>
                <form className='Form-add-product' ref={formRef} onSubmit={handleSubmit}>
                    <label htmlFor="title">Título:</label>
                    <input
                        type="text"
                        id="title"
                        value={newProduct.title}
                        onChange={(e) =>
                            setNewProduct({ ...newProduct, title: e.target.value })
                        }
                        required
                    />
                    <label htmlFor="description">Descripción:</label>
                    <input
                        type="text"
                        id="description"
                        value={newProduct.description}
                        onChange={(e) =>
                            setNewProduct({ ...newProduct, description: e.target.value })
                        }
                        required
                    />
                    <label htmlFor="dimensions">Dimensiones:</label>
                    <input
                        type="text"
                        id="dimensions"
                        value={newProduct.dimensions}
                        onChange={(e) =>
                            setNewProduct({ ...newProduct, dimensions: e.target.value })
                        }
                        required
                    />
                    <label htmlFor="price">Precio:</label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        value={newProduct.price}
                        onChange={handleChange}
                        inputMode='numeric'
                        pattern='[0-9]*'
                        placeholder='0.00'
                        required
                    />
                    <label htmlFor="category">Categoría:</label>
                    <select
                        id="category"
                        value={newProduct.category}
                        onChange={(e) =>
                            setNewProduct({ ...newProduct, category: e.target.value })
                        }
                        required
                    >
                        <option value="">Selecciona una categoría</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                    <label htmlFor="title">Imágenes:</label>
                    <input
                        type="text"
                        id="title"
                        value={newProduct.image}
                        onChange={(e) =>
                            setNewProduct({ ...newProduct, image: e.target.value })
                        }
                        required
                    />
                    {newProduct.image && (
                        <img
                            src={newProduct.image}
                            alt="Previsualización de la imagen"
                            style={{ maxWidth: "17%", height: "200px" }}
                        />
                    )}

                    <button className='button-add-product' type="submit">
                        {isEditing ? "Actualizar obra" : "Agregar obra"}
                    </button>
                </form>

            </div>

            <div className="product-list">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="product-card">
                        <h3>{product.title}</h3>
                        <img
                            src={product.image}
                            alt={product.title}
                            width={100}
                            height={100}
                        ></img>
                        <p>Dimensiones: {product.dimensions}</p>
                        <p>Precio: {product.price}€</p>
                        <p>Descripción: {product.description}</p>
                        <p>Categoría: {product.category}</p>

                        <div>
                            <button className='btn-cardForm-edit' onClick={() => handleEdit(product.id)}>Editar</button>
                            <button className='btn-cardForm-delete' onClick={() => handleDelete(product.id)}>Eliminar</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
