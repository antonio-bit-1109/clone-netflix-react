import { Component, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import FormComponent from "./FormComponent";
import ListAndFormComponent from "./ListAndFormComponent";

const SingleFilm = (props) => {
    const { film } = props;
    console.log(film);

    const { index } = props;

    console.log(film);
    console.log(index);

    const [seeComments, setSeeComments] = useState(false);
    const [fullComment, setFullComment] = useState({
        email: "",
        name: "",
        surname: "",
        adult: false,
        comment: "",
        dateTime: "",
        phone: "",
    });
    const [submitted, setSubmitted] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        postAFetch();
    };

    const handleFullComment = (propertyName, propertyValue) => {
        setFullComment({ ...fullComment, [propertyName]: propertyValue /* event.target.checked */ });
    };

    const postAFetch = () => {
        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(fullComment),
        };

        fetch("https://striveschool-api.herokuapp.com/api/reservation", options)
            .then((response) => {
                console.log(response);
                if (!response.ok) {
                    /*  */
                    setSubmitted(false);

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
                    setSubmitted(true);
                }
            })
            .catch((err) => console.error(err));
    };

    const handleinputValue = (event) => {
        setFullComment({ ...fullComment, comment: event.target.value });
    };

    return (
        <Col className="h-50" sm={12} md={6} lg={4} xl={2}>
            {" "}
            <Card className="my-3 h-100">
                <Card.Img
                    variant="top"
                    src={film.Poster}
                    className="gallery-img"
                    onClick={() => setSeeComments(!seeComments)}
                />

                <ListAndFormComponent
                    film={film}
                    handleinputValue={handleinputValue}
                    handleSubmit={handleSubmit}
                    handleFullComment={handleFullComment}
                    adult={fullComment.adult}
                    submitted={submitted}
                    fullComment={fullComment}
                    seeComments={seeComments}
                />

                {/*  {<div>
                    <ListGroup
                        className="text-center p-3"
                        style={{
                            display: seeComments ? "block" : "none",
                            animation: seeComments ? "scale-up-top .4s cubic-bezier(.39,.575,.565,1.000) both" : "none",
                        }}
                    >
                        <ListGroup.Item className="fw-bold">{film.Title}</ListGroup.Item>
                        <ListGroup.Item>{film.Type}</ListGroup.Item>
                        <ListGroup.Item>{film.Year}</ListGroup.Item>
                        <ListGroup.Item>{film.imdbID}</ListGroup.Item>

                        <div>
                            
                            <FormComponent
                                film={film}
                                handleinputValue={handleinputValue}
                                handleSubmit={handleSubmit}
                                handleFullComment={handleFullComment}
                                adult={fullComment.adult}
                                submitted={submitted}
                            />
                        </div>
                    </ListGroup>
                </div>} */}
            </Card>
        </Col>
    );
};

export default SingleFilm;
