import React from "react";
import "./Extracurricular.css";

function Extracurricular(){
    return(
        <div className="extraContainer">
                <div className="extraleft">
                    <p className="fellow"> Oct 2023 - Feb 2024 <br />
                        Social media manager <br />
                        <strong>EvaSUE</strong> 
                    </p>
                    <p className="space"> Oct 2020 - Mar 2021 <br />
                        Team Leader <br />
                        <strong>CMMTS SPACE SCIENCE CLUB</strong> <br />
                    </p>
                </div>

                <div className="extraright">
                    <p className="ptop">
                        I have served my fellowship through digital media. I have gained
                        practical experiences on social media management, audio
                        recording and editing and graphics design.
                    </p>
                    <p className="pbottom">
                        I have served as a team leader for my high school
                        space science club which helped me extend my knowledge on astronomy and get
                        exposure to elevate my communication and leadership skills.
                    </p>
                </div>
            </div>
    )
}

export default Extracurricular;