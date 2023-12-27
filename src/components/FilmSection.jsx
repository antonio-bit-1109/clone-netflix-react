import { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import SingleFilm from "./SingleFilm";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button, Col } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import AlertFilmNotFound from "./AlertFilmNotFound";
import ProgressBar from "react-bootstrap/ProgressBar";

class FilmSection extends Component {
    state = {
        inputValue: "",
        arrayOfFilms: null,
        isLoading: false,
        filmNotFound: null,
        updateProgressBar: 0,
    };

    handleChange(event) {
        this.setState({ ...this.state, inputValue: event.target.value, filmNotFound: false });
    }

    handleClick = () => {
        this.FetchAGet(this.state.inputValue);
    };

    handleUpdateProgressBar = (value) => {
        this.setState({ updateProgressBar: value });
    };

    FetchAGet(value) {
        this.setState({ isLoading: true });
        const options = {
            method: "GET",
            headers: {},
        };

        fetch(`http://www.omdbapi.com/?s=${value}&apikey=195f13a4`, options)
            .then((response) => {
                /*  */ this.handleUpdateProgressBar(22);
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
                    return response.json();
                }
            })
            .then((data) => {
                this.handleUpdateProgressBar(66);
                console.log(data);
                if (data.Error) {
                    console.error(data.Error);
                    this.setState({ filmNotFound: true });
                }

                /* riporto is loading a false  */
                this.setState({ arrayOfFilms: data.Search, isLoading: false });
                this.handleUpdateProgressBar(100);

                setInterval(() => {
                    this.handleUpdateProgressBar(0);
                }, 800);
            })
            .catch((err) => console.error(err));
    }

    render() {
        const { filmSection } = this.props; /* array di films proveniente da app */
        console.log(filmSection);

        const { titleSection } = this.props;

        return (
            <>
                <Container fluid>
                    <div className="my-2">
                        <div className="d-flex align-items-end gap-4">
                            <Row>
                                <Col sm={12} md={3} lg={5}>
                                    {" "}
                                    <div className="d-flex align-items-end h-100">
                                        {" "}
                                        <h4 className="text-light m-0">{titleSection}</h4>
                                    </div>
                                </Col>

                                <Col sm={12} md={9} lg={7}>
                                    <InputGroup className="mt-5 max-width">
                                        <Form.Control
                                            placeholder="Cerca un film..."
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                            onChange={(event) => this.handleChange(event)}
                                        />
                                        <Button
                                            type="button"
                                            variant="warning"
                                            onClick={() => {
                                                this.handleClick();
                                            }}
                                        >
                                            Press Here
                                        </Button>
                                    </InputGroup>
                                </Col>
                            </Row>
                            {this.state.filmNotFound && <AlertFilmNotFound inputValue={this.state.inputValue} />}

                            {/* qui c'è lo spinner */}

                            {this.state.isLoading ? (
                                <Spinner animation="grow" variant="warning">
                                    {" "}
                                    <div className="ms-5 d-flex align-items-center"> Attendere...</div>
                                </Spinner>
                            ) : (
                                ""
                            )}
                            {/* spinner up */}
                        </div>
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
                <ProgressBar
                    animated
                    now={this.state.updateProgressBar}
                    className="position-sticky bottom-0"
                    style={{ zIndex: "100", visibility: this.state.updateProgressBar === 0 ? "hidden" : "visible" }}
                />
                ;
            </>
        );
    }
}

export default FilmSection;
