import { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import SingleFilm from "./SingleFilm";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button } from "react-bootstrap";

class FilmSection extends Component {
    state = {
        inputValue: "",
        arrayOfFilms: null,
    };

    handleChange(event) {
        this.setState({ ...this.state, inputValue: event.target.value });
    }

    handleClick = () => {
        this.FetchAGet(this.state.inputValue);
    };

    FetchAGet(value) {
        const options = {
            method: "GET",
            headers: {},
        };

        fetch(`http://www.omdbapi.com/?s=${value}&apikey=195f13a4`, options)
            .then((response) => {
                if (!response.ok) {
                    if (response.status > 400 && response.status < 500) {
                        if (response.status === 429) {
                            throw new Error("429 INFAME PER TE TANTE COSE BRUTTE");
                        } else {
                            throw new Error("STAI CAPPELLANDO , RIGUARDA QUELLO CHE HAI SCRITTO");
                        }
                    }
                    if (response.status > 500 && response.status < 600) {
                        throw new Error("SERVER SPOMPATO, NON FUNZIA??");
                    }
                } else {
                    console.log(response);
                    return response.json();
                }
            })
            .then((data) => {
                console.log(data);
                this.setState({ arrayOfFilms: data.Search });
            });
    }

    render() {
        const { filmSection } = this.props; /* array di films proveniente da app */
        console.log(filmSection);

        return (
            <Container className="my-3" fluid>
                <div className="my-4">
                    <InputGroup className="mt-5 max-width">
                        <Form.Control
                            placeholder="inserisci il titolo di un film..."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onChange={(event) => this.handleChange(event)}
                        />
                        <Button type="button" variant="warning" onClick={this.handleClick}>
                            Press Here
                        </Button>
                    </InputGroup>
                    <Row>
                        {!this.state.arrayOfFilms
                            ? filmSection
                                  .slice(0, 6)
                                  .map((film, index) => (
                                      <SingleFilm key={`serie-di-film${index}`} film={film} index={index} />
                                  ))
                            : this.state.arrayOfFilms
                                  .slice(0, 6)
                                  .map((film, index) => (
                                      <SingleFilm key={`serie-di-film${index}`} film={film} index={index} />
                                  ))}
                    </Row>
                </div>
            </Container>
        );
    }
}

export default FilmSection;
