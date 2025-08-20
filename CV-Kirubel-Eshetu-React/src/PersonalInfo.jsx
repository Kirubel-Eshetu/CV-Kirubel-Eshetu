import React from "react";
import "./PersonalInfo.css";

function PersonalInfo() {
    return (<div className="personalInfo">
        <img src="anime-hacker.jpg" alt="Anime Hacker" className="imageKET" />
        <h2 className="h2personal">Personal Information</h2>
        <p className="personal">Gender: <strong>Male</strong></p>
        <hr />
        <h2 className="contact">Contact</h2>
        <p>Phone: <a href="tel: +251939806607" className="tellink1">+251939806607</a></p>
        <a href="tel: +251707086623" className="tellink2">+251707086623</a>
        <p>Email: <a href="mailto: Kirubelwinner@gmail.com" className="Email">Kirubelwinner@gmail.com</a></p>
        <p className="adderss">Address: Akaki Kality Wereda 09</p>
        <hr />
        <h2 className="language">Language Skills</h2>
        <ul className="languageList">
                <li>Amharic: Native</li>
                <li>English: Advanced</li>
                <li>Afan-oromo: Low</li>
            </ul>
    </div>)
}

export default PersonalInfo;