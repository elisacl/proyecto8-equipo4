import React, { useState, useEffect } from 'react';
import axios from "axios";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    nombre: "",
    email: "",
    telefono: "",
    direccion: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`http://localhost:5000/adminpage/${formData.id}`);
      console.log(response.data);
      // Actualizar la lista de usuarios después de eliminar uno
      setUsers(users.filter(user => user.id !== formData.id));
      // Limpiar el formulario después de eliminar
      setFormData({
        id: "",
        nombre: "",
        email: "",
        telefono: "",
        direccion: ""
      });
    } catch (error) {
      console.error("Error al enviar la solicitud de eliminación al servidor:", error);
    }
  };

  const handleEdit = (user) => {
    setFormData({
      id: user.id,
      nombre: user.name,
      email: user.email,
      telefono: user.phone,
      direccion: user.direccion
    });
  };

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await axios.get("http://localhost:5000/adminpage");
        console.log(response.data);
        setUsers(response.data);
      } catch (error) {
        console.error("Error al obtener los datos del servidor:", error);
      }
    };
    fetchAPI();
  }, []);

  return (
    <>
      <h1>Usuarios registrados</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo Electrónico</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <button onClick={() => handleEdit(user)}>
                  Editar
                </button>
                <button onClick={() => setFormData({ ...formData, id: user.id })}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <form onSubmit={handleSubmit}>
        <input
          type="hidden"
          id="id"
          name="id"
          value={formData.id}
          onChange={handleChange}
        />
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="telefono">Teléfono:</label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          required
        />
      
        <button type="submit">Eliminar Usuario</button>
      </form>
    </>
  );
}

export default UsersPage;

