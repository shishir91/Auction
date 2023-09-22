import React, { useState } from 'react';
import api from "../../api/config.js"
import { useNavigate, useLocation } from 'react-router-dom';

const VerifyCode = () => {
    const [code, setCode] = useState('');
    let navigate = useNavigate();
    let location = useLocation();

    const handleVerification = async () => {
        const email = location.state.email;
        const sentCode = localStorage.getItem("sentCode")

        try {
            const response = await api.post("/mail/verifycode", { code, email, sentCode });
            console.log(response);
            console.log(response.data);

            if (response.data.success === true) {
                alert("Email verified");
                navigate("/password", { state: { email: email } })
            }
            else {
                alert("Please Enter correct OTP");
            }
        } catch (error) {
            console.error("OTP Error: ", error)
            alert("Server Error, Sorry");
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4">
                <h2 className="text-center mb-4">Enter Verification Code</h2>
                <div >
                    <div className="mb-3">
                        <label htmlFor="verificationCode" className="form-label">
                            Verification Code
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="verificationCode"
                            value={code} // Using 'code' as the variable name
                            onChange={(e) => setCode(e.target.value)}
                            required
                        />
                    </div>
                    <div className="d-grid">
                        <button onClick={handleVerification} type="submit" className="btn btn-primary">
                            Verify Code
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerifyCode;
