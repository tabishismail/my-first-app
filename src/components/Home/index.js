import { Container, Row, Col } from "react-bootstrap"
import "./css/index.css"
import img4 from "../../assets/image/5.jpeg"
import { MyNavbar } from "../"
function Home() {
    return (
        <Container className="main justify-content-around">
                <Row><MyNavbar /></Row>
                <Row className="mt-20">
                    <Col xs={12} lg="8" className="pad-5">
                        <div className="heading">
                            <h1 className="head">TABISH MUHAMMAD ISMAIL</h1>
                            <h2 className="object">PROFESSIONAL FOCUS AND OBJECTIVE</h2>
                            <h4 className="vision h4">My Vision</h4>
                            <p className="vision">To attain success in IT services.</p>
                            <br />
                            <h4 className="vision h4">The objective to achieve the vision</h4>
                            <p className="para vision">To achieve a key position based on hard work,
                                dedication and utilizing ones own potentials.
                                I believe that the objective can achieved once
                                one can harmonize himself to explore and create
                                opportunities for learning, by setting growth target,
                                work with peers through teamwork, endeavour for personal
                                and professional development and mindful for valuable
                                contribution towards the overall enhancement of the
                                organization.  </p>
                        </div>
                    </Col>
                    <Col xs={12,{ order: 'first' }} lg="4">
                        <Row className="justify-content-center">
                            <img className="picHome" src={img4} alt="my Pic" />
                        </Row>

                    </Col>
                </Row>
        </Container>
    )
}


export default Home;