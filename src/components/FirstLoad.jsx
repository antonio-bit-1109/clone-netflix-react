import { Container } from "react-bootstrap";

const FirstLoad = () => {
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
};

export default FirstLoad;
