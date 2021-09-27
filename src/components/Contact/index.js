import { MyNavbar } from "../"
import { Container, Row, Form, Button } from "react-bootstrap"




import "./css/index.css"

let Contact = () => {
    return (
        <Container className="main justify-content-around">
            <Row className="Mynav"><MyNavbar /></Row>
            <Row>
                <h1 className="headExper">Contact Me</h1>
            </Row>
            <Row>
                <div className="bg-White">

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message Area</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="danger" type="submit" className="myBtn">
                            Submit
                        </Button>

                </div>
            </Row>

        </Container >
    )
}

export default Contact;