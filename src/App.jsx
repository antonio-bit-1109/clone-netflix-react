import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import SecondSection from "./components/SecondSection";
import MyFooter from "./components/MyFooter";

function App() {
    return (
        <div className="App backGround-color">
            <NavBar />
            <SecondSection />

            <MyFooter />
        </div>
    );
}

export default App;
