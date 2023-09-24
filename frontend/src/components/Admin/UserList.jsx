import React, { useState, useEffect } from 'react';
import api from "../../api/config.js";
import axios from 'axios';

const UserList = () => {
  const [userList, setUserList] = useState([]);

  async function deleteUser(userId, username) {
    const response = await api.delete(`/admin/deleteUser?id=${userId}`)
    if (response.data.success === true) {
      alert("User Deleted");
    }
  }
  async function blockUser(userId, username) {
    const response = await api.post(`/admin/blockUser?id=${userId}`)
    if (response.data.success === true) {
      alert("User Blocked");

    }
  }

  async function unblockUser(userId, username) {
    const response = await api.post(`/admin/unblockUser?id=${userId}`)
    if (response.data.success === true) {
      alert("User Unblocked");

    }
  }

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await api.get('/admin/userList');
        setUserList(response.data);
      } catch (error) {
        console.error('Error fetching user list:', error);
      }
    }

    fetchUsers();
  }, [userList]);

  return (
    <div>
      <h4>User List</h4>
      <div className="container">
        <div className="table-responsive">
          <table className='table'>
            <thead>
              <tr>
                <th style={{ paddingRight: '12rem' }}>Name</th>
                <th style={{ paddingRight: '12rem' }}>Email</th>
                <th style={{ paddingRight: '12rem' }}>Phone</th>
                <th style={{ paddingRight: '12rem' }}>Type</th>
                <th style={{ paddingRight: '12rem' }}>Delete/Block</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((user) => (
                <tr key={user.id}>
                  <td>{user.fullname}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.type}</td>
                  <td>
                    <button className='btn btn-danger mx-1' onClick={() => deleteUser(user.id, user.fullname)}>Delete</button>
                    {
                      (user.status) == "blocked"?
                      <button className='btn btn-danger mx-1' onClick={() => unblockUser(user.id, user.fullname)}>Unblock</button>
                      :  
                      <button className='btn btn-danger mx-1' onClick={() => blockUser(user.id, user.fullname)}>Block</button>
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;
