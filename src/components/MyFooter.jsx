import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { Meta, Instagram, Twitter, Youtube } from "react-bootstrap-icons";
import Col from "react-bootstrap/esm/Col";

const MyFooter = () => {
    return (
        <Container fluid className="text-secondary">
            <footer className="mt-5">
                <Row>
                    <Col>
                        <div
                            id="this"
                            className="d-flex justify-content-center text-secondary justify-content-start m-auto gap-4 mb-3 mt-5 fs-3"
                        >
                            <div>
                                <Meta />
                            </div>
                            <div>
                                <Instagram />
                            </div>
                            <div>
                                <Twitter />
                            </div>
                            <div>
                                <Youtube />
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <div
                        id="that"
                        className="d-flex text-secondary justify-content-center m-auto gap-4 flex-wrap flex-md-nowrap"
                    >
                        <Col xxl={2}>
                            <div>
                                <div className="mb-1">Audio and subtitles</div>
                                <div className="mb-1">Media Center</div>
                                <div className="mb-1">Privacy</div>
                                <div className="mb-1">Contact Us</div>
                            </div>
                        </Col>
                        <Col xxl={2}>
                            <div>
                                <div className="mb-1">Audio and subtitles</div>
                                <div className="mb-1">Media Center</div>
                                <div className="mb-1">Privacy</div>
                                <div className="mb-1">Contact Us</div>
                            </div>
                        </Col>
                        <Col xxl={2}>
                            <div>
                                <div className="mb-1">Audio and subtitles</div>
                                <div className="mb-1">Media Center</div>
                                <div className="mb-1">Privacy</div>
                                <div className="mb-1">Contact Us</div>
                            </div>
                        </Col>
                        <Col xxl={2}>
                            <div>
                                <div className="mb-1">Audio and subtitles</div>
                                <div className="mb-1">Media Center</div>
                                <div className="mb-1">Privacy</div>
                                <div className="mb-1">Contact Us</div>
                            </div>
                        </Col>
                    </div>
                </Row>
                <Row>
                    <Col xs={12}>
                        <div id="those" className="d-flex text-secondary justify-content-center m-auto gap-4">
                            {" "}
                            <button
                                type="button"
                                className="btn btn-dark text-secondary border border-secondary mt-4 mb-3"
                            >
                                Service Code
                            </button>
                        </div>
                        <div className="d-flex justify-content-center mb-10">
                            <div>©1999-2009 Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, vel?</div>{" "}
                        </div>
                    </Col>
                </Row>
            </footer>
        </Container>
    );
};

export default MyFooter;
