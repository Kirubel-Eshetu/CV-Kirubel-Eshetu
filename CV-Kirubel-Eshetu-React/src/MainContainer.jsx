import React from "react";
import "./MainContainer.css";
import NameContainer from "./NameContainer";
import About from "./About";
import Education from "./Education";
import Work from "./Work";
import Certificate from "./Certificate";
import Extracurricular from "./Extracurricular";
import Additional from "./Additional";
import Reference from "./Reference";

function MainContainer() {
    return (
        <div className="mainContainer">
            <NameContainer />
            
            <h3 className="h3it">About</h3>
            <About />

            <h3 className="eduh3">Education</h3>
            <Education />

            <h3>Work Experience</h3>
            <Work />

            <h3>Certifications</h3>
            <Certificate />
    
            <h3>Extracurricular Activity</h3>
            <Extracurricular />


            <h3>Additional Skills</h3>
            <Additional />

            
            <h3>References</h3>
            <Reference />


        </div>)
}

export default MainContainer;