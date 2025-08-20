import React from "react";
import PersonalInfo from "./PersonalInfo";
import MainContainer from "./MainContainer";
import "./Container.css";

function Container() {
    return (
        <div className="container">
            <PersonalInfo />
            <MainContainer />
        </div>
    )
}

export default Container;