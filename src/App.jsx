import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import SecondSection from "./components/SecondSection";
import MyFooter from "./components/MyFooter";

import { useEffect, useState } from "react";
/* importo browser router */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SettingsPage from "./components/SettingsPage";
import MainPage from "./components/MainPage";
import FirstLoad from "./components/FirstLoad";
import ProfilePage from "./components/ProfilePage";
import ListAndFormComponent from "./components/ListAndFormComponent";

/* import HooksComponent from "./components/HooksComponent"; */

const App = () => {
    const [filmsBySaga, setFilmsBySaga] = useState({
        batman: [],
        hulk: [],
        matrix: [],
    });

    const [isDataLoaded, setIsDataLoaded] = useState(null);
    const [showFirstLoad, setshowFirstLoad] = useState(true);

    const fetchFilms = async (NomeSaga) => {
        const options = {
            method: "GET",
            headers: {},
        };

        try {
            const response = await fetch(`http://www.omdbapi.com/?s=${NomeSaga}&apikey=195f13a4`, options);

            if (!response.ok) {
                if (response.status > 400 && response.status < 500) {
                    if (response.status === 429) {
                        throw new Error("429 INFAME, PER TE TANTE COSE BRUTTE, (tipo le lame)");
                    } else {
                        throw new Error("STAI CAPPELLANDO, RIGUARDA QUELLO CHE HAI SCRITTO");
                    }
                }
                if (response.status > 500 && response.status < 600) {
                    throw new Error("SERVER SPOMPATO, NON FUNZIA??");
                }
            }

            const data = await response.json();

            console.log(data);

            setFilmsBySaga((prevState) => ({
                ...prevState,
                [NomeSaga]: data.Search,
            }));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchFilms("batman");
        fetchFilms("hulk");
        fetchFilms("matrix");

        setIsDataLoaded(true);
    }, []); /* con array vuoto (dependancy) la funzione viene chiamata solo una volta, quando il componente viene montato */

    useEffect(() => {
        /* mostra se la pagina è stata ricaricata */
        const thePageHasBeenLoaded = performance.navigation.type === 1;

        if (thePageHasBeenLoaded === true) {
            setshowFirstLoad(false);
        }
    }, []); /* questo viene triggherato solo una volta , quando il componente viene montato  */

    /* PASSARE INFO DA FIGLIO A PADRE */
    /* 1. DEFINISCO UNA FUNZIONE NEL PADRE */
    const handleNavbarButtonClick = (value) => {
        setshowFirstLoad(value);
    };

    /* IMPORTO TUTTI GLI STATI DA SINGLEFILM IN APP  */

    const [seeComments, setSeeComments] = useState(false);
    const [submitted, setSubmitted] = useState(null);
    const [fullComment, setFullComment] = useState({
        email: "",
        name: "",
        surname: "",
        adult: false,
        comment: "",
        dateTime: "",
        phone: "",
    });

    const [copyOfFilm, setCopyOfFilm] = useState(null);
    console.log("copyOfFilm", copyOfFilm);

    const handleinputValue = (event) => {
        setFullComment({ ...fullComment, comment: event.target.value });
    };

    const handleFullComment = (propertyName, propertyValue) => {
        setFullComment({ ...fullComment, [propertyName]: propertyValue /* event.target.checked */ });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        postAFetch();
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

    return (
        <div /* onClick={cambiamoColoreDiSfondo} style={{ backgroundColor: colorBackground }} */>
            <Router>
                <div className="App backGround-color">
                    {/* 2. LA PASSO COME PROPS AL FIGLIO  */}
                    <NavBar handleNavbarButtonClick={handleNavbarButtonClick} />
                    {showFirstLoad ? <FirstLoad /> : ""}
                    <Routes>
                        {/* carica la route con main page solo dopo che ricevi i dati dalla fetch  */}
                        {isDataLoaded === true && (
                            <Route
                                path="/homePage"
                                element={
                                    <>
                                        {" "}
                                        <SecondSection />
                                        <MainPage
                                            filmSection={filmsBySaga}
                                            seeComments={seeComments}
                                            setSeeComments={setSeeComments}
                                            submitted={submitted}
                                            setSubmitted={setSubmitted}
                                            fullComment={fullComment}
                                            setFullComment={setFullComment}
                                            handleinputValue={handleinputValue}
                                            handleFullComment={handleFullComment}
                                            handleSubmit={handleSubmit}
                                            setCopyOfFilm={setCopyOfFilm}
                                        />
                                    </>
                                }
                            />
                        )}
                        <Route path="/SettingsPage" element={<SettingsPage />} />
                        <Route path="/ProfilePage" element={<ProfilePage />} />
                        <Route
                            path="/ListAndForum"
                            element={
                                <ListAndFormComponent
                                    film={copyOfFilm}
                                    seeComments={seeComments}
                                    submitted={submitted}
                                    fullComment={fullComment}
                                    adult={fullComment.adult}
                                    handleinputValue={handleinputValue}
                                    handleFullComment={handleFullComment}
                                    handleSubmit={handleSubmit}
                                />
                            }
                        />
                    </Routes>{" "}
                    <MyFooter />
                </div>
            </Router>
        </div>
    );
};

export default App;
