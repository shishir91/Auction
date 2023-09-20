import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from "../api/config.js"; 

const Sculpture = () => {
    const navigate = useNavigate();
    const [sculptureList, setSculptureList] = useState([]);
    useEffect(() => {
        async function fetchItem() {
            const response = await api.get("/item/category?c=sculpture");
            setSculptureList(response.data);
        }
        fetchItem();
    }, []);


    return (
        <div>
            {sculptureList.map((item, index) => {
                return (
                    <div key={index} onClick={() => navigate("/bidding", { state: { item } })} style={{ cursor: "pointer" }}>
                        <h4 className='mx-4 px-3'>Sculptures</h4>
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

export default Sculpture
