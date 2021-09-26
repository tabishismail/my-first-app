import { MyNavbar } from "../"
import { Container, Row, Col, ProgressBar } from "react-bootstrap"
import "./css/index.css"



let Skills = () => {
    let illustrator=75;
    let photoshop=85;
    let after=80;
    let html=90;
    let javascript=75;
    let react=75;
    return (
        <Container className="main justify-content-around">
            <Row className="main-bg">
                <Row><MyNavbar /></Row>
                <Row className="mt-20 justify-content-between">
                    <Col xs lg="4">
                        <div className="status-bar">
                            <h2>Adobe Illustrator</h2>
                            <ProgressBar className="bar" variant="danger" now={illustrator} label={`${illustrator}%`}/>
                        </div>
                    </Col>
                    <Col xs lg="4">
                        <div className="status-bar">
                            <h2>Adobe Photoshop</h2>
                            <ProgressBar className="bar" variant="danger" now={photoshop} label={`${photoshop}%`} />
                        </div>
                    </Col>

                    <Col xs lg="4">
                        <div className="status-bar">
                            <h2>Adobe After Effect</h2>
                            <ProgressBar className="bar" variant="danger" now={after} label={`${after}%`} />
                        </div>
                    </Col>
                </Row>
                <Row className="mt-20 justify-content-between">
                    <Col xs lg="4">
                        <div className="status-bar">
                            <h2>HTML & CSS</h2>
                            <ProgressBar className="bar" variant="danger" now={html} label={`${html}%`}/>
                        </div>
                    </Col>
                    <Col xs lg="4">
                        <div className="status-bar">
                            <h2>Javascript</h2>
                            <ProgressBar className="bar" variant="danger" now={javascript} label={`${javascript}%`} />
                        </div>
                    </Col>

                    <Col xs lg="4">
                        <div className="status-bar">
                            <h2>React</h2>
                            <ProgressBar className="bar" variant="danger" now={react} label={`${react}%`} />
                        </div>
                    </Col>
                </Row>
                
            </Row>
        </Container >
    )
}

export default Skills;