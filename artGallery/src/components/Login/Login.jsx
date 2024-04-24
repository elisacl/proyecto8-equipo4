import React, { useState } from 'react';
<<<<<<< HEAD
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
=======
import './Login.css'
import UserLogo from "../img/imgUser.png"
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
    console.log(555555555555);
    console.log(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };

  const handleLogin = () => {
    fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name, password: password })
    })
    .then(response => {
      
      if (response.ok) {
        return response.json(); // Convertir la respuesta a JSON
      } else {
        throw new Error('Error al iniciar sesión. Por favor, verifica tus credenciales.');
      }
    })
    .then(data => {
      const role = data.role;
      console.log(role)
      // Verificar el tipo de usuario y redirigirlo a la página correspondiente
      switch(role) {
        
        case 'Admin':
          window.location.href = '/adminpage';
          break;
        case 'Artist':
          window.location.href = '/personalgallery';
          break;
        case 'Cliente':
          window.location.href = '/';
          break;
        default:
          // Si el rol no está definido, redirigir a una página de error o a la página principal
          window.location.href = '/';
      }
    })
    .catch(error => {
      alert(error.message);
    });
  };
  return (
    <section className="h-100 gradient-form" style={{backgroundColor: ""}}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img src={UserLogo} style={{width: "30px"}} alt="logoUser" />
                      {/* <img src={artistaimg} style={{width: "36px"}} alt="lUser" /> */}
                    </div>
                    <form className='form_datos'>
                      {/* <p id='text_welc'>Por favor ingrese a su cuenta</p> */}
                      <label className="form-label1" htmlFor="form2Example11">Nombre de Usuario</label>
                      <div className="form-user">
                      <input type="text" id="form2Example11" className="form-control" placeholder="" value={name} onChange={handleNameChange} />
                      </div>
                      <label className="form-label2" htmlFor="form2U">Contraseña</label>
                      <div className="form-pasw">
                        <input type="password" id="form2P" className="form-control" placeholder="" value={password} onChange={handlePasswordChange} />
                      </div>
                      <div className="text-center pt-1 mb-5 pb-1">
                        <button id='btn_log' className="btn btn-dark btn-block fa-lg gradient-custom-2 mb-3" type="button" onClick={handleLogin}>Log in</button>
                        <a className="text-muted" href="#!"></a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
>>>>>>> 6d7c7b58dcf6a720d72d663eee4de424ca7dd4f6
