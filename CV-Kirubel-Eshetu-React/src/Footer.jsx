import React from "react";
import "./Footer.css";

function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer>
            <div class="footerdiv">
                <p> &copy; Kirubel Eshetu Tefera</p>
                <p>All rights received {year}</p>
            </div>
        </footer>
    )
}

export default Footer;