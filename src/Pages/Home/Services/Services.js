import React, { useEffect, useState } from 'react';
import Service from '../Service/service.js';
import './Services.css'


const Services = () => {
  const [services, serServices] = useState([])

  useEffect(() => {
    fetch('services.json')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        serServices(data)
      });

  }, [])
  return (
    <div id="services" className="services">
      <h3 className="text-primary">Our Services</h3>
      <div className="service-container">

        {
          services.map(service => <Service
            key={service.key}
            service={service}
          ></Service>)
        }
      </div>
    </div>

  );
};

export default Services;