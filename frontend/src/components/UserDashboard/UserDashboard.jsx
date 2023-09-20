import React from "react";
import { Link } from "react-router-dom";
import Demo from "../../images/auction.png";
import "./UserDashboard.css"

const UserProfile = () => {
    return (
        <div className="Dashboard d-flex justify-content-center align-item-center flex-wrap">
            <div className="container text-center" style={{ marginTop: "2rem" }}>
                <img
                    src={Demo}
                    alt="User Profile"
                    className="img-fluid rounded-circle"
                    style={{ height: "6rem" }}
                />
                <h3 className="mt-3">User Name</h3>
            </div>
            <div className="container text-center" style={{ marginTop: "3rem" }}>
                <div className="row">
                    <div className="col-md-4">
                        <h5>Email Address:</h5>
                        <p>user@example.com</p>
                    </div>
                    <div className="col-md-4">
                        { localStorage.getItem("Seller") === "true" ?
                            <Link to="/auctionpanel"> <button className="btn Auction_Button">Create Auction</button></Link> :  <Link to="/register"><button className="btn Auction_Button">Register</button> </Link> }
                    </div>
                    <div className="col-md-4 text-left">
                        <h6>Address:</h6>
                        <p>123 Main St, City, Country</p>
                    </div>
                </div>
            </div>
            <div className="container ">
                <h3 className="d-flex justify-content-center align-content-center">Past Bides</h3>
                <div className="row">
                    <div className="col-md-4"><img src={Demo} alt="" style={{ width: "15rem" }} />
                        <div className="d-flex">
                            <h6 className="mx-3">Item Name</h6>
                            <h6>Price Saled on</h6>
                        </div>
                    </div>
                    <div className="col-md-4"><img src={Demo} alt="" style={{ width: "15rem" }} />
                        <div className="d-flex">
                            <h6 className="mx-3">Item Name</h6>
                            <h6>Price Saled on</h6>
                        </div>
                    </div>
                    <div className="col-md-4"><img src={Demo} alt="" style={{ width: "15rem" }} />
                        <div className="d-flex">
                            <h6 className="mx-3">Item Name</h6>
                            <h6>Price Saled on</h6>
                        </div>
                    </div>
                </div>


            </div>
        </div >


    );
}

export default UserProfile;
