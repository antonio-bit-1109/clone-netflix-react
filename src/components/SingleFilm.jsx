import { Component } from "react";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Button, Form } from "react-bootstrap";

class SingleFilm extends Component {
    state = {
        seeComments: false,
        fullComment: { email: "", name: "", surname: "", adult: false, comment: "", dateTime: "", phone: "" },
        feedBack: "",
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

        fetch("https://striveschool-api.herokuapp.com/api/reservation", options).then((response) =>
            console.log(response.status)
        );
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
                <Card
                    className="single-dimensions my-3"
                    style={{
                        maxHeight: "100%",
                        minWidth: "200px",
                        objectFit: "cover",
                        /*  display: this.state.seeComments ? "block" : "none", */
                    }}
                >
                    <Card.Img
                        variant="top"
                        src={film.Poster}
                        className="single-dimensions h-100"
                        onClick={() => this.setState({ seeComments: !this.state.seeComments })}
                    />
                    <div>
                        <ListGroup
                            className="text-center"
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
                                    <Form.Check
                                        className="d-flex gap-2" // prettier-ignore
                                        type="switch"
                                        id="custom-switch"
                                        label="hai più di 18 anni? (⊙_⊙)"
                                        required
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
