import React,{useState, useEffect} from 'react'
import api from "../../api/config.js"
import { useNavigate } from 'react-router-dom';

const RequestToSeller = () => {
  let navigate = useNavigate();
  const [userList, setUserList] = useState([]);

  async function approveUser(userId){
    const response = await api.get(`/admin/changeUsertoSeller?id=${userId}`)
    alert("User Approved");
    navigate("/admin")
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
  }, []);

  return (
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
              <tr key={user.id}>
                <td>{user.fullname}</td>
                <td>{user.email}</td>
                <td><img src={user.identity} alt="" width="50px"/></td>
                <td>
                    <button className='btn btn-success mx-1' onClick={()=>approveUser(user.id)}>Approve</button>
                    <button className='btn btn-danger mx-1'>Decline</button>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RequestToSeller;