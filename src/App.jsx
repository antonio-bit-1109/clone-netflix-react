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
            superman: [],
            matrix: [],
        },
    };

    fetchFilms = (NomeSaga) => {
        const options = {
            method: "GET",
            headers: {},
        };

        fetch(`http://www.omdbapi.com/?s=${NomeSaga}&apikey=195f13a4`, options)
            .then((response) => {
                if (!response.ok) {
                    if (response.status > 400 && response.status < 500) {
                        if (response.status === 429) {
                            throw new Error("429 INFAME PER TE TANTE COSE BRUTTE");
                        } else {
                            throw new Error("STAI CAPPELLANDO , RIGUARDA QUELLO CHE HAI SCRITTO");
                        }
                    }
                    if (response.status > 500 && response.status < 600) {
                        throw new Error("SERVER SPOMPATO, NON FUNZIA??");
                    }
                } else {
                    return response.json();
                }
            })
            .then((data) => {
                console.log(data);
                this.setState(() => ({
                    filmsBySaga: {
                        ...this.state.filmsBySaga,
                        [NomeSaga]: data.Search || [],
                    },
                }));
            })

            .catch((err) => {
                console.log(err);
            });
    };

    componentDidMount() {
        this.fetchFilms("batman");
        this.fetchFilms("superman");
        this.fetchFilms("matrix");
    }

    render() {
        return (
            <div className="App backGround-color">
                <NavBar />
                <SecondSection />
                <FilmSection filmSection={this.state.filmsBySaga.batman} />
                <FilmSection filmSection={this.state.filmsBySaga.superman} />
                <FilmSection filmSection={this.state.filmsBySaga.matrix} />
                <MyFooter />
            </div>
        );
    }
}

export default App;
