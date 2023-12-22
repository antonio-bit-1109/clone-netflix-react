import { Component } from "react";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Button, Form } from "react-bootstrap";

class SingleFilm extends Component {
    state = {
        seeComments: false,
        fullComment: { email: "", name: "", surname: "", adult: false, comment: "" },
    };

    handleSubmit(event) {
        event.preventDefault();
    }

    handleinputValue(event) {
        this.setState({ fullComment: { ...this.state.fullComment, comment: event.target.value } });
    }

    componentDidMount() {
        this.handleFetch();
    }

    handleFetch() {}

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
                                <Form onSubmit={(event) => this.handleSubmit(event)}>
                                    <Form.Label htmlFor="inputPassword5" className="fw-bold p-1">
                                        Hai già visto questo film? Lascia un commento!
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        id={film.imdbID}
                                        aria-describedby="passwordHelpBlock"
                                        rows={3}
                                        onChange={(event) => this.handleinputValue(event)}
                                        placeholder="commento..."
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
