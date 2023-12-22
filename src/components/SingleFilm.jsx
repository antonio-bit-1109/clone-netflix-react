import { Component } from "react";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";

class SingleFilm extends Component {
    state = {
        seeComments: false,
    };

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
                    onClick={() => this.setState({ seeComments: !this.state.seeComments })}
                >
                    <Card.Img variant="top" src={film.Poster} className="single-dimensions h-100" />
                    <div>
                        <ListGroup
                            className="text-center"
                            style={{
                                display: this.state.seeComments ? "block" : "none",
                                animation: this.state.seeComments
                                    ? "scale-up-top .4s cubic-bezier(.39,.575,.565,1.000) both"
                                    : "scale(0)",
                            }}
                        >
                            <ListGroup.Item className="fw-bold">{film.Title}</ListGroup.Item>
                            <ListGroup.Item>{film.Type}</ListGroup.Item>
                            <ListGroup.Item>{film.Year}</ListGroup.Item>
                            <ListGroup.Item>{film.imdbID}</ListGroup.Item>
                            <Button variant="info" className="text-light m-2">
                                Lascia un commento
                            </Button>
                        </ListGroup>
                    </div>
                </Card>
            </Col>
        );
    }
}

export default SingleFilm;
