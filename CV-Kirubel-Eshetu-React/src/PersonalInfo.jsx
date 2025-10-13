import React from "react";
import "./PersonalInfo.css";

function PersonalInfo() {
    return (
        <div className="personalInfo">
            <img src="kirubel-eshetu-tefera.jpg" alt="Anime Hacker" className="animehacker" />

            <div className="info">
                <h2 className="h2personal">Personal Information</h2>
                <p className="personal">Gender: Male</p>
            </div>

            <hr />

            <div className="contactDiv">
                <h3 className="contact">Contact</h3>
                <p>Phone: <a href="tel: +251939806607" className="tellink1">+251939806607</a></p>
                <a href="tel: +251707086623" className="tellink2">+251707086623</a>
                <p>Email: <a href="mailto: Kirubelwinner@gmail.com" className="email">Kirubelwinner@gmail.com</a></p>
                <p className="adderss">Address: Akaki Kality Wereda 09</p>
            </div>

            <hr />

            <div className="languageDiv">
                <h3 className="language">Language Skills</h3>
                <ul className="languageList">
                    <li>Amharic: Native</li>
                    <li>English: Advanced</li>
                    <li>Afan-oromo: Low</li>
                </ul>
            </div>
        </div>
    )
};

export default PersonalInfo;