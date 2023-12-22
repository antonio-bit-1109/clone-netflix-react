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
            <Col sm={12} md={6} lg={4} xl={2}>
                <Card className="single-dimensions my-3">
                    <Card.Img variant="top" src={film.Poster} className="single-dimensions" />
                </Card>
            </Col>
        );
    }
}

export default SingleFilm;
