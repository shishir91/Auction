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
    const userEmail = localStorage.getItem("userEmail");

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
            <center className='mt-3 mb-3'>
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
                <div className="container">
                    <div className="row">
                        <h4 className='mx-3 mb-3 px-3'>Current Biddings</h4>
                        {itemList.length > 0 ?
                            itemList.sort((a, b) => b.id - a.id).filter(item => item.status === "bidding").map((item, index) => {
                                return (
                                    <>
                                        <div key={index} className="col-md-3 mb-3">
                                            <div
                                                onClick={() => {
                                                    if(!userEmail){
                                                        alert("You need to login first.")
                                                        navigate("/login")
                                                    }else{
                                                        navigate("/bidding", { state: { item } 
                                                    })
                                                }
                                            }}
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
                                    </>
                                );
                            })
                            :
                            <div>
                                <center>
                                    <h5 className='fw-bold'>
                                        No Item Found
                                    </h5>
                                </center>
                            </div>
                        }

                        <h4 className='mx-4 px-3'>Upcomming Biddings</h4>
                        {itemList.length > 0 ?
                            itemList.filter(item => item.status === "listed").map((item, index) => {
                                return (
                                    <>
                                        <div key={index} className="col-md-3 mb-3">
                                            <div
                                                onClick={() => navigate("/bidding", { state: { item } })}
                                                style={{ cursor: "pointer" }}
                                            >
                                                <div className="card" style={{border: "none", margin: "0.4rem", boxShadow:" rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px"}}>
                                                    <img src={item.image} className="card-img-top" alt={item.name}  style={{height: "10rem", width: "fit-content"}}/>
                                                    <div className="card-body">
                                                        <h5 style={{ fontWeight: 'bold' }} className="card-title">{item.name}</h5>
                                                        <p className="card-text">By: {item.artist}</p>
                                                        <p className="card-text">Uploaded By: {item.uploadedBy}</p>
                                                        <b><p style={{ fontWeight: 'bold' }} className="card-text">$ {item.basePrice}</p></b>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })
                            :
                            <div>
                                <center>
                                    <h5 className='fw-bold'>
                                        No Item Found
                                    </h5>
                                </center>
                            </div>
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
