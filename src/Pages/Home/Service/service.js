import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const service = ({ service }) => {
    const { id, name, price, description, img } = service;
    return (
        <div>


            <div className="service mt-2 p-2">

                <img className="service-img" src={img} alt="" />
                <h3 className="service-parson-name">{name}</h3>
                <h5 >Price: {price}</h5>
                <p className="px-3">{description}</p>

                <Link to={`/booking/${ id }`}>
                    <button className="btn btn-primary p-2 rounded-pill">Book {name.toLowerCase()}</button>
                </Link>
            </div>
        </div>

    );
};

export default service;