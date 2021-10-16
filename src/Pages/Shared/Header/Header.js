import { faCar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashLink } from 'react-router-hash-link';
import React from 'react';
import { Container, Nav, Navbar, Button, Col, Image } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth.js';
import './Header.css';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="/home"><FontAwesomeIcon icon={faCar} /> Genius</Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>

                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="btn btn-outline-warning" size="sm">Logout</Button>
                            :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                        <Navbar.Text>
                            <Nav.Link to="/login#login"> <FontAwesomeIcon icon={faUser} /> {user?.displayName}</Nav.Link>
                        </Navbar.Text>

                        <Col xs={6} md={4}>
                            <Image className="header-img" src={user?.photoURL} roundedCircle />
                        </Col>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;