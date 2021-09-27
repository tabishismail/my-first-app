import {Navbar, Nav,Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/index.css"
import React from "react";
import { Link } from "react-router-dom";


let MyNavbar = () => {
    return (
        <Navbar sticky="top" expand="sm" className="myNavBar">
            <Container>
                <Navbar.Brand className="logo" href="#">Portfolio Design</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="navBar" ><Link to="/" className="link">Home</Link></Nav.Link>
                        <Nav.Link className="navBar"><Link to="/about" className="link">About</Link></Nav.Link>
                        <Nav.Link className="navBar"><Link to="/skills" className="link">Skills</Link></Nav.Link>
                        <Nav.Link className="navBar"><Link to="/experience" className="link">Experience</Link></Nav.Link>
                        <Nav.Link className="navBar"><Link to="/contact" className="link">Contact</Link></Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default MyNavbar

{/* <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> */}