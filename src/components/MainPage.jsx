import FilmSection from "./FilmSection";

const MainPage = (props) => {
    const {
        filmSection,
        seeComments,
        setSeeComments,
        submitted,
        setSubmitted,
        fullComment,
        setFullComment,
        handleinputValue,
        handleFullComment,
        handleSubmit,
        setCopyOfFilm,
    } = props;

    return (
        <>
            <FilmSection
                titleSection="Trending Now"
                filmSection={filmSection.batman}
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
            <FilmSection
                titleSection="Watch It Again"
                filmSection={filmSection.hulk}
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
            <FilmSection
                titleSection="New Release"
                filmSection={filmSection.matrix}
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
    );
};

export default MainPage;
