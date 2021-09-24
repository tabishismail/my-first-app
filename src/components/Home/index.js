import { Container, Row, Col } from "react-bootstrap"
import "./css/index.css"
import img4 from "../../assets/image/5.jpeg"
import { MyNavbar } from "../"
function Home() {
    return (
        <Container className="main justify-content-around">
            <Row >
                <MyNavbar />
            </Row>
            <Row className="mt-20">
                <Col xs lg="8">
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
                <Col xs lg="4">
                    <Row className="justify-content-center">
                        <img className="pic" src={img4} alt="my Pic" />
                    </Row>

                </Col>

            </Row>
        </Container>
    )
}
let Experience = () => {
    return (
        <div>
            <hr />
            <h2>PROFESSIONAL EXPERIENCE</h2>
            <hr />
            <h4>Employment Overview</h4>
            <p>I have almost 10 years (including 1 years training in Karachi Stock Exchange) full-time work
                experience in different organizations.  The following is the summary of my work experience:</p>
            <br />
            <table>
                <thead>
                    <tr>
                        <th>Sr.#</th>
                        <th>Tenure</th>
                        <th>Job Title</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>July 2020 to still working</td>
                        <td>Accountant Plus IT Co-Ordinator - Top Agencies</td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>September 2019 to March 2021</td>
                        <td>Business Developer Manager- Riaz Travel N Tours (PVT) Ltd.</td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td>September 2017 to Sept 2019</td>
                        <td>Sales N Marketing Manager- Rotana Travel N Tours</td>
                    </tr>
                    <tr>
                        <th>4</th>
                        <td>October 2014 to September 2017</td>
                        <td>IT-Co-Ordinator- Top Agencies</td>
                    </tr>
                    <tr>
                        <th>5</th>
                        <td>April 2013 to September 2014</td>
                        <td>IT Co-Ordinator  MAYS Marketing (HSC Related Company) </td>
                    </tr>
                    <tr>
                        <th>6</th>
                        <td>Dec 2010 to April 2013 </td>
                        <td>IT Co-Ordinator - TTN Exports</td>
                    </tr>
                    <tr>
                        <th>7</th>
                        <td>Dec 2009 to Sept 2010</td>
                        <td>Assistant Accountant Advani Enterprises</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Home;