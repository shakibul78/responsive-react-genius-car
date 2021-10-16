import React from 'react';
import Banner from './Banner/Banner.js';
import Experts from './Experts/Experts.js';
import Services from './Services/Services.js';
import './Home.css'

const Home = () => {
    return (
        <div className="home-container" id="home">
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>

        </div>
    );
};

export default Home;