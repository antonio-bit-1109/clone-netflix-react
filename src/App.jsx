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
/* import HooksComponent from "./components/HooksComponent"; */

const App = () => {
    const [filmsBySaga, setFilmsBySaga] = useState({
        batman: [],
        hulk: [],
        matrix: [],
    });

    const [isDataLoaded, setIsDataLoaded] = useState(null);
    const [showFirstLoad, setshowFirstLoad] = useState(true);
    const [colorBackground, setColorbackground] = useState("rgb(43, 48, 53)");
    /*  state = {
        filmsBySaga: {
            batman: [],
            hulk: [],
            matrix: [],
        },
        isDataLoaded: null,
        showFirstLoad: true,
    }; */

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
    }, []);

    /* la roba qui dentro viene triggherata ogni volta che colorbackground cambia  */
    useEffect(() => {
        console.log("sfondo cambiato!!");
    }, [colorBackground]);

    const cambiamoColoreDiSfondo = () => {
        const randomNumber0 = Math.floor(Math.random() * 255);
        const randomNumber1 = Math.floor(Math.random() * 255);
        const randomNumber2 = Math.floor(Math.random() * 255);

        setColorbackground(`rgb(${randomNumber0} , ${randomNumber1} , ${randomNumber2})`);
    };

    /* PASSARE INFO DA FIGLIO A PADRE */
    /* 1. DEFINISCO UNA FUNZIONE NEL PADRE */
    const handleNavbarButtonClick = (value) => {
        setshowFirstLoad(value);
    };

    return (
        <div onClick={cambiamoColoreDiSfondo} style={{ backgroundColor: colorBackground }}>
            <Router>
                <div className="App backGround-color">
                    {/* 2. LA PASSO COME PROPS AL FIGLIO  */}
                    <NavBar handleNavbarButtonClick={handleNavbarButtonClick} />
                    <SecondSection />
                    {showFirstLoad ? <FirstLoad /> : ""}
                    <Routes>
                        {/* carica la route con main page solo dopo che ricevi i dati dalla fetch  */}
                        {isDataLoaded === true && (
                            <Route path="/homePage" element={<MainPage filmSection={filmsBySaga} />} />
                        )}
                        <Route path="/SettingsPage" element={<SettingsPage />} />
                        <Route path="/ProfilePage" element={<ProfilePage />} />
                    </Routes>{" "}
                    <MyFooter />
                    {/* <HooksComponent /> */}
                </div>
            </Router>
        </div>
    );
};

export default App;
