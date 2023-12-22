import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import SecondSection from "./components/SecondSection";

function App() {
    return (
        <div className="App backGround-color">
            <NavBar />
            <SecondSection />
        </div>
    );
}

export default App;
