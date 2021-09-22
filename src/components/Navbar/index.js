import { Button, Navbar, Form, Nav,NavDropdown,FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/index.css"

let MyNavbar = () => {
    return (

        <Navbar bg="danger" expand="sm">
            <Navbar.Brand className="logo" href="#">Portfolio Design</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '400px' }}
                    navbarScroll
                >
                    <Nav.Link className="navBar" href="#action1">Home</Nav.Link>
                    <Nav.Link className="navBar" href="#action2">About</Nav.Link>
                    <Nav.Link className="navBar" href="#action2">Skills</Nav.Link>
                    <Nav.Link className="navBar"href="#action2">Experience</Nav.Link>
                    <NavDropdown className="navBar" title="Projects" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Graphic Designing</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Web Developing</NavDropdown.Item>
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