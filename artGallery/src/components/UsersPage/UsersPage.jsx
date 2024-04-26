import React, { useState, useEffect } from 'react';
import axios from "axios";
import './UsersPage.css'

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    ID_Usertype: "",
    Name: "",
    Phone: "",
    Email: "",
    Password: ""
  });

  const clearForm = () => {
  setFormData({
    ID_Usertype: "",
    Name: "",
    Phone: "",
    Email: "",
    Password: ""
  });
};

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

    const handleSubmitCreate = async (e) => {
  e.preventDefault();
  const user = {
    ID_Usertype: formData.ID_Usertype,
    Name: formData.Name,
    Phone: formData.Phone,
    Email: formData.Email,
    Password: formData.Password
  };
  try {
    await axios.post(`http://localhost:5000/adminpage/create`, user);

    const response = await axios.get("http://localhost:5000/adminpage");
    setUsers(response.data);

    clearForm();
  } catch (error) {
    console.error("Error al enviar la solicitud de eliminación al servidor:", error);
  }
};
  const getUserType = (id) => {
  switch(id) {
    case 1:
      return "Administrador";
    case 2:
      return "Artista";
    case 3:
      return "Cliente";
    default:
      return "Desconocido";
  }
};

const handleSubmitUpdate = async (e) => {
  e.preventDefault();
  const user = {
    ID_User: formData.ID_User,
    ID_Usertype: formData.ID_Usertype,
    Name: formData.Name,
    Phone: formData.Phone,
    Email: formData.Email,
    Password: formData.Password
  };
  try {
    await axios.put(`http://localhost:5000/adminpage/update`, user);

    const response = await axios.get("http://localhost:5000/adminpage");
    setUsers(response.data);

    clearForm();
  } catch (error) {
    console.error("Error al enviar la solicitud de eliminación al servidor:", error);
  }
};

  const handleEdit = (user) => {
    setFormData({
      ID_User:user.ID_User,
      ID_Usertype: user.ID_Usertype,
      Name: user.Name,
      Phone: user.Phone,
      Email: user.Email,
      Password: user.Password
    });
  };

    const handleDelete =async (user) => {
     const id = user.ID_User
          try {
            await axios.delete(`http://localhost:5000/adminpage/remove`, {data: {"ID_User": id}});

            const response = await axios.get("http://localhost:5000/adminpage");
            setUsers(response.data);
          } catch (error) {
            console.error("Error al enviar la solicitud de eliminación al servidor:", error);
          }
   };

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await axios.get("http://localhost:5000/adminpage");
        setUsers(response.data);
      } catch (error) {
        console.error("Error al obtener los datos del servID_Useror:", error);
      }
    };
    fetchAPI();
  }, []);

  

  return (
    <>
    <div className='adminpage-container'>
      <form className='form-container'>
        <div className='input-container'>
        <label htmlFor="Name">Name:</label>
        <input
        className='input-name'
          type="text"
          id="Name"
          name="Name"
          value={formData.Name}
          onChange={handleChange}
          required
        />
       </div>
       <div className='input-container'>
        <label htmlFor="Email">Correo Electrónico:</label>
        <input
        className='input-email'
          type="Email"
          id="Email"
          name="Email"
          value={formData.Email}
          onChange={handleChange}
          required
        />
       </div>
         <div className='input-container'>
           <label htmlFor="Email">Teléfono:</label>
            <input
            className='input-phone'
              type="Phone"
              id="Phone"
              name="Phone"
              value={formData.Phone}
              onChange={handleChange}
              required
            />
          </div>

         <div className='input-container'>
            <label htmlFor="Password">Contrasena:</label>
            <input
            className='input-pass'
              type="number"
              id="Password"
              name="Password"
              value={formData.Password}
              onChange={handleChange}
              required
            />
         </div>
       
          <div className='input-container'>
            <label htmlFor="Name">ID usertype:</label>
            <select className='selectadmin' name="ID_Usertype" id="ID_Usertype" value={formData.ID_Usertype} onChange={handleChange}>
              <option value={1} >Administrador</option>
              <option value={2} >Cliente</option>
              <option value={3} >Artista</option>
            </select>
          </div>
        
       <div className='button-form-container'>
          <button className='button_form' type="submit" onClick={handleSubmitCreate}>Añadir Usuario</button>
          <button className='button_form' type="submit" onClick={handleSubmitUpdate}>Editar Usuario</button>
       </div>
      </form>
     

      <section className='tabla_usuarios'>
        <h1>Usuarios registrados</h1>
        <table id='table_content'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tipo de usuario</th>
              <th>Name</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Acciones</th>
           </tr>
          </thead>
          <tbody>
           {users.map((user, index) => (
              <tr key={index}>
                <td className='user-data'>{user.ID_User}</td>
                <td className='user-data'>{getUserType(user.ID_Usertype)}</td>
                <td className='user-data'>{user.Name}</td>
                <td className='user-data'>{user.Phone}</td>
                <td className='user-data'>{user.Email}</td>
                <td>
                 <button className='botones_admin_btn' onClick={() => handleEdit(user)}>
                  Editar
                 </button>
                 <button className='botones_admin_btn' onClick={() => handleDelete(user)}>
                  Eliminar
                 </button>
                </td>
              </tr>
           ))}
          </tbody>
       </table>
      </section>
    </div>
    </>
  );
}

export default UsersPage;