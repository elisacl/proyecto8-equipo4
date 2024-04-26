import React, { useState } from 'react';

function LoginForm() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
    
    console.log(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };

  const handleLogin = () => {
    const url = 'http://localhost:5000/api/login';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name, password: password })
    })
    .then(response => {
      
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error al iniciar sesión. Por favor, verifica tus credenciales.');
      }
    })
    .then(data => {
      const role = data.role;
      console.log(role)
      
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
          
          window.location.href = '/';
      }
    })
    .catch(error => {
      alert(error.message);
    });
  };

  return (
    
    <div>
      <input type="text" placeholder="Nombre de usuario" value={name} onChange={handleNameChange} />
      <input type="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange} />
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
}

export default LoginForm;




























//   return (
//     <div>
//       <input type="text" placeholder="Nombre de usuario" value={name} onChange={handleNameChange} />
//       <input type="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange} />
//       <button onClick={handleLogin}>Iniciar sesión</button>
//     </div>
//   );
// }

// export default LoginForm;















































  // BLANCA
// #código que funciona
// import React, { useState } from 'react';

// function LoginForm() {
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleLogin = () => {
//     // Aquí puedes enviar los datos de inicio de sesión al backend
//     fetch('http://localhost:5000/api/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ name: name, password: password })
//     })
//     .then(response => {
//       if (response.ok) {
//         // Si la respuesta es exitosa, puedes redirigir al usuario a la siguiente página
//         window.location.href = '/adminpage';
//       } else {
//         // Si hay un error, puedes mostrar un mensaje de error al usuario
//         alert('Error al iniciar sesión. Por favor, verifica tus credenciales.');
//       }
//     })
//     .catch(error => {
//       console.error('Error al enviar la solicitud:', error);
//     });
//   };

//   return (
//     <div>
//       <input type="text" placeholder="Nombre de usuario" value={name} onChange={handleNameChange} />
//       <input type="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange} />
//       <button onClick={handleLogin}>Iniciar sesión</button>
//     </div>
//   );
// }

// export default LoginForm;