import React from "react";
import "./Work.css";

function Work() {
    return (
        <div className="workContainer">
            <div className="workleft">
                <p className="insa">
                    Mar 2025 - Present <br />
                    <strong>System Developer</strong> <br />
                    INSA
                </p>
                <p className="ison">
                    Aug 2024 - Dec 2024 <br />
                    <strong>Customer Service Representative</strong> <br />
                    iSON Xperiences
                </p>
                <p className="amn">
                    Jul 2023 - Sep 2023 <br />
                    <strong>IT technician </strong> <br />
                    AMN
                </p>
            </div>
            <div className="workright">
                <p className="dev">
                    After joining INSA, I have been assigned to secure digital payment division.
                    I am working as a system developer on a locally developed system called Derash which is a National Billing Payment System (NBPS).
                </p>
                <p className="csr">
                    During my 5-month tenure at iSON Xperiences, I provided technical support and assistance to Safaricom Ethiopia customers,
                    addressing their inquiries and resolving issues related to network usage and MPesa.
                </p>
                <p className="it">
                    I have spent my internship period working at Addis Media Network as an IT technician and Network Administrator.
                    I worked under department of hardware maintenance and Networking.
                </p>
            </div>
        </div>
    )
};

export default Work;