import { Button, Col, Container, Row } from "react-bootstrap";
import LogoRandom from "../images/logo-random.jpg";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

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
                        <div className="d-flex align-items-start justify-content-end">
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
                                <div class="dropdown">
                                    <button
                                        class="btn btn-dark dropdown-toggle border-light px-4 py-1"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        English
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item" href="#">
                                                Korean
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">
                                                Klingonian
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">
                                                Romanesco Stretto
                                            </a>
                                        </li>
                                    </ul>
                                </div>
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
                            <div>
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
                <hr />
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
