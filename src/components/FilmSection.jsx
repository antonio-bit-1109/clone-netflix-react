import { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import SingleFilm from "./SingleFilm";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

class FilmSection extends Component {
    state = {};

    render() {
        const { filmSection } = this.props;
        console.log(filmSection);

        return (
            <Container className="my-3" fluid>
                <div className="my-4">
                    <InputGroup className="mt-5 max-width">
                        <Form.Control
                            placeholder="inserisci il titolo di un film..."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <Row>
                        {filmSection.slice(0, 6).map((film, index) => (
                            <SingleFilm key={`serie-di-film${index}`} film={film} index={index} />
                        ))}
                    </Row>
                </div>
            </Container>
        );
    }
}

export default FilmSection;
