import React, { useState, useEffect } from 'react'
import api from "../../api/config.js"
import { useNavigate } from 'react-router-dom';
import "./Imgcss.css"
import Loader from '../Loader.jsx'


const RequestToSeller = () => {
  let navigate = useNavigate();
  const [userList, setUserList] = useState([]);
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function approveUser(userId, email) {
    const response = await api.get(`/admin/changeUsertoSeller?id=${userId}`)
    if (response.data.success === true) {
      setIsLoading(true);
      const sendMail = await api.post("/mail/registerMail", { email })
      setIsLoading(false);
    }
    alert("User Approved");
  }
  async function declineUser(userId) {
    const response = await api.get(`/admin/declineSeller?id=${userId}`)
    alert("User Declined");
  }

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await api.get("/admin/requestedUser");
        setUserList(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    }
    fetchItems();
  }, [userList]);

  return (
    <div>
      {isLoading ? (
        <div id="loader"><Loader /></div>
      ) : (
        <div className="container " >
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Identity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {userList.map((user) => (
                  <tr key={user.id} className='as'>
                    <td>{user.fullname}</td>
                    <td>{user.email}</td>
                    <td onClick={() => setFile(user.identity)}><img src={user.identity} alt="" width="50px" /></td>
                    <td>
                      <button className='btn btn-success mx-1' onClick={() => approveUser(user.id, user.email)}>Approve</button>
                      <button className='btn btn-danger mx-1' onClick={() => declineUser(user.id)}>Decline</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="popup-img" style={{
            display: file ? 'block' : 'none'
          }}>
            <span onClick={() => setFile(null)}>&times;</span>
            <img src={file} alt="" style={{
            }} />
          </div>
        </div>
      )}
    </div>
  )
}


export default RequestToSeller;