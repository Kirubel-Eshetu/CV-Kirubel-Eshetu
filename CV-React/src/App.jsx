import React from "react";
import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";
import Inspire from "./Inspire";
import "./App.css";

function App(){
    return(
        <div className="app">
            <Header />
            <Container />
            <Inspire />
            <Footer />
        </div>
    )
};

export default App;