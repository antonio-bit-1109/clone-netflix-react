import React from "react";
import { ListGroup } from "react-bootstrap";
import FormComponent from "./FormComponent";

const ListAndFormComponent = (props) => {
    const { film, handleinputValue, handleSubmit, handleFullComment, adult, submitted, fullComment, seeComments } =
        props;
    return (
        <div>
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
        </div>
    );
};

export default ListAndFormComponent;
