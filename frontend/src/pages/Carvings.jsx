import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from "../api/config.js";

const Carvings = () => {
  const navigate = useNavigate();
  const [carvingsList, setCarvingsList] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await api.get("/item/category?c=carving");
        setCarvingsList(response.data);
      } catch (error) {
        console.error("Error fetching carvings:", error);
      }
    }
    fetchItems();
  }, []);

  return (
    <div>
      <h4 className='mx-4 px-3'>Carvings</h4>
      <div className="container">
        <div className="row">
          {carvingsList.map((item, index) => (
            <div key={index} className="col-md-3 mb-3">
              <div
                onClick={() => navigate("/bidding", { state: { item } })}
                style={{ cursor: "pointer" }}
              >
                <div className="card">
                  <img src={item.image} className="card-img-top" alt={item.name} />
                  <div className="card-body">
                    <h5 style={{ fontWeight: 'bold' }} className="card-title">{item.name}</h5>
                    <p className="card-text">By: {item.artist}</p>
                    <p className="card-text">Uploaded By: {item.uploadedBy}</p>
                    <b><p style={{ fontWeight: 'bold' }} className="card-text">$ {item.basePrice}</p></b>
                    <Link to="/bidding" className="btn btn-primary">Start Bidding</Link>
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

export default Carvings;
