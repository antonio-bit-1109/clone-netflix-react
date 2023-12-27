import { Component } from "react";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import FormComponent from "./FormComponent";

class SingleFilm extends Component {
    state = {
        seeComments: false,
        fullComment: { email: "", name: "", surname: "", adult: false, comment: "", dateTime: "", phone: "" },
        submitted: null,
    };

    handleSubmit = (event) => {
        event.preventDefault();

        this.postAFetch();
    };

    handleFullComment = (propertyName, propertyValue) => {
        this.setState({
            fullComment: { ...this.state.fullComment, [propertyName]: propertyValue /* event.target.checked */ },
        });
    };

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

    handleinputValue = (event) => {
        this.setState({ fullComment: { ...this.state.fullComment, comment: event.target.value } });
    };

    render() {
        const { film } = this.props;
        console.log(film);

        const { index } = this.props;

        console.log(film);
        console.log(index);

        return (
            <Col className="h-50" sm={12} md={6} lg={4} xl={2}>
                {" "}
                <Card className="my-3 h-100">
                    <Card.Img
                        variant="top"
                        src={film.Poster}
                        className="gallery-img"
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
                                {/* Form */}
                                <FormComponent
                                    film={film}
                                    handleinputValue={this.handleinputValue}
                                    handleSubmit={this.handleSubmit}
                                    handleFullComment={this.handleFullComment}
                                    adult={this.state.fullComment.adult}
                                    submitted={this.state.submitted}
                                />
                            </div>
                        </ListGroup>
                    </div>
                </Card>
            </Col>
        );
    }
}

export default SingleFilm;
