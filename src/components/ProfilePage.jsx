import { Button, Col, Container, Row } from "react-bootstrap";
import LogoRandom from "../images/logo-random.jpg";
import { Hr } from "react-bootstrap-icons";

const ProfilePage = () => {
    return (
        <div className="text-light ">
            <Container>
                <Row className="justify-content-center">
                    <Row>
                        <Col xxl={12}>
                            {" "}
                            <div className="d-flex justify-content-center">
                                <h2 className="display-2">Edit Profile</h2>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xxl={1}>
                            <img src={LogoRandom} alt="logo" style={{ width: "100px" }} />
                        </Col>
                        <Col xxl={6}>
                            <div>
                                <div>Strive Student</div>
                                <div>Language</div>
                                <Button>English</Button>
                            </div>
                            <hr />
                            <div>
                                <div>Maturity Settings</div>
                                <div>ALL MATURITY RATINGS</div>
                                <div>
                                    <p>Lorem, ipsum dolor.</p>
                                </div>
                                <Button>eDIT</Button>
                            </div>
                            <hr />
                            <div>
                                <p>Lorem ipsum dolor sit.</p>
                                <input type="checkbox" value={"ciao ciao cara"} /> ciao ciao
                                <input type="checkbox" value={"ciao ciao cara"} /> ciao ciao
                            </div>
                        </Col>
                    </Row>
                    <hr />
                    <Col xxl={6}>
                        <div className="d-flex justify-content-center">
                            <button>salva</button>
                            <button>ancora</button>
                            <button>tuttoquanto</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProfilePage;
