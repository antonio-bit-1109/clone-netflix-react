import { Component } from "react";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";

class SingleFilm extends Component {
    state = {};

    render() {
        const { film } = this.props;
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
                </Card>
            </Col>
        );
    }
}

export default SingleFilm;
