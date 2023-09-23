import React, { useMemo } from 'react'
import api from "../api/config.js"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Register = () => {
  const userEmail = localStorage.getItem('userEmail')
  let navigate = useNavigate();
  let [imageData, setImageData] = useState([])

  console.log(userEmail)

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("hitting api")
      const response = await api.post(`/uploadIdentity?userEmail=${userEmail}`,
        {
          identity: imageData
        }, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      console.log(response.data)

      if (response.data.success === true) {
        alert("Registration Successfull")
        navigate("/success")
      }
      else {
        console.log("Error Occured")
        alert("Cannot Upload Identity")
      }

    } catch (error) {
      console.log("Error: ", error)
      alert("Server Error During Upload")


    }
  }

  return (

    <>
      <div className='d-flex mt-3 justify-content-center align-items-center'>
        <h4>Register as Seller</h4>
      </div>
      <div className='container d-flex justify-content-center align-items-center'>
        <div className=" mt-3 p-3 " style={{ boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px" }}>
          <form action="" onSubmit={handleSubmit}>
            <h5>Upload Your Identity</h5>
            <input type="file" name='identity' onChange={(e) => setImageData(e.target.files[0])} />
            <button type="submit" className='btn btn-success'>Submit</button>
          </form>

        </div>
      </div>
    </>
  )
}

export default Register
