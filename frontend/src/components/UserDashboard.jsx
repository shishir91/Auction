import React from "react";
import Demo from "../images/auction.png";

const UserProfile = () => {
    return (
        <div className="d-flex justify-content-center align-item-center flex-wrap">
            <div className="container text-center" style={{ marginTop: "4rem" }}>
                <img
                    src="path_to_your_image.jpg"
                    alt="User Profile"
                    className="img-fluid rounded-circle"
                />
                <h3 className="mt-3">User Name</h3>
            </div>
            <div className="container text-center" style={{ marginTop: "3rem" }}>
                <div className="row">
                    <div className="col-md-6">
                        <h5>Email Address:</h5>
                        <p>user@example.com</p>
                    </div>
                    <div className="col-md-6 text-left">
                        <h6>Address:</h6>
                        <p>123 Main St, City, Country</p>
                    </div>
                </div>
            </div>
            <div className="container ">
                <h3 className="d-flex justify-content-center align-content-center">Bidding Done</h3>
                <img src={Demo} alt="" style={{width: "20rem"}}/>
                <p>Price Saled on</p>

            </div>
        </div>
         

    );
}

export default UserProfile;
