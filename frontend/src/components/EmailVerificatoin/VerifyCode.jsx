import React, { useState } from 'react';
import api from "../../api/config.js"

const VerifyCode = () => {
    const [verificationCode, setVerificationCode] = useState('');

    const handleVerification = () => {
        
        const response = api.post("/sendVerificationCode")

    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4">
                <h2 className="text-center mb-4">Enter Verification Code</h2>
                <form onSubmit={handleVerification}>
                    <div className="mb-3">
                        <label htmlFor="verificationCode" className="form-label">
                            Verification Code
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="verificationCode"
                            value={verificationCode}
                            onChange={(e) => setVerificationCode(e.target.value)}
                            required
                        />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                            Verify Code
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default VerifyCode;
