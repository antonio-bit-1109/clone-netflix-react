import { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import SingleFilm from "./SingleFilm";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button, Col } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import AlertFilmNotFound from "./AlertFilmNotFound";
import ProgressBar from "react-bootstrap/ProgressBar";
import { ArrowLeft } from "react-bootstrap-icons";

const FilmSection = (props) => {
    /*  state = {
        inputValue: "",
        arrayOfFilms: null,
        isLoading: false,
        filmNotFound: null,
        updateProgressBar: 0,
    }; */

    const [inputValue, setInputValue] = useState("");
    console.log(inputValue);
    const [arrayOfFilms, setArrayOfFilms] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [filmNotFound, setFilmNotFound] = useState(null);
    const [updateProgressBar, setUpdateProgressBar] = useState(0);
    const [displayMessage, setDisplayMessage] = useState(false);

    const handleChange = (event) => {
        setInputValue(event.target.value);
        setFilmNotFound(false);
    };

    const handleClick = (inputValue) => {
        FetchAGet(inputValue);
    };

    const handleUpdateProgressBar = (value) => {
        setUpdateProgressBar(value);
    };
    useEffect(() => {
        setTimeout(() => {
            setDisplayMessage(false);
        }, 4000);
    }, [displayMessage]);

    useEffect(() => {
        setTimeout(() => {
            setFilmNotFound(false);
        }, 4000);
    }, [filmNotFound]);

    const FetchAGet = (value) => {
        setIsLoading(true);

        const options = {
            method: "GET",
            headers: {},
        };

        fetch(`http://www.omdbapi.com/?s=${value}&apikey=195f13a4`, options)
            .then((response) => {
                /*  */ handleUpdateProgressBar(22);
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
                handleUpdateProgressBar(66);
                console.log(data);
                if (data.Error) {
                    console.error(data.Error);
                    setFilmNotFound({ filmNotFound: true });
                }

                /* riporto is loading a false  */

                setArrayOfFilms(data.Search);
                setIsLoading(false);
                handleUpdateProgressBar(100);

                setTimeout(() => {
                    handleUpdateProgressBar(0);
                }, 1000);
            })
            .catch((err) => console.error(err));
    };

    const { filmSection } = props; /* array di films proveniente da app */
    console.log(filmSection);

    const { titleSection } = props;

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
                                        onChange={(event) => handleChange(event)}
                                    />
                                    <Button
                                        type="button"
                                        variant="warning"
                                        onClick={() =>
                                            inputValue !== "" ? handleClick(inputValue) : setDisplayMessage(true)
                                        }
                                    >
                                        Press Here
                                    </Button>
                                </InputGroup>
                            </Col>
                        </Row>
                        {filmNotFound && <AlertFilmNotFound inputValue={inputValue} />}
                        {/* se input vuoto e buttone press here premuto appare mini alert  */}
                        {inputValue === "" && displayMessage === true ? (
                            <div className="text-light animation" style={{ fontFamily: "sans-serif" }}>
                                <ArrowLeft /> inserisci il nome di una saga da cercare!{" "}
                            </div>
                        ) : null}

                        {/* qui c'è lo spinner */}

                        {isLoading ? (
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
                        {!arrayOfFilms
                            ? filmSection
                                  .slice(0, 6)
                                  .map((film, index) => (
                                      <SingleFilm key={`serie-di-film${index}`} film={film} index={index} />
                                  ))
                            : arrayOfFilms
                                  .slice(0, 6)
                                  .map((film, index) => (
                                      <SingleFilm key={`serie-di-film${index}`} film={film} index={index} />
                                  ))}
                    </Row>
                </div>
            </Container>
            <ProgressBar
                animated
                now={updateProgressBar}
                className="position-sticky bottom-0"
                style={{ zIndex: "100", visibility: updateProgressBar === 0 ? "hidden" : "visible" }}
            />
            ;
        </>
    );
};

export default FilmSection;
