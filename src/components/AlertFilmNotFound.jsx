import { Alert } from "react-bootstrap";

const AlertFilmNotFound = (props) => {
    console.log(props.inputValue);

    return (
        <Alert className="m-0 p-1" variant={"danger"}>
            Nessun Film Trovato con il nome "{props.inputValue}", cerca di nuovo.
        </Alert>
    );
};

export default AlertFilmNotFound;
