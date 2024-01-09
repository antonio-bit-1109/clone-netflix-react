import { Component } from "react";
import { Alert, Button, Form } from "react-bootstrap";

const FormComponent = (props) => {
    const { film, handleinputValue, handleSubmit, handleFullComment, submitted, setSeeComments } = props;

    return (
        <Form className="d-flex flex-column gap-2" onSubmit={(event) => handleSubmit(event)}>
            <Form.Label htmlFor="comment" className="fw-bold p-1 my-1 mt-3 fs-5 rounded light-blue">
                Hai già visto questo film? Inviaci un commento!
            </Form.Label>
            <Form.Control
                type="text"
                id={film.imdbID}
                aria-describedby="textComment"
                rows={3}
                onChange={(event) => handleinputValue(event)}
                placeholder="commento..."
                required
            />

            {submitted ? (
                <Alert key={`key-success-${film.imdbID}`} variant={"success"}>
                    Commento inviato con successo!
                </Alert>
            ) : (
                ""
            )}
            {submitted === false ? (
                <Alert key={`key-danger-${film.imdbID}`} variant={"danger"}>
                    Errore! commento non inviato.
                </Alert>
            ) : (
                ""
            )}

            <Form.Check
                className="d-flex gap-2 text-light" // prettier-ignore
                type="switch"
                id="custom-switch"
                label="hai più di 18 anni? (⊙_⊙)"
                onChange={(event) => handleFullComment("adult", event.target.checked)}
            />
            <Form.Control
                type="text"
                id={film.imdbID}
                aria-describedby="passwordHelpBlock"
                rows={3}
                onChange={(event) => handleFullComment("name", event.target.value)}
                placeholder="Inserisci nome..."
                required
            />
            <Form.Control
                type="text"
                id={film.imdbID}
                aria-describedby="passwordHelpBlock"
                rows={3}
                onChange={(event) => handleFullComment("surname", event.target.value)}
                placeholder="inserisci cognome..."
                required
            />
            <Form.Control
                type="text"
                id={film.imdbID}
                aria-describedby="passwordHelpBlock"
                rows={3}
                onChange={(event) => handleFullComment("email", event.target.value)}
                placeholder="inserisci email..."
                required
            />
            <Form.Control
                type="datetime-local"
                id={film.imdbID}
                aria-describedby="passwordHelpBlock"
                rows={3}
                onChange={(event) => handleFullComment("dateTime", event.target.value)}
                placeholder="quando l'hai visto?"
                required
            />
            <Form.Control
                type="text"
                id={film.imdbID}
                aria-describedby="passwordHelpBlock"
                rows={3}
                onChange={(event) => handleFullComment("phone", event.target.value)}
                placeholder="numero cell"
                required
            />

            <Form.Text id="passwordHelpBlock" muted></Form.Text>
            <Button type="submit" variant="warning" className="text-light m-2">
                Invia commento
            </Button>
        </Form>
    );
};

export default FormComponent;
