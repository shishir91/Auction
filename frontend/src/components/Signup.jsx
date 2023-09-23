import React, { useState } from "react";
import Auction from "../images/auction.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useNavigationType } from "react-router-dom";
import api from "../api/config.js"
import Loader from './Loader'

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
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  let navigate = useNavigate();


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Check if passwords match
  //   if (formData.password !== formData.cpassword) {
  //     alert("Passwords do not match.");
  //     return;
  //   }

  //   // Send a POST request to the signup API
  //   fetch("http://localhost:5000/signup", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.success) {
  //         // Redirect to a success page or handle successful signup
  //         navigate("/login")
  //         alert("Registration successful!");
  //       } else {
  //         alert(data.message);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error during signup:", error);
  //     });
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.cpassword) {
      alert("Password does not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // if(!response.ok) {
      //   throw new Error(`Http Error! Status: ${response.status}`);
      // }

      const data = await response.json();

      if (data.success) {
        setIsLoading(true);
        const sendEmail = await api.post("/mail/sendVerificationCode", { email: formData.email })
        localStorage.setItem("sentCode", sendEmail.data.generatedCode)
        setIsLoading(false);
        if (sendEmail) {
          alert("Thank You Your Registration is Successful, OTP is sent in your Email, Please procced to verify")
          navigate("/verifycode", { state: { email: formData.email } })
        }
      }
      else {
        console.log(data.message);
        alert(data.message);
      }

    } catch (error) {
      console.error("Error during signup:", error)

    }

  }

  return (
    <div>
      {isLoading ? (
        <div id="loader"><Loader/></div>
      ) : (
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
                <form className="p-4" onSubmit={handleSubmit}>
                  <h1>
                    <b>Welcome to the Auction House</b>
                  </h1>
                  <h3>Bid on Your Favorite</h3>
                  <br />
                  <h6>Enter Your Details Below</h6>

                  {/* Full Name input */}
                  <div className="form-group m-1">
                    <input
                      type="text"
                      className="form-control mt-2 p-3 h-4 border-dark text-success "
                      id="fullName"
                      name="name"
                      required
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Email input */}
                  <div className="form-group m-1">
                    <input
                      type="email"
                      className="form-control mt-2 p-3 h-4 border-dark text-success "
                      id="email"
                      name="email"
                      required
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Phone Number input */}
                  <div className="form-group m-1" style={inputGroupWithIcon}>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <select className="form-control mt-2 p-3 h-4 border-dark">
                          <option value="+1">+1 (USA)</option>
                          <option value="+44">+44 (UK)</option>
                          <option value="+44">+977 (Nepal)</option>
                        </select>
                      </div>
                      &nbsp;&nbsp;
                      <input
                        type="tel"
                        className="form-control mt-2 p-3 h-4 border-dark text-success "
                        id="phoneNumber"
                        name="phone"
                        required
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {/* Password input */}
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
                        value={formData.password}
                        onChange={handleInputChange}
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

                  {/* Confirm Password input */}
                  <div className="form-group m-1" style={inputGroupWithIcon}>
                    <div className="input-group">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control mt-2 p-3 h-4 border-dark text-success "
                        id="confirmPassword"
                        name="cpassword"
                        required
                        placeholder="Confirm Password"
                        minLength={8}
                        value={formData.cpassword}
                        onChange={handleInputChange}
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

                  {/* Submit button */}
                  <div className="mt-3">
                    <button
                      type="submit"
                      className="btn btn-success fw-bold btn-block"
                    >
                      Sign Up
                    </button>
                  </div>

                  {/* Already have an account */}
                  <div className="d-flex justify-content-center">
                    Already have an account? &nbsp;{" "}
                    <a href="/login" className="text-decoration-none text-success">
                      {" "}
                      <b> Login </b>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
