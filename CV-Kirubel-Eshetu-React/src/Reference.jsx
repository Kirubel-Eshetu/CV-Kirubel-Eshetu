import React from "react";
import "./Reference.css";

function Reference(){
    return( 
    <div className="refContainer">
                <div className="refleft">
                    <p><strong>Instructor</strong> <br />
                        Jimma University <br />
                        Institute of Technology <br />
                        Ermiyas Tesfaye Abera
                    </p>
                    <p><strong>Instructor</strong> <br />
                        Jimma University <br />
                        Institute of Technology <br />
                        Yekoye Tigabu Asmare
                    </p>
                    <p><strong>ICT Department Head</strong> <br />
                        AMN <br />
                        Daniel Zewdie
                    </p>
                </div>

                <div className="refright">
                    <p className="ermi"><i>Contact detail:</i><br />
                        Email: <a href="mailto: ermidbu@gmail.com" className="ermi1">ermidbu@gmail.com</a> <br />
                        <a href="mailto" className="ermi2">ermiyas.abera@ju.edu.et</a><br />
                        Phone: <a href="tel: +251954356992" className="ermi3">+251954356992</a>
                    </p>

                        <p className="yekoye">
                            <i>Contact detail:</i><br />
                            Email: <a href="mailto: yekoya104@gmail.com" className="link0">yekoya104@gmail.com</a> <br />
                            <a href="mailto: yekoye.asmare@ju.edu.et;" className="link1">yekoye.asmare@ju.edu.et</a> <br />
                            Phone: <a href="tel:+251931863003" className="link2">+251931863003</a>
                        </p>
                        <p className="dani">
                            <i>Contact detail:</i><br />
                            Email: <a href="mailto: Danizew@gmail.com">Danizew@gmail.com</a>
                            <br />
                            Phone: <a href="tel:+251912127988"><span>+251912127988</span></a>
                        </p>
                </div>
            </div>
            )
};

export default Reference;