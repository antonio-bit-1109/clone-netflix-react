import { Component } from "react";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Button, Form } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

class SingleFilm extends Component {
    state = {
        seeComments: false,
        fullComment: { email: "", name: "", surname: "", adult: false, comment: "", dateTime: "", phone: "" },
        submitted: null,
    };

    handleSubmit(event) {
        event.preventDefault();

        this.postAFetch();
    }

    postAFetch() {
        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(this.state.fullComment),
        };

        fetch("https://striveschool-api.herokuapp.com/api/reservation", options)
            .then((response) => {
                console.log(response);
                if (!response.ok) {
                    /*  */
                    this.setState({ submitted: false });

                    if (response.status > 400 && response.status < 500) {
                        if (response.status === 429) {
                            throw new Error("429 INFAME, PER TE SOLO LE LAME!");
                        }
                    } else {
                        throw new Error("OCCHIO! STAI CAPPELLANDO DA QUALCHE PARTE!");
                    }
                } else {
                    if (response.status > 200 && response.status < 300) {
                        console.log(response.status);
                        console.log("SPEDITO, DAIE!");
                    }
                    this.setState({ submitted: true });
                }
            })
            .catch((err) => console.error(err));
    }

    handleinputValue(event) {
        this.setState({ fullComment: { ...this.state.fullComment, comment: event.target.value } });
    }

    render() {
        const { film } = this.props;
        console.log(film);

        const { index } = this.props;

        console.log(film);
        console.log(index);

        return (
            <Col className="h-50" sm={12} md={6} lg={4} xl={2}>
                <Card className="my-3 h-100">
                    <Card.Img
                        variant="top"
                        src={film.Poster}
                        className=" h-100"
                        onClick={() => this.setState({ seeComments: !this.state.seeComments })}
                    />
                    <div>
                        <ListGroup
                            className="text-center p-3"
                            style={{
                                display: this.state.seeComments ? "block" : "none",
                                animation: this.state.seeComments
                                    ? "scale-up-top .4s cubic-bezier(.39,.575,.565,1.000) both"
                                    : "none",
                            }}
                        >
                            <ListGroup.Item className="fw-bold">{film.Title}</ListGroup.Item>
                            <ListGroup.Item>{film.Type}</ListGroup.Item>
                            <ListGroup.Item>{film.Year}</ListGroup.Item>
                            <ListGroup.Item>{film.imdbID}</ListGroup.Item>

                            <div>
                                <Form
                                    className="d-flex flex-column gap-2"
                                    onSubmit={(event) => this.handleSubmit(event)}
                                >
                                    <Form.Label htmlFor="comment" className="fw-bold p-1 mt-1">
                                        Hai già visto questo film? Inviaci un commento!
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        id={film.imdbID}
                                        aria-describedby="textComment"
                                        rows={3}
                                        onChange={(event) => this.handleinputValue(event)}
                                        placeholder="commento..."
                                        required
                                    />

                                    {this.state.submitted ? (
                                        <Alert key={`key-success-${film.imdbID}`} variant={"success"}>
                                            Commento inviato con successo!
                                        </Alert>
                                    ) : (
                                        ""
                                    )}
                                    {this.state.submitted === false ? (
                                        <Alert key={`key-danger-${film.imdbID}`} variant={"danger"}>
                                            Errore! commento non inviato.
                                        </Alert>
                                    ) : (
                                        ""
                                    )}

                                    <Form.Check
                                        className="d-flex gap-2" // prettier-ignore
                                        type="switch"
                                        id="custom-switch"
                                        label="hai più di 18 anni? (⊙_⊙)"
                                        onChange={(event) =>
                                            this.setState({
                                                fullComment: { ...this.state.fullComment, adult: event.target.checked },
                                            })
                                        }
                                    />
                                    <Form.Control
                                        type="text"
                                        id={film.imdbID}
                                        aria-describedby="passwordHelpBlock"
                                        rows={3}
                                        onChange={(event) => {
                                            this.setState({
                                                fullComment: { ...this.state.fullComment, name: event.target.value },
                                            });
                                        }}
                                        placeholder="Inserisci nome..."
                                        required
                                    />
                                    <Form.Control
                                        type="text"
                                        id={film.imdbID}
                                        aria-describedby="passwordHelpBlock"
                                        rows={3}
                                        onChange={(event) => {
                                            this.setState({
                                                fullComment: { ...this.state.fullComment, surname: event.target.value },
                                            });
                                        }}
                                        placeholder="inserisci cognome..."
                                        required
                                    />
                                    <Form.Control
                                        type="text"
                                        id={film.imdbID}
                                        aria-describedby="passwordHelpBlock"
                                        rows={3}
                                        onChange={(event) => {
                                            this.setState({
                                                fullComment: { ...this.state.fullComment, email: event.target.value },
                                            });
                                        }}
                                        placeholder="inserisci email..."
                                        required
                                    />
                                    <Form.Control
                                        type="datetime-local"
                                        id={film.imdbID}
                                        aria-describedby="passwordHelpBlock"
                                        rows={3}
                                        onChange={(event) => {
                                            this.setState({
                                                fullComment: {
                                                    ...this.state.fullComment,
                                                    dateTime: event.target.value,
                                                },
                                            });
                                        }}
                                        placeholder="quando l'hai visto?"
                                        required
                                    />
                                    <Form.Control
                                        type="text"
                                        id={film.imdbID}
                                        aria-describedby="passwordHelpBlock"
                                        rows={3}
                                        onChange={(event) => {
                                            this.setState({
                                                fullComment: { ...this.state.fullComment, phone: event.target.value },
                                            });
                                        }}
                                        placeholder="numero cell"
                                        required
                                    />

                                    <Form.Text id="passwordHelpBlock" muted></Form.Text>
                                    <Button type="submit" variant="warning" className="text-light m-2">
                                        Invia commento
                                    </Button>
                                </Form>
                            </div>
                        </ListGroup>
                    </div>
                </Card>
            </Col>
        );
    }
}

export default SingleFilm;
