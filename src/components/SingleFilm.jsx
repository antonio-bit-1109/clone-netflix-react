import { Component } from "react";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

class SingleFilm extends Component {
    state = {};

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
                    style={{ maxHeight: "100%", minWidth: "200px", objectFit: "cover" }}
                >
                    <Card.Img variant="top" src={film.Poster} className="single-dimensions h-100" />
                    <div>
                        <ListGroup className="text-center">
                            <ListGroup.Item>{film.Title}</ListGroup.Item>
                            <ListGroup.Item>{film.Type}</ListGroup.Item>
                            <ListGroup.Item>{film.Year}</ListGroup.Item>
                            <ListGroup.Item>{film.imdbID}</ListGroup.Item>
                        </ListGroup>
                    </div>
                </Card>
            </Col>
        );
    }
}

export default SingleFilm;
