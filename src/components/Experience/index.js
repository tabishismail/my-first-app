import { MyNavbar } from "../"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import pro1 from "../../assets/image/pro1.jpg"
import pro2 from "../../assets/image/pro2.jpg"
import pro3 from "../../assets/image/pro3.jpg"
import pro4 from "../../assets/image/pro4.jpg"



import "./css/index.css"

let Experience = () => {
    let demo = (demo) => {
        console.log(demo)
        { demo === "figo" ? window.open("https://figo-design.netlify.app", '_blank') :
        demo === "shopwise" ? window.open("https://shopwise-design.netlify.app/", '_blank') :
        demo === "salt" ? window.open("https://saltnpepper-tabish.netlify.app/", '_blank') :
        demo === "olx" ? window.open("https://olx-design.netlify.app/", '_blank') :
        alert("hello") }
    }
    let github=(github)=>{
        console.log(github)
        { github==="figo"? window.open("https://github.com/tabishismail/figo.git", '_blank') : 
        github ==="shopwise" ? window.open("https://github.com/tabishismail/shopwise-div.git", '_blank'):
        github ==="salt" ? window.open("https://github.com/tabishismail/saltnpepper-design.git", '_blank'):
        github ==="olx" ? window.open("https://github.com/tabishismail/olx-design.git", '_blank'):
        alert("hello")}
    }
    return (
        <Container className="main justify-content-around">
            <Row className="main-bg">
                <Row><MyNavbar /></Row>
                <Row className="mt-20">
                    <h1 className="head">Working Experience</h1>
                </Row>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={pro1} />
                            <Card.Body className="justify-content-center">
                                <Card.Title>Figo Resturant</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title
                                </Card.Text>
                                <div className="d-flex justify-content-around">
                                    <Button variant="danger" className="ml-5" onClick={() => github("figo")}>Github</Button>
                                    <Button variant="danger" className="ml-5" onClick={() => demo("figo")}>Demo</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={pro2} />
                            <Card.Body className="justify-content-center">
                                <Card.Title>Shopwise</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title
                                </Card.Text>
                                <div className="d-flex justify-content-around">
                                    <Button variant="danger" className="ml-5" onClick={() => github("shopwise")}>Github</Button>
                                    <Button variant="danger" className="ml-5" onClick={() => demo("shopwise")}>Demo</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={pro3} />
                            <Card.Body className="justify-content-center">
                                <Card.Title>Salt n Pepper</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title
                                </Card.Text>
                                <div className="d-flex justify-content-around">
                                    <Button variant="danger" className="ml-5" onClick={() => github("salt")}>Github</Button>
                                    <Button variant="danger" className="ml-5" onClick={() => demo("salt")}>Demo</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={pro4} />
                            <Card.Body className="justify-content-center">
                                <Card.Title>Olx Design</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title
                                </Card.Text>
                                <div className="d-flex justify-content-around">
                                    <Button variant="danger" className="ml-5" onClick={() => github("olx")}>Github</Button>
                                    <Button variant="danger" className="ml-5" onClick={() => demo("olx")}>Demo</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

            </Row>
        </Container >
    )
}

export default Experience;