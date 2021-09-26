import { Button, Navbar, Form, Nav,NavDropdown,FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/index.css"
import React from "react";
import {Link} from "react-router-dom";


let MyNavbar = () => {
    return (
        <Navbar expand="sm" className="myNavBar">
            <Navbar.Brand className="logo" href="#">Portfolio Design</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="mr-auto my-2 my-lg-0 myNav"
                    style={{ maxHeight: '400px' }}
                    navbarScroll
                >
                    <Nav.Link className="navBar" ><Link to="/" className="link">Home</Link></Nav.Link>
                    <Nav.Link className="navBar"><Link to="/about" className="link">About</Link></Nav.Link>
                    <Nav.Link className="navBar"><Link to="/skills" className="link">Skills</Link></Nav.Link>
                    <Nav.Link className="navBar"><Link to="/experience" className="link">Experience</Link></Nav.Link>
                    <NavDropdown className="navBar" title="Projects" id="navbarScrollingDropdown">
                        <NavDropdown.Item  className="link"><Link className="link">Graphic Designing</Link></NavDropdown.Item>
                        <NavDropdown.Item className="link" ><Link className="link">Web Developing</Link></NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="navBar" href="#">
                        Contact
                    </Nav.Link>
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
    )
}
export default MyNavbar