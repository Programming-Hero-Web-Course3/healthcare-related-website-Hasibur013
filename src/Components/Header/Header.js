
import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const {user,logOut}=useAuth();
    return (
        <Navbar  sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#services">Kapasia Healthcare</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={HashLink} to="/services#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/doctors#doctors">Doctors</Nav.Link>
                    </Nav>
                    <Nav>
                        { user.email?
                            <Button onClick={logOut} variant="primary">Logout</Button>
                            :
                            <Nav.Link as={Link} eventKey={2} to="/login" className="text-danger">
                            Login
                            </Nav.Link>
                        }
                        <Navbar.Text>
                             {user.displayName}
                        </Navbar.Text>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;