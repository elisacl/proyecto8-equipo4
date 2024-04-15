import React from 'react'

const UsersPage = () => {
  return (
    <>

        <div className="formBody">

        <main className="formMain">
          <section>
            <section className="form">
              <label htmlFor="userName">Name</label>
              <input type="text" name="userName" value={inputValues.userName} onChange={handleInputChange} />

              <label htmlFor="userEmail">Email</label>
              <input type="text" name="userEmail" value={inputValues.userEmail} onChange={handleInputChange} />

              <label htmlFor="userPhone">Phone Number</label>
              <input type="number" name="userPhone" value={inputValues.userPhone} onChange={handleInputChange} />

              <Button style={{ backgroundColor: '#22577E', color: 'white', marginLeft: '10px'}} onClick={handleAddUserToList}>{buttonText}</Button>
            </section>
          </section>

             <Table striped bordered hover size="sm" responsive="lg">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                   {userList.map((user, index) => (
                    <tr key={index}>
                      <td>
                        {user.id}
                      </td>
                      <td>
                        {user.userName}
                      </td>
                      <td>
                         {user.userSurname1}
                      </td>
                      <td>
                         {user.userSurname2}
                      </td>
                      <td>
                        {user.userEmail}
                      </td>
                       <td>
                        {user.userPhone}
                      </td>
                      <td>
                          <Button variant="outline-info" size="sm" onClick={() => handleEditUser(user.id)}>Editar</Button>
                      </td>
                      <td>
                          <Button variant="outline-danger" size="sm" onClick={() => handleDeleteUser(user.id)}>Eliminar</Button>
                      </td>
                    </tr>
                    
                 ))}
                </tbody>
            </Table>

          <section className="listButtons">
            <Button style={{ backgroundColor: '#22577E', color: 'white' }} onClick={() => fetchUser()}>Cargar lista</Button>{' '}
            <Link to="/Lottery" className="btn-info-lottery">
            <Button style={{ backgroundColor: '#22577E', color: 'white' }} onClick={() => savedList()}>Ir a Sorteos</Button>
            </Link>
          </section>
          
        </main>
      </div>

    </>
  )
}

export default UsersPage