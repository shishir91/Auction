import React, { useState } from 'react'

const UserList = () => {

  const [items, setItems] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', verified: true, action: 'block' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', verified: false, action: 'delete' },
  ]);





  return (
    <div>
      <table>
        <thead>
          <tr>
            <th style={{ paddingRight: "12rem" }}>Name</th>
            <th style={{ paddingRight: "12rem" }}>Email</th>
            <th style={{ paddingRight: "12rem" }}>Verified</th>
            <th style={{ paddingRight: "12rem" }}>Delete/Block</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.verified ? 'Yes' : 'No'}</td>
              <td>
                <button className='btn btn-danger mx-1'>Delete</button>
                <button className='btn btn-danger mx-1'>Block</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


    </div>
  )
}

export default UserList
