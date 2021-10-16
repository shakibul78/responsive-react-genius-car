import React, { useEffect, useState } from 'react';
import Expert from '../Expert/expert.js';
import './Experts.css'


const Experts = () => {
    const [experts, setExperts] = useState([])

    useEffect(() => {
        fetch('experts.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setExperts(data)
            });
    }, [])

    return (
        <div >

            {/* <h3 className="text-primary">Our Experts</h3>
            <br />

            <div className="experts-container">
                {
                    experts.map(expert => <Expert
                        expert={expert}
                    ></Expert>)
                }
            </div> */}

            <div id="experts" className="container">
                <h5 className="text-primary mt-5">Experts-Parson</h5>
                <div className="row">
                    {
                        experts.map(expert => <Expert
                            expert={expert}
                            key={expert.key}
                        ></Expert>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Experts;


