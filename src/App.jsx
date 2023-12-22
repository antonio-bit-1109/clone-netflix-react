import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import SecondSection from "./components/SecondSection";
import MyFooter from "./components/MyFooter";
import FilmSection from "./components/FilmSection";
import { Component } from "react";

class App extends Component {
    state = {
        filmsBySaga: {
            batman: [],
            hulk: [],
            matrix: [],
        },
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
                        throw new Error("429 INFAME PER TE TANTE COSE BRUTTE");
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
    }

    render() {
        return (
            <div className="App backGround-color">
                <NavBar />
                <SecondSection />
                <FilmSection filmSection={this.state.filmsBySaga.batman} />
                <FilmSection filmSection={this.state.filmsBySaga.hulk} />
                <FilmSection filmSection={this.state.filmsBySaga.matrix} />
                <MyFooter />
            </div>
        );
    }
}

export default App;
