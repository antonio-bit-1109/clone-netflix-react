import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import LogoRandom from "../images/logo-random.jpg";

const ProfilePage = () => {
    return (
        <Container className="d-flex justify-content-center text-light">
            <Row>
                <Row>
                    <Col sm={12}>
                        {" "}
                        <div className="d-flex justify-content-center">
                            <h1 className="display-3 fw-bold">Edit Profile</h1>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col sm={2}>
                        <div className="d-flex align-items-start justify-content-center justify-content-md-end">
                            <img src={LogoRandom} alt="logorandom" style={{ width: "100px" }} />
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Col>
                            <div>
                                <div className="bg-secondary">
                                    <h3 className="fs-5 p-2">Strive Student</h3>
                                </div>
                                <div className="mt-4">
                                    <h5>Language:</h5>
                                </div>
                                <Dropdown>
                                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                        English
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="bg-dark">
                                        <Dropdown.Item className="text-light" href="#/action-1">
                                            Romanesco Antico
                                        </Dropdown.Item>
                                        <Dropdown.Item className="text-light" href="#/action-2">
                                            Latino
                                        </Dropdown.Item>
                                        <Dropdown.Item className="text-light" href="#/action-3">
                                            Aramaico
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>{" "}
                            </div>
                        </Col>
                        <hr />
                        <Col>
                            <div>Lorem, ipsum:</div>
                            <div className="bg-secondary p-1 d-flex">
                                <p className="m-0">Lorem, ipsum:</p>
                            </div>
                            <div>Lorem, ipsum:</div>
                            <Button
                                variant="secondary rounded-0 p-0"
                                className="border border-secondary text-secondary bg-dark px-4 py-1 mt-4"
                            >
                                {" "}
                                EDIT{" "}
                            </Button>
                        </Col>
                        <hr />
                        <Col>
                            <div className="mb-3">
                                <h3>Autoplay controls </h3>
                                <div className="d-flex flex-column align-items-start">
                                    {" "}
                                    <div>
                                        {" "}
                                        <input type="checkbox" name="checkbox0" id="check0" /> Lorem, ipsum dolor.{" "}
                                    </div>
                                    <div>
                                        {" "}
                                        <input type="checkbox" name="checkbox0" id="check0" /> Lorem, ipsum dolor.{" "}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Col>
                </Row>
                <hr className="w-50 mx-auto" />

                <Row>
                    <Col>
                        <div className="d-flex gap-2 justify-content-center">
                            <Button variant="light">Secondary</Button>
                            <Button variant="dark text-secondary border-secondary">Secondary</Button>{" "}
                            <Button variant="dark text-secondary  border-secondary">Secondary</Button>{" "}
                        </div>
                    </Col>
                </Row>
            </Row>
        </Container>
    );
};

export default ProfilePage;
