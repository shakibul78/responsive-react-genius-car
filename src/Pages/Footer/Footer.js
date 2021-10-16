import React from 'react';
import { NavLink as NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

const Footer = () => {
    return (
        <div>

            <footer className="footer">
                <div className="container footer-container">
                    <div className="row">

                        <div className="footer-col">
                            <h4>Company</h4>
                            <ul>

                                <li>
                                    <NavLink className="footer-link" to="">About us</NavLink>
                                </li>
                                <li>
                                    <NavLink className="footer-link" to="">Our services</NavLink >
                                </li>
                                <li>
                                    <NavLink className="footer-link" to="">Privacy policy</NavLink >
                                </li>
                                <li>
                                    <NavLink className="footer-link" to="">Affiliate program</NavLink >
                                </li>

                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Get help</h4>
                            <ul>
                                <li>
                                    <NavLink className="footer-link" to="">FAQ</NavLink >
                                </li>
                                <li>
                                    <NavLink className="footer-link" to="">Shipping</NavLink >
                                </li>
                                <li>
                                    <NavLink className="footer-link" to="">Returns</NavLink>
                                </li>
                                <li>
                                    <NavLink className="footer-link" to="">Order status</NavLink >
                                </li>

                            </ul>
                        </div>


                        <div className="footer-col">
                            <h4>Online shop</h4>
                            <ul>
                                <li>
                                    <NavLink className="footer-link" to="">Watch</NavLink >
                                </li>
                                <li>
                                    <NavLink className="footer-link" to="">Bag</NavLink>
                                </li>
                                <li>
                                    <NavLink className="footer-link" to="">Shoes</NavLink>
                                </li>
                                <li>
                                    <NavLink className="footer-link" to="">Dress</NavLink >
                                </li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Follow us</h4>
                            <div>
                                <a className="social-link" href="https://www.facebook.com/groups/completewebdevelopment4">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>

                                <a className="social-link" href="https://www.facebook.com/groups/completewebdevelopment4">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>

                                <NavLink className="social-link" to="">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </NavLink >
                                <NavLink className="social-link" to="">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </NavLink>
                            </div>
                        </div>


                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;