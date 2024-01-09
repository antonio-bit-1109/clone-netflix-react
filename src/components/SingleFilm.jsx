import { Component, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import FormComponent from "./FormComponent";
import ListAndFormComponent from "./ListAndFormComponent";
import { Link } from "react-router-dom";

const SingleFilm = (props) => {
    const { film } = props;
    console.log(film);

    const {
        index,
        seeComments,
        setSeeComments,
        submitted,
        setSubmitted,
        fullComment,
        setFullComment,
        handleinputValue,
        handleFullComment,
        handleSubmit,
        setCopyOfFilm,
    } = props;

    console.log(film);
    console.log(index);

    return (
        <Col className="h-50" sm={12} md={6} lg={4} xl={2}>
            {" "}
            <Link to={"/ListAndForum"}>
                <Card className="my-3 h-100">
                    <Card.Img
                        variant="top"
                        src={film.Poster}
                        className="gallery-img"
                        onClick={() => {
                            setSeeComments(!seeComments);
                            setCopyOfFilm(film);
                        }}
                    />

                    {/* <ListAndFormComponent
                    
                    film={film}
                    seeComments={seeComments}
                    submitted={submitted}
                    fullComment={fullComment}
                    adult={fullComment.adult}
                    handleinputValue={handleinputValue}
                    handleFullComment={handleFullComment}
                    handleSubmit={handleSubmit}
                /> */}

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
            </Link>
        </Col>
    );
};

export default SingleFilm;
