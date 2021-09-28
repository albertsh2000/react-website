import React from "react";
import Flats from "./Components/Flats";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Question from "./Components/Question";
import Registration from "./Components/Registration";
import Services from "./Components/Services";


function App() {
    return (
        <div className="App">
            <Header />
            <Services />
            <Flats />
            <Registration />
            <Question />
            <Footer />
        </div>
    );
}

export default App;
