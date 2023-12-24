import { Component } from "react";
import FilmSection from "./FilmSection";

class MainPage extends Component {
    render() {
        const { filmSection } = this.props;

        return (
            <>
                <FilmSection titleSection="Trending Now" filmSection={filmSection.batman} />
                <FilmSection titleSection="Watch It Again" filmSection={filmSection.hulk} />
                <FilmSection titleSection="New Release" filmSection={filmSection.matrix} />
            </>
        );
    }
}

export default MainPage;
