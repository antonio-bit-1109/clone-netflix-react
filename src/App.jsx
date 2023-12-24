import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import SecondSection from "./components/SecondSection";
import MyFooter from "./components/MyFooter";

import { Component } from "react";
/* importo browser router */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SettingsPage from "./components/SettingsPage";
import MainPage from "./components/MainPage";

class App extends Component {
    state = {
        filmsBySaga: {
            batman: [],
            hulk: [],
            matrix: [],
        },
        isDataLoaded: null,
    };

    fetchFilms = async (NomeSaga) => {
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

            this.setState((prevState) => ({
                filmsBySaga: {
                    ...prevState.filmsBySaga,
                    [NomeSaga]: data.Search,
                },
            }));
        } catch (error) {
            console.log(error);
        }
    };

    async componentDidMount() {
        this.fetchFilms("batman");
        this.fetchFilms("hulk");
        this.fetchFilms("matrix");
        this.setState({ isDataLoaded: true });
    }

    render() {
        const { isDataLoaded } = this.state;

        return (
            <Router>
                <div className="App backGround-color">
                    <NavBar />
                    <SecondSection />
                    <Routes>
                        {" "}
                        {/* carica la route con main page solo dopo che ricevi i dati dalla fetch  */}
                        {isDataLoaded === true && (
                            <Route path="/homePage" element={<MainPage filmSection={this.state.filmsBySaga} />} />
                        )}
                        <Route path="/SettingsPage" element={<SettingsPage />} />
                    </Routes>{" "}
                    <MyFooter />
                </div>
            </Router>
        );
    }
}

export default App;
