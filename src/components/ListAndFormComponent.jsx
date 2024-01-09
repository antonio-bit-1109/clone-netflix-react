import React from "react";
import { Col, ListGroup } from "react-bootstrap";
import FormComponent from "./FormComponent";
import { Link } from "react-router-dom";
import { ArrowBarLeft } from "react-bootstrap-icons";

const ListAndFormComponent = (props) => {
    const {
        film,
        handleinputValue,
        handleSubmit,
        handleFullComment,
        adult,
        submitted,
        fullComment,
        seeComments,
        setSeeComments,
    } = props;
    return (
        <div className="d-flex justify-content-center mt-5">
            <Link to={"/homePage"}>
                {" "}
                <button
                    onClick={() => {
                        setSeeComments(!seeComments);
                    }}
                    className="bg-transparent border-0"
                >
                    {" "}
                    <ArrowBarLeft className="text-light fs-1" />
                </button>
            </Link>
            <Col xs={12} md={10} lg={8} xl={5}>
                <ListGroup
                    className="text-center p-3"
                    style={{
                        /*  display: seeComments ? "block" : "none", */
                        animation: !seeComments ? "scale-up-top .4s cubic-bezier(.39,.575,.565,1.000) both" : "none",
                    }}
                >
                    <ListGroup.Item>
                        {" "}
                        <img src={film.Poster} alt={film.Title} />{" "}
                    </ListGroup.Item>
                    <ListGroup.Item className="fw-bold">{film.Title}</ListGroup.Item>
                    <ListGroup.Item>{film.Type}</ListGroup.Item>
                    <ListGroup.Item>{film.Year}</ListGroup.Item>
                    <ListGroup.Item>{film.imdbID}</ListGroup.Item>

                    <div>
                        {/* Form */}
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
            </Col>
        </div>
    );
};

export default ListAndFormComponent;
