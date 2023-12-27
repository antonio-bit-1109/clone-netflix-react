import { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LogoNetflix from "../images/netflix_logo.png";
import { BellFill, Search } from "react-bootstrap-icons";
import KidsIcon from "../images/kids_icon.png";
import { Link } from "react-router-dom";

class NavBar extends Component {
    render() {
        /* qui metto costanti */

        /* 3. ACCHIAPPO LA PROPS NEL FIGLIO */
        const { handleNavbarButtonClick } = this.props;

        return (
            <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <Link to={"/homePage"}>
                            <img className="img-width" src={LogoNetflix} alt="" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="w-100 justify-content-between">
                            <div className="d-flex flex-column justify-content-center align-items-center flex-lg-row">
                                <Nav.Link className="p-1" href="#link">
                                    Tv Show
                                </Nav.Link>
                                <Nav.Link className="p-1" href="#home">
                                    Movies
                                </Nav.Link>
                                <Nav.Link className="p-1" href="#home">
                                    Recently Added
                                </Nav.Link>{" "}
                                <Link
                                    to={"/homePage"}
                                    /* 4. LA RICHIAMO ON CLICK E PASSO UN VALORE COME PARAMETRO  */
                                    onClick={() => handleNavbarButtonClick(false)}
                                    className="d-flex align-items-center text-decoration-none px-3"
                                >
                                    <div className="p-0" style={{ color: "red" }}>
                                        {" "}
                                        Home
                                    </div>
                                </Link>
                                <Link
                                    /* 4. LA RICHIAMO ON CLICK E PASSO UN VALORE COME PARAMETRO  */
                                    onClick={() => handleNavbarButtonClick(false)}
                                    to={"/SettingsPage"}
                                    className="d-flex align-items-center text-decoration-none "
                                >
                                    {" "}
                                    <div className="p-0" style={{ color: "red" }} href="#home">
                                        Settings Page{" "}
                                    </div>
                                </Link>
                                <Link
                                    /* 4. LA RICHIAMO ON CLICK E PASSO UN VALORE COME PARAMETRO  */
                                    onClick={() => handleNavbarButtonClick(false)}
                                    to={"/ProfilePage"}
                                    className="d-flex align-items-center text-decoration-none ms-2"
                                >
                                    {" "}
                                    <div className="pt-1" style={{ color: "red" }} href="#home">
                                        Profile Page{" "}
                                    </div>
                                </Link>
                            </div>

                            <div className=" align-items-center justify-content-end gap-2 d-none d-lg-flex">
                                <BellFill className="text-light" />
                                <p className="m-0 text-light">KIDS</p>
                                <Search className="text-light" />
                                <img src={KidsIcon} alt="icon" className="small-icon" />
                                <NavDropdown id="basic-nav-dropdown" className="btn-group dropstart">
                                    {" "}
                                    <NavDropdown.Item href="#action/3.1">Settings Page </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default NavBar;
