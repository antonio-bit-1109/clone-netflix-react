import FilmSection from "./FilmSection";

const MainPage = (props) => {
    const { filmSection } = props;

    return (
        <>
            <FilmSection titleSection="Trending Now" filmSection={filmSection.batman} />
            <FilmSection titleSection="Watch It Again" filmSection={filmSection.hulk} />
            <FilmSection titleSection="New Release" filmSection={filmSection.matrix} />
        </>
    );
};

export default MainPage;
