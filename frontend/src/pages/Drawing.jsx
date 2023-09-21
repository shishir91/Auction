import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from "../api/config.js";
import { io } from "socket.io-client";

const Drawing = () => {
  const socket = io.connect("http://localhost:5000/")
  const navigate = useNavigate();
  const [drawingList, setDrawingList] = useState([]);

  useEffect(() => {
    async function fetchItem() {
      const response = await api.get("/item/category?c=drawing");
      setDrawingList(response.data);
    }
    fetchItem();
  }, []);

  const join_room = (item) => {
    const userEmail = localStorage.getItem("userEmail")
    const room = item.lotNumber
    if (userEmail !== "" && room !== "") {
      socket.emit("join_room", { userEmail, room })
    }
  }
  const handleDivClick = (item) => {
    join_room(item);
    navigate("/bidding", { state: { item } });
  };

  return (
    <div>
      <h4 className='mx-4 px-3'>Drawings</h4>
      <div className="container">
        <div className="row">
          {drawingList.map((item, index) => (
            <div key={index} className="col-md-3 mb-3">
              <div
                onClick={() => handleDivClick(item)}
                style={{ cursor: "pointer" }}
              >
                <div className="card">
                  <img src={item.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 style={{ fontWeight: 'bold' }} className="card-title">{item.name}</h5>
                    <p className="card-text">By: {item.artist}</p>
                    <p className="card-text">Uploaded By: {item.uploadedBy}</p>
                    <b><p style={{ fontWeight: 'bold' }} className="card-text">$ {item.basePrice}</p></b>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Drawing;
