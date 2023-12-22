import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import { List, ThreeDotsVertical } from "react-bootstrap-icons";

class SecondSection extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col xs={6}>
                        <div className="d-flex justify-content-start gap-3 m-2">
                            <h3 className="fw-bold text-light">TV SHOW</h3>
                            <Dropdown>
                                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                    Genres
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Thriller</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Action action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Romance</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>{" "}
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div className="d-flex justify-content-end h-100 align-items-center">
                            <div className="border rounded border-secondary d-flex align-items-center p-1">
                                <List className="text-secondary fs-5" />
                            </div>
                            <div className="border rounded border-secondary d-flex align-items-center p-1">
                                <ThreeDotsVertical className="text-secondary fs-5" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default SecondSection;
