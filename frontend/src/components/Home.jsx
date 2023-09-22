import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from "../api/config.js";

const Home = (isLoggedIn) => {
    const navigate = useNavigate();
    const [itemList, setItemList] = useState([]);
    

    useEffect(() => {
        async function fetchItems() {
            try {
                const response = await api.get("/item");
                setItemList(response.data);
            } catch (error) {
                console.error("Error fetching items:", error);
            }
        }
        fetchItems();
    }, []);

    return (
        <>
            <div>
                <h4 className='mx-4 px-3'>Current Biddings</h4>
                <div className="container">
                    <div className="row">
                        {itemList.map((item, index) => (
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


                {/* <h4 className='mx-4 px-3'>Openning Soon</h4>
                <div className='container m-3 p-3 d-flex'>
                    <div className="card m-3" style={{ "width": "18rem" }} >
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card m-3" style={{ "width": "18rem" }} >
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card m-3" style={{ "width": "18rem" }} >
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card m-3" style={{ "width": "18rem" }} >
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                    <div className='view-more d-flex align-items-center justify-content-center'>
                        <button className='btn btn-primary' style={{ "width": "6rem", "height": "4rem" }}> View More</button>
                    </div>
                </div> */}
            </div>

        </>
    )
}

export default Home
