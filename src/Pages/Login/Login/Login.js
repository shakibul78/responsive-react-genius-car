import React from 'react';
import './Login.css';
import useAuth from '../../../hooks/useAuth.js';
import google from '../../../Images/Google.png';
import fb from '../../../Images/fb.png';


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const { signInUsingFacebook } = useAuth();

    return (
        <div >

            <h3>Please Login</h3>

            <img onClick={signInUsingGoogle} className="google-img" src={google} alt="" />

            <img onClick={signInUsingFacebook} className="fb-img" src={fb} alt="" />

            {/* <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button> */}
        </div>
    );
};

export default Login;
