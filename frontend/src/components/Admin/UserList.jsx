import React, { useState, useEffect } from 'react';
import api from "../../api/config.js";
import axios from 'axios';

const UserList = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await api.get('/admin/userList'); // Update with your API endpoint
        setUserList(response.data);
      } catch (error) {
        console.error('Error fetching user list:', error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <h4>User List</h4>
      <table>
        <thead>
          <tr>
            <th style={{ paddingRight: '12rem' }}>Name</th>
            <th style={{ paddingRight: '12rem' }}>Email</th>
            <th style={{ paddingRight: '12rem' }}>Verified</th>
            <th style={{ paddingRight: '12rem' }}>Delete/Block</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr key={user.id}>
              <td>{user.fullname}</td>
              <td>{user.email}</td>
              <td>{user.verified ? 'Yes' : 'No'}</td>
              <td>
                <button className='btn btn-danger mx-1'>Delete</button>
                <button className='btn btn-danger mx-1'>Block</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
