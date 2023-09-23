import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../api/config.js";
import Demo from "../../images/auction.png";
import "./UserDashboard.css"
// import {
//     Box,
//     Paper,
//     Typography,
//     Table,
//     TableRow,
//     TableCell,
//     TableBody,
//   } from '@mui/material';

const UserProfile = () => {
    const username = localStorage.getItem("username")
    const userEmail = localStorage.getItem("userEmail")
    const Phone = localStorage.getItem("Phone")
    const userSeller = localStorage.getItem("Seller")
    const [myUploads, setMyUploads] = useState([]);
    const [myPurchases, setMyPurchases] = useState([]);

    useEffect(() => {
        async function fetchMyUploads() {
            try {
                const response = await api.get(`/item/myUploads?userEmail=${userEmail}`);
                console.log(response.data);
                setMyUploads(response.data);
            } catch (error) {
                console.error("Error fetching items:", error);
            }
        }
        fetchMyUploads();
    }, []);

    useEffect(() => {
        async function fetchMyPurchases() {
            try {
                const response = await api.get(`/item/myPurchases?userEmail=${userEmail}`);
                console.log(response.data);
                setMyPurchases(response.data);
            } catch (error) {
                console.error("Error fetching items:", error);
            }
        }
        fetchMyPurchases();
    }, []);

    return (
        <div className="Dashboard d-flex justify-content-center align-item-center flex-wrap">
            <div className="container text-center">
                <div className="row mb-2 border-bottom border-black">
                    <div className="d-flex justify-content-between">
                        <h3>My Profile</h3>
                    </div>
                    <div className="col-md-8 d-flex justify-content-start mt-3">
                        <div>
                            {[
                                { label: 'Username', value: username },
                                { label: 'Email', value: userEmail },
                                { label: 'Phone', value: Phone },
                            ].map((detail, index) => (
                                <div className="d-flex justify-content-start mb-2 border-bottom border-gray row " key={index}>
                                    <div className="col-md-4 d-flex">
                                        <p className="">{detail.label}</p>
                                    </div>
                                    <div className="col-md-7 mx-2  d-flex">
                                        <p>{detail.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {userSeller === "true" ? (
                <div className="conatiner" style={{width: "100rem"}}>
                    <div className=" pb-3 border-bottom border-black ">
                        <div className="d-flex justify-content-between">
                            <h3>My Ads</h3>
                            <Link to="/auctionpanel"> <button className="btn Auction_Button">Create Auction</button></Link>
                        </div>
                        <div className=" d-flex overflow-x-auto">
                            {myUploads.length > 0 ?
                                myUploads.sort((a, b) => b.id - a.id).map((item, index) => {
                                    return (
                                        <>
                                            <div className=" mb-3 mx-3 px-3" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}> <Link to=""><img src={item.image} alt="" style={{ width: "10rem", }} /></Link>
                                                <div className="">
                                                    <h6 className="">{item.name}</h6>
                                                    <h6>Base Price: ${item.basePrice}</h6>
                                                </div>
                                            </div>
                                        </>
                                    );
                                })
                                :
                                <div>
                                    <center>
                                        <h5 className='fw-bold'>
                                            You Have Not Uploaded Any Items
                                        </h5>
                                    </center>
                                </div>
                            }
                        </div>
                    </div>
                    <div className=" pb-3 border-bottom border-black ">
                        <h3>My Purchases</h3>
                        <div className=" d-flex overflow-x-auto">
                            {myPurchases.length > 0 ?
                                myPurchases.sort((a, b) => b.id - a.id).map((item, index) => {
                                    return (
                                        <>
                                            <div className=" mb-3 mx-3 px-3" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}> <Link to=""><img src={item.image} alt="" style={{ width: "10rem", }} /></Link>
                                                <div className="">
                                                    <h6 className="">{item.name}</h6>
                                                    <h6>Purchased At: ${item.soldPrice}</h6>
                                                </div>
                                            </div>
                                        </>
                                    );
                                })
                                :
                                <div>
                                    <center>
                                        <h5 className='fw-bold'>
                                            You Have Not Purchased Any Items
                                        </h5>
                                    </center>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container">
                    <div className="container pb-3 border-bottom border-black d-flex justify-content-center align-item-center">
                        <span className="h5">Register as a Seller</span>
                        <Link to="/register"><button className="mx-3  btn Auction_Button">Register</button></Link>
                    </div>
                    <div className="container pb-3 border-bottom border-black ">
                        <h3>My Purchases</h3>
                        <div className=" d-flex overflow-x-auto">
                            {myPurchases.length > 0 ?
                                myPurchases.sort((a, b) => b.id - a.id).map((item, index) => {
                                    return (
                                        <>
                                            <div className=" mb-3 mx-3 px-3" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}> <Link to=""><img src={item.image} alt="" style={{ width: "10rem", }} /></Link>
                                                <div className="">
                                                    <h6 className="">{item.name}</h6>
                                                    <h6>Purchased At: ${item.soldPrice}</h6>
                                                </div>
                                            </div>
                                        </>
                                    );
                                })
                                :
                                <div>
                                    <center>
                                        <h5 className='fw-bold'>
                                            You Have Not Purchased Any Items
                                        </h5>
                                    </center>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            )
            }



        </div >


    );
}

export default UserProfile;
