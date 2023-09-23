import React, { useState, useSyncExternalStore } from 'react';
import api from "../../api/config.js"
import { useNavigate } from 'react-router-dom';

const EmailVerify = () => {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/checkEmailId", { email })
      console.log(response.data)
      if (response.data.success === true) {

        console.log("Email Verified")
        console.log(email)
        setVerificationCode(true)
      }
      else {
        alert("Sorry 😞 This Email not registered with us")
      }
    } catch (error) {
      console.error('Error verifying email:', error);
      alert('An error occurred while verifying the email.');
    }
  }

  const handleCode = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/mail/sendVerificationCode", { email })
      console.log(response.data)
      localStorage.setItem("sentCode", response.data.generatedCode)
      localStorage.setItem("forgotPassword", true)
      console.log(localStorage.getItem("sentCode"));

      if (response.data.success === true) {
        navigate("/verifycode", { state: { email: email } })
      //   setInterval(() => {
      //     alert("OTP Send")
      //   }, 1);
      }
      else {
        alert("OTP Send Failed")
      }
    } catch (error) {
      alert("Sorry 😞 Server Error Occured While Sending OTP")
      console.log("Error Sending OTP: ", error)
    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card p-4">
        <h2 className="text-center mb-4">Email Verification</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Verify
            </button>
          </div>

          {verificationCode && (

            <div className=" mt-3">
              Get Verification Code to Change Password? &nbsp;
              <button type="submit" className="btn btn-primary" onClick={handleCode}>
                Yes
              </button>
            </div>
          )
          }

        </form>
      </div>
    </div>
  );
};

export default EmailVerify;
