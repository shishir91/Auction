import React, { useState } from "react";
import { Link } from "react-router-dom";
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



    return (
        <div className="Dashboard d-flex justify-content-center align-item-center flex-wrap">
            <div className="container text-center">
                <div className="row mb-2 border-bottom border-black">
                    <div className="col-md-4">
                        <img src={Demo} alt="" style={{ width: "10rem" }} />
                        <h4 className="item-center">Name</h4>
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
                <div>
                    <div className="container pb-3 border-bottom border-black ">
                        <div className="d-flex justify-content-between">
                            <h3>My Ads</h3>
                            <Link to="/auctionpanel"> <button className="btn Auction_Button">Create Auction</button></Link>
                        </div>
                        <div className=" d-flex overflow-x-scroll">
                            <div className=" mb-3 mx-3 px-3" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}> <Link to=""><img src={Demo} alt="" style={{ width: "10rem", }} /></Link>
                                <div className="d-flex">
                                    <h6 className="mx-3">Item Name</h6>
                                    <h6>Price Saled on</h6>
                                </div>
                            </div>
                            <div className=" mb-3 mx-3 px-3" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}> <Link to=""><img src={Demo} alt="" style={{ width: "10rem", }} /></Link>
                                <div className="d-flex">
                                    <h6 className="mx-3">Item Name</h6>
                                    <h6>Price Saled on</h6>
                                </div>
                            </div>
                            <div className=" mb-3 mx-3 px-3" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}> <Link to=""><img src={Demo} alt="" style={{ width: "10rem", }} /></Link>
                                <div className="d-flex">
                                    <h6 className="mx-3">Item Name</h6>
                                    <h6>Price Saled on</h6>
                                </div>
                            </div>
                            <div className=" mb-3 mx-3 px-3" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}> <Link to=""><img src={Demo} alt="" style={{ width: "10rem", }} /></Link>
                                <div className="d-flex">
                                    <h6 className="mx-3">Item Name</h6>
                                    <h6>Price Saled on</h6>
                                </div>
                            </div>
                            <div className=" mb-3 mx-3 px-3" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}> <Link to=""><img src={Demo} alt="" style={{ width: "10rem", }} /></Link>
                                <div className="d-flex">
                                    <h6 className="mx-3">Item Name</h6>
                                    <h6>Price Saled on</h6>
                                </div>
                            </div>
                            <div className=" mb-3 mx-3 px-3" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}> <Link to=""><img src={Demo} alt="" style={{ width: "10rem", }} /></Link>
                                <div className="d-flex">
                                    <h6 className="mx-3">Item Name</h6>
                                    <h6>Price Saled on</h6>
                                </div>
                            </div>
                            <div className=" mb-3 mx-3 px-3" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}> <Link to=""><img src={Demo} alt="" style={{ width: "10rem", }} /></Link>
                                <div className="d-flex">
                                    <h6 className="mx-3">Item Name</h6>
                                    <h6>Price Saled on</h6>
                                </div>
                            </div>
                            <div className=" mb-3 mx-3 px-3" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}> <Link to=""><img src={Demo} alt="" style={{ width: "10rem", }} /></Link>
                                <div className="d-flex">
                                    <h6 className="mx-3">Item Name</h6>
                                    <h6>Price Saled on</h6>
                                </div>
                            </div>
                            <div className=" mb-3 mx-3 px-3" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}> <Link to=""><img src={Demo} alt="" style={{ width: "10rem", }} /></Link>
                                <div className="d-flex">
                                    <h6 className="mx-3">Item Name</h6>
                                    <h6>Price Saled on</h6>
                                </div>
                            </div>
                            <div className=" mb-3 mx-3 px-3" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}> <Link to=""><img src={Demo} alt="" style={{ width: "10rem", }} /></Link>
                                <div className="d-flex">
                                    <h6 className="mx-3">Item Name</h6>
                                    <h6>Price Saled on</h6>
                                </div>
                            </div>
                            <div className=" mb-3 mx-3 px-3" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}> <Link to=""><img src={Demo} alt="" style={{ width: "10rem", }} /></Link>
                                <div className="d-flex">
                                    <h6 className="mx-3">Item Name</h6>
                                    <h6>Price Saled on</h6>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="container pb-3 border-bottom border-black ">
                        <h3>My Purchases</h3>
                        <div className=" d-flex overflow-x-scroll">
                            <div className=" mb-3 mx-3 px-3" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}> <Link to=""><img src={Demo} alt="" style={{ width: "10rem", }} /></Link>
                                <div className="d-flex">
                                    <h6 className="mx-3">Item Name</h6>
                                    <h6>Price Saled on</h6>
                                </div>
                            </div>
                            <div className=" mb-3 mx-3 px-3" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}> <Link to=""><img src={Demo} alt="" style={{ width: "10rem", }} /></Link>
                                <div className="d-flex">
                                    <h6 className="mx-3">Item Name</h6>
                                    <h6>Price Saled on</h6>
                                </div>
                            </div>
                            <div className=" mb-3 mx-3 px-3" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}> <Link to=""><img src={Demo} alt="" style={{ width: "10rem", }} /></Link>
                                <div className="d-flex">
                                    <h6 className="mx-3">Item Name</h6>
                                    <h6>Price Saled on</h6>
                                </div>
                            </div>
                            <div className=" mb-3 mx-3 px-3" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}> <Link to=""><img src={Demo} alt="" style={{ width: "10rem", }} /></Link>
                                <div className="d-flex">
                                    <h6 className="mx-3">Item Name</h6>
                                    <h6>Price Saled on</h6>
                                </div>
                            </div>
                            <div className=" mb-3 mx-3 px-3" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}> <Link to=""><img src={Demo} alt="" style={{ width: "10rem", }} /></Link>
                                <div className="d-flex">
                                    <h6 className="mx-3">Item Name</h6>
                                    <h6>Price Saled on</h6>
                                </div>
                            </div>
                            <div className=" mb-3 mx-3 px-3" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}> <Link to=""><img src={Demo} alt="" style={{ width: "10rem", }} /></Link>
                                <div className="d-flex">
                                    <h6 className="mx-3">Item Name</h6>
                                    <h6>Price Saled on</h6>
                                </div>
                            </div>
                            <div className=" mb-3 mx-3 px-3" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}> <Link to=""><img src={Demo} alt="" style={{ width: "10rem", }} /></Link>
                                <div className="d-flex">
                                    <h6 className="mx-3">Item Name</h6>
                                    <h6>Price Saled on</h6>
                                </div>
                            </div>
                            <div className=" mb-3 mx-3 px-3" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}> <Link to=""><img src={Demo} alt="" style={{ width: "10rem", }} /></Link>
                                <div className="d-flex">
                                    <h6 className="mx-3">Item Name</h6>
                                    <h6>Price Saled on</h6>
                                </div>
                            </div>
                            <div className=" mb-3 mx-3 px-3" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}> <Link to=""><img src={Demo} alt="" style={{ width: "10rem", }} /></Link>
                                <div className="d-flex">
                                    <h6 className="mx-3">Item Name</h6>
                                    <h6>Price Saled on</h6>
                                </div>
                            </div>
                            <div className=" mb-3 mx-3 px-3" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}> <Link to=""><img src={Demo} alt="" style={{ width: "10rem", }} /></Link>
                                <div className="d-flex">
                                    <h6 className="mx-3">Item Name</h6>
                                    <h6>Price Saled on</h6>
                                </div>
                            </div>
                            <div className=" mb-3 mx-3 px-3" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}> <Link to=""><img src={Demo} alt="" style={{ width: "10rem", }} /></Link>
                                <div className="d-flex">
                                    <h6 className="mx-3">Item Name</h6>
                                    <h6>Price Saled on</h6>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            ) : (
                <div className="container">
                    <div className="container pb-3 border-bottom border-black d-flex justify-content-center align-item-center">
                        <span className="h5 mr-10">Register as a Seller</span>
                        <Link to="/register"><button className=" btn Auction_Button">Register</button></Link>
                    </div>
                    <div className="container pb-3 border-bottom border-black ">
                        <h3>My Purchases</h3>
                        <div className=" d-flex overflow-x-scroll">
                            <div className=" mb-3 mx-3 px-3" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}> <Link to=""><img src={Demo} alt="" style={{ width: "10rem", }} /></Link>
                                <div className="d-flex">
                                    <h6 className="mx-3">Item Name</h6>
                                    <h6>Price Saled on</h6>
                                </div>
                            </div>
                            <div className=" mb-3 mx-3 px-3" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}> <Link to=""><img src={Demo} alt="" style={{ width: "10rem", }} /></Link>
                                <div className="d-flex">
                                    <h6 className="mx-3">Item Name</h6>
                                    <h6>Price Saled on</h6>
                                </div>
                            </div>
                            <div className=" mb-3 mx-3 px-3" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}> <Link to=""><img src={Demo} alt="" style={{ width: "10rem", }} /></Link>
                                <div className="d-flex">
                                    <h6 className="mx-3">Item Name</h6>
                                    <h6>Price Saled on</h6>
                                </div>
                            </div>
                            <div className=" mb-3 mx-3 px-3" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}> <Link to=""><img src={Demo} alt="" style={{ width: "10rem", }} /></Link>
                                <div className="d-flex">
                                    <h6 className="mx-3">Item Name</h6>
                                    <h6>Price Saled on</h6>
                                </div>
                            </div>
                            <div className=" mb-3 mx-3 px-3" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}> <Link to=""><img src={Demo} alt="" style={{ width: "10rem", }} /></Link>
                                <div className="d-flex">
                                    <h6 className="mx-3">Item Name</h6>
                                    <h6>Price Saled on</h6>
                                </div>
                            </div>
                            <div className=" mb-3 mx-3 px-3" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}> <Link to=""><img src={Demo} alt="" style={{ width: "10rem", }} /></Link>
                                <div className="d-flex">
                                    <h6 className="mx-3">Item Name</h6>
                                    <h6>Price Saled on</h6>
                                </div>
                            </div>
                            <div className=" mb-3 mx-3 px-3" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}> <Link to=""><img src={Demo} alt="" style={{ width: "10rem", }} /></Link>
                                <div className="d-flex">
                                    <h6 className="mx-3">Item Name</h6>
                                    <h6>Price Saled on</h6>
                                </div>
                            </div>
                            <div className=" mb-3 mx-3 px-3" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}> <Link to=""><img src={Demo} alt="" style={{ width: "10rem", }} /></Link>
                                <div className="d-flex">
                                    <h6 className="mx-3">Item Name</h6>
                                    <h6>Price Saled on</h6>
                                </div>
                            </div>
                            <div className=" mb-3 mx-3 px-3" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}> <Link to=""><img src={Demo} alt="" style={{ width: "10rem", }} /></Link>
                                <div className="d-flex">
                                    <h6 className="mx-3">Item Name</h6>
                                    <h6>Price Saled on</h6>
                                </div>
                            </div>
                            <div className=" mb-3 mx-3 px-3" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}> <Link to=""><img src={Demo} alt="" style={{ width: "10rem", }} /></Link>
                                <div className="d-flex">
                                    <h6 className="mx-3">Item Name</h6>
                                    <h6>Price Saled on</h6>
                                </div>
                            </div>
                            <div className=" mb-3 mx-3 px-3" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}> <Link to=""><img src={Demo} alt="" style={{ width: "10rem", }} /></Link>
                                <div className="d-flex">
                                    <h6 className="mx-3">Item Name</h6>
                                    <h6>Price Saled on</h6>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )
            }



        </div >


    );
}

export default UserProfile;
