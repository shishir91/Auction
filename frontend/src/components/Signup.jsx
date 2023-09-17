import React, { useState } from "react";
import Auction from "../images/auction.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

// Add this custom CSS class to position the icon
const inputGroupWithIcon = {
  position: "relative",
};

const iconStyle = {
  position: "absolute",
  right: "10px", // Adjust this value to control the icon's position
  top: "50%",
  transform: "translateY(-50%)",
  color: "#bcbfbb",
  cursor: "pointer",
  zIndex: 2, // Ensure the icon remains above the input field
};

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* <!-- Image Section --> */}
        <div className="col-md-6 d-none d-md-block">
          <img
            src={Auction}
            alt="Login Image"
            className="custom-img p-3 m-3"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>

        {/* <!-- Login Form Section --> */}
        <div className="col-md-6 col-sm-12">
          <div className="m-3 p-3">
            <form className="p-4" action="#" method="post">
              <h1>
                <b>Welcome to the Auction House</b>
              </h1>
              <h3>Bid on Your Favorite</h3>
              <br />
              <h6>Enter Your Details Below</h6>
              <div className="form-group m-1">
                <input
                  type="text"
                  className="form-control mt-2 p-3 h-4 border-dark text-success "
                  id="fullName"
                  name="fullName"
                  required
                  placeholder="Full Name"
                />
              </div>
              <div className="form-group m-1">
                <input
                  type="email"
                  className="form-control mt-2 p-3 h-4 border-dark text-success "
                  id="email"
                  name="email"
                  required
                  placeholder="Email Address"
                />
              </div>
              <div className="form-group m-1" style={inputGroupWithIcon}>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <select className="form-control mt-2 p-3 h-4 border-dark">
                      <option value="+1">+1 (USA)</option>
                      <option value="+44">+44 (UK)</option>
                      <option value="+44">+977 (Nepal)</option>
                      {/* Add more country code options as needed */}
                    </select>
                  </div>{" "}
                  &nbsp;&nbsp;
                  <input
                    type="tel"
                    className="form-control mt-2 p-3 h-4 border-dark text-success "
                    id="phoneNumber"
                    name="phoneNumber"
                    required
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="form-group m-1" style={inputGroupWithIcon}>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control mt-2 p-3 h-4 border-dark text-success "
                    id="password"
                    name="password"
                    required
                    placeholder="Password"
                    minLength={8}
                  />
                  <div className="input-group-append">
                    <span
                      className="input-group-text"
                      style={iconStyle}
                      onClick={togglePasswordVisibility}
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </span>
                  </div>
                </div>
              </div>
              <div className="form-group m-1" style={inputGroupWithIcon}>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control mt-2 p-3 h-4 border-dark text-success "
                    id="confirmPassword"
                    name="confirmPassword"
                    required
                    placeholder="Confirm Password"
                    minLength={8}
                  />
                  <div className="input-group-append">
                    <span
                      className="input-group-text"
                      style={iconStyle}
                      onClick={togglePasswordVisibility}
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <button
                  type="submit"
                  className="btn btn-success fw-bold btn-block"
                >
                  Sign Up
                </button>
              </div>
              <div className="d-flex justify-content-center">
                Already have an account? &nbsp;{" "}
                <a href="#" className="text-decoration-none text-success">
                  {" "}
                  <b> Login </b>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
