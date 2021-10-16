import React from 'react';
import './Expert.css'

const expert = ({ expert }) => {
    const { name, img, expertize } = expert;

    return (
        <div className="expert-container col-lg-4 col-sm-6 col-12">

            <img className="experts-img" src={img} alt="" />
            <h4 className="expertize-name">{name}</h4>
            <h5 className="expertize">{expertize}</h5>

        </div>
    );
};

export default expert;