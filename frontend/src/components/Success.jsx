import React from 'react'
import { useNavigate } from 'react-router-dom'

const Success = () => {
    let navigate = useNavigate();
    function ok() {
        navigate("/dashboard")
    }

    return (
        <div className='container'>
            <div className=' mt-3 justify-content-center align-items-center'>
                <h4>You have successfully registered as a Seller
                    Wait for the Admin to verify your Identity
                    You will be notify through email when you are verified.</h4>
            </div>
            <button className='btn btn-success' onClick={ok}>Ok</button>
        </div>
    )
}

export default Success