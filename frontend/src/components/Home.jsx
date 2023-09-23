import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { BsSearch, BsPersonCircle, BsChevronDown } from "react-icons/bs";
import api from "../api/config.js";

const Home = (isLoggedIn) => {
    let navigate = useNavigate();
    let location = useLocation();
    const [itemList, setItemList] = useState([]);
    const [tempItemList, setTempItemList] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        async function fetchItems() {
            try {
                const response = await api.get("/item");
                setItemList(response.data);
                setTempItemList(response.data);
            } catch (error) {
                console.error("Error fetching items:", error);
            }
        }
        fetchItems();
    }, []);

    useEffect(() => {
        async function searchItems() {
            const response = await api.get(`/item/search/all?q=${searchText}`)
            if (response.data) {
                console.log(response.data);
                setItemList(response.data);
            }
        }
        if (searchText) searchItems();
        else setItemList(tempItemList);
    }, [searchText])

    return (
        <>
            <center>
                <div
                    className="d-flex mx-auto "
                    style={{ width: "40rem", margin: "1px" }}
                >
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search..."
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-secondary mx-3"
                                style={{ width: "4rem" }}
                                type="button"
                            >
                                <BsSearch />
                            </button>
                        </div>
                    </div>
                </div>
            </center>
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
