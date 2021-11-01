import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, LogOut } = useAuth()
    return (
        <div>
            <Navbar collapseOnSelect
                expand="lg" className="py-1"
                bg="dark" variant="dark"
                fixed="top"
            >
                <Container>
                    <Navbar.Brand href="#home" className="text-warning"><i className="fas fa-globe-europe text-white"></i> Explore
                        <span className="text-white"> Your </span>
                        World</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto ">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/tours">OurTours</Nav.Link>
                            {/* <Nav.Link as={Link} to="/services">Services</Nav.Link> */}

                            {
                                user?.email ? <> <Nav.Link as={Link} to="/myBooking"><i className="fas fa-user-circle"></i> My Booking</Nav.Link>
                                    <NavDropdown title="Dashboard" id="collasible-nav-dropdown">
                                        <NavDropdown.Item as={Link} to="/manageList"><i className="fas fa-tasks"></i> Mnage Booking</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/addTour">
                                            <i className="fas fa-plus"></i> Add Tours</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                    </NavDropdown>
                                </> : ""
                            }
                            <Nav.Link as={Link} to="/package">Package</Nav.Link>

                            <NavDropdown title="Info" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/services">Services</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/about">About</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/blogs">Blogs</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/contact">Contact</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            {
                                user?.email ? <span className="text-info"><i className="fas fa-user-check"></i> {user?.displayName}</span> : ""
                            }
                            {
                                user?.email ? <Nav.Link onClick={LogOut}><i className="fas fa-sign-out-alt"></i> Sign Out</Nav.Link>
                                    : <Nav.Link as={Link} to="/login">
                                        <i className="fas fa-arrow-right"></i> Sign In</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;