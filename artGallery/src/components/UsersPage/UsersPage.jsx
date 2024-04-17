import React, { useState, useEffect } from 'react';
import axios from "axios";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  const fetchAPI = async () => {
    try {
      const response = await axios.get("http://localhost:5000/adminpage");
      console.log(response.data);
      setUsers(response.data);
    } catch (error) {
      console.error("Error al obtener los datos del servidor:", error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <h1>Holaaaaaa</h1>
      <p>
        {users.map((user, index) => (
          <span key={index}>{user}</span>
        ))}
      </p>
    </>
  );
}

export default UsersPage;