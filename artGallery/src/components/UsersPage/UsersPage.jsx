import React, { useState, useEffect } from 'react';
import axios from "axios";
import './UsersPage.css'

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    ID_Usertype: 1,
    Name: "",
    Phone: "",
    Email: "",
    Password: ""
  });

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
      }
    try {
       await axios.post(`http://localhost:5000/adminpage/create`, user);

       const response = await axios.get("http://localhost:5000/adminpage");
       setUsers(response.data);
    } catch (error) {
      console.error("Error al enviar la solicitud de eliminación al servID_Useror:", error);
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
            }
          try {
            await axios.put(`http://localhost:5000/adminpage/update`, user);

            const response = await axios.get("http://localhost:5000/adminpage");
            setUsers(response.data);
          } catch (error) {
            console.error("Error al enviar la solicitud de eliminación al servID_Useror:", error);
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
            console.error("Error al enviar la solicitud de eliminación al servID_Useror:", error);
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
    <div className='header-usersPage'>
      <img className='logo-gallery' src="https://i.postimg.cc/pVK9c8tZ/logo1-1.png" alt="logo Galería" />
      <h1 className='header-h1'>Administrador de usuarios</h1>
    </div>
    <form className='form-container'>
      <h2>registro de usuarios</h2>
      <div className="form-field">
        <label htmlFor="Name">Name:</label>
        <input
          type="text"
          id="Name"
          name="Name"
          value={formData.Name}
          onChange={handleChange}
          required
        />
      </div>
       <div>
        <label htmlFor="Email">Correo Electrónico:</label>
        <input
          type="Email"
          id="Email"
          name="Email"
          value={formData.Email}
          onChange={handleChange}
          required
        />
       </div>
         <div>
           <label htmlFor="Email">Teléfono:</label>
            <input
              type="Phone"
              id="Phone"
              name="Phone"
              value={formData.Phone}
              onChange={handleChange}
              required
            />
          </div>

         <div>
            <label htmlFor="Password">Contrasena:</label>
            <input
              type="number"
              id="Password"
              name="Password"
              value={formData.Password}
              onChange={handleChange}
              required
            />
            
         </div>
       
          <div>
            <label htmlFor="Name">ID usertype:</label>
            <select className='ID_User_Usertype'name="ID_User_Usertype" id="ID_User_Usertype" value={formData.ID_Usertype} onChange={handleChange}>
              <option value={1} >Administrador</option>
              <option value={2} >Cliente</option>
              <option value={3} >Artista</option>
            </select>
          </div>
        
       <div style={{padding:"20px"}}>
          <button type="submit" onClick={handleSubmitCreate} className='form-button'>Añadir Usuario</button>
          
          </div>
    
      </form>
      <table className='section'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Usuario tipo</th>
            <th>Name</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Dato</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.ID_User}</td>
              <td>{user.ID_Usertype}</td>
              <td>{user.Name}</td>
              <td>{user.Phone}</td>
              <td>{user.Email}</td>
              <td>
                <button onClick={() => handleEdit(user)}>
                  Editar
                </button>
                <button onClick={() => handleDelete(user)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <div style={{padding:"20px"}}>
         <button type="submit" onClick={handleSubmitUpdate} className='form-button'>Editar Usuario</button>
      </div>
      </table>
     
    </>
  );
}

export default UsersPage;


