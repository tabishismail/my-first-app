import { MyNavbar } from "../"
import { Container, Row, Col } from "react-bootstrap"
import img from "../../assets/image/9.jpg"
import "./css/index.css"


let About = () => {
    return (
        <Container className="main justify-content-around">

                <Row><MyNavbar /></Row>
                <Row className="mt-20">
                    <Col xs={12,{ order: 'first' }} lg="6" className="pad-5">
                    <Row className="justify-content-center">
                            <img className="pic1" src={img} alt="my Pic" />
                        </Row>
                    </Col>
                    <Col xs={12} lg="6" className="pad-5">
                        <div className="heading">
                            <h1 className="head">About Me</h1>
                            <h4 className="vision h4">My Vision</h4>
                            <p className="para vision">My personal vision is to have a life of meaning for myself
                                and others. It is important to me to live my life in a way that shows kindness,
                                care, and concern for family and friends and even strangers. Earn respect for myself
                                based on a recognition of my accomplishments and abilities, maintains a sense of
                                appreciation of the beauty of nature, and a sense of humor.I want to have a
                                career/life that includes constant learning and improvement for myself, but that
                                also creates an atmosphere of pleasurable learning and improvement for others.
                                I want to work with and around people, and it is important to me that they like me;
                                but it is even more important to me that they feel that I have helped them in some
                                way – not necessarily that I do a specific good deed, but more that some kindness
                                or thoughtfulness or wisdom of mine has touched them.</p>
                            <br />
                            <h4 className="vision h4">The objective to achieve the vision</h4>
                            <p className="para vision">To achieve a key position based on hard work,
                                dedication and utilizing ones own potentials.
                                I believe that the objective can achieved once
                                one can harmonize himself to explore and create
                                opportunities for learning, by setting growth target,
                                work with peers through teamwork, endeavour for personal
                                and professional development and mindful for valuable
                                contribution towards the overall enhancement of the
                                organization.  </p>
                        </div>
                    </Col>
                </Row>
        </Container>

    )
}

export default About;