import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../Images/404.png';


const NotFound = () => {
    return (
        <div className="mt-5">

            <img src={notfound} alt="" />
            <Link className="btn btn-primary" to="/"><button className="btn btn-Secondary text-light">Go Back</button></Link>
        </div>
    );
};

export default NotFound;