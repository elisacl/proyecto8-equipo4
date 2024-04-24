import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

export default function Login({ setToken }) {
 const [username, setUserName] = useState();
 const [password, setPassword] = useState();

 const handleSubmit = async e => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos al servidor
    // Por ejemplo, utilizando fetch para hacer una petición POST
 }

 return (
    <div className="login-wrapper">
       <img className="user-image" src="/images/user.png" alt="User image" />
      <form onSubmit={handleSubmit}>
        <label>
          <p className="input-word">Nombre de usuario</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p className="input-word">Contraseña</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
 );
}

Login.propTypes = {
 setToken: PropTypes.func.isRequired
};