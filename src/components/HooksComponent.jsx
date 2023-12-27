import { useState } from "react";
import { Button } from "react-bootstrap";

const HooksComponent = () => {
    /* USESTATE --> using a state inside a functional component */

    /* nome variabile nello stato , metodo in grado di modificare lo stato , valore */

    /*  state = {
      componentIsRunning : false
   } */
    const [number, handleComponentRun] = useState(0);
    const [color, handleChangeColor] = useState("red");
    const [shapeHeight, handleShapeHeight] = useState("50px");
    const [shapeWidth, handleWidth] = useState("50px");

    return (
        <div className="d-flex justify-content-center align-items-center">
            <Button
                style={{ backgroundColor: color, height: shapeHeight, width: shapeWidth }}
                onMouseEnter={() => {
                    const randomNum0 = Math.floor(Math.random() * 255);
                    const randomNum1 = Math.floor(Math.random() * 255);
                    const randomNum2 = Math.floor(Math.random() * 255);
                    handleChangeColor(`rgb(${randomNum0}, ${randomNum1}, ${randomNum2})`);
                }}
                onClick={() => handleComponentRun(number + 1)}
                onMouseLeave={() => {
                    const randomNum3 = Math.floor(Math.random() * 999);
                    handleShapeHeight(`${randomNum3}px`);
                    handleWidth(`${randomNum3}px`);
                }}
            >
                {" "}
                valore --{">"} {number}
            </Button>
        </div>
    );
};
export default HooksComponent;
