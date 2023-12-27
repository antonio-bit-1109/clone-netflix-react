import { Component } from "react";
import { Container } from "react-bootstrap";

class FirstLoad extends Component {
    render() {
        return (
            <Container>
                <div
                    id="alert-iniziale"
                    className="text-light d-flex align-items-center justify-content-center fs-3"
                    style={{ minHeight: "220px" }}
                >
                    {" "}
                    ☝ Hey! Seleziona uno dei link rossi in alto per iniziare la navigazione! ☝{" "}
                </div>
            </Container>
        );
    }
}

export default FirstLoad;
