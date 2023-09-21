<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from "../api/config.js";

const Photographic = () => {
  const navigate = useNavigate();
  const [photographicList, setPhotographicList] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await api.get("/item/category?c=photographic");
        setPhotographicList(response.data);
      } catch (error) {
        console.error("Error fetching photographic images:", error);
      }
    }
    fetchItems();
  }, []);

  return (
    <div>
      <h4 className='mx-4 px-3'>Photographic Images</h4>
      <div className="container">
        <div className="row">
          {photographicList.map((item, index) => (
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
=======
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from "../api/config.js"; 

const Photographic = () => {
    const navigate = useNavigate();
    const [photographicList, setPhotographicList] = useState([]);
    useEffect(() => {
        async function fetchItem() {
            const response = await api.get("/item/category?c=photographic");
            setPhotographicList(response.data);
        }
        fetchItem();
    }, []);


    return (
        <div>
            {photographicList.map((item, index) => {
                return (
                    <div key={index} onClick={() => navigate("/bidding", { state: { item } })} style={{ cursor: "pointer" }}>
                        <h4 className='mx-4 px-3'>Photographics Images</h4>
                        <div className='container m-3 p-3 d-flex'>
                            <div class="card m-3" style={{ "width": "18rem" }} >
                                <img src={item.image} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 style={{ fontWeight: 'bold' }} class="card-title">{item.name}</h5>
                                    <p class="card-text">By: {item.artist}</p>
                                    <p class="card-text">Uploaded By: {item.uploadedBy}</p>
                                    <b><p style={{ fontWeight: 'bold' }} class="card-text">$ {item.basePrice}</p></b>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>

    )
}
>>>>>>> 47dbbad8c14b2b8f0275c1e3113e8c5b72c33fad

export default Photographic;
