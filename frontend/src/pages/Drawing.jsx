import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from "../api/config.js";

const Drawing = () => {
  const navigate = useNavigate();
  const [drawingList, setDrawingList] = useState([]);

  useEffect(() => {
    async function fetchItem() {
      const response = await api.get("/item/category?c=drawing");
      setDrawingList(response.data);
    }
    fetchItem();
  }, []);

  return (
    <div>
      <h4 className='mx-4 px-3'>Drawings</h4>
      <div className="container">
        <div className="row">
          {drawingList.map((item, index) => (
            <div key={index} className="col-md-3 mb-3">
              <div
                onClick={() => navigate("/bidding", { state: { item } })}
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
