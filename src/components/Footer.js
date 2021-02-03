import React from 'react';

export function Footer() {
    return (

        <div className="footer d-md-flex" style={{backgroundColor:"#476F70"}}>

                <div className="divone">
                    <ul style={{listStyle:"none"}}>
                        <h4>Address</h4>
                        <hr></hr>
                        <li>ZZZZ Workspace</li>
                        <li>Street 43,building 4A</li>
                        <li>Industrial Area</li>
                        <li>Aqwertyu</li>
                        <li>Mumbai</li>
                    </ul>
                </div>
                <div className="divtwo">
                    <ul style={{listStyle:"none"}}>
                        <h4>Clients</h4>
                        <hr></hr>
                        <li>XYZ org</li>
                        <li>ABC org</li>
                        <li>IJK org</li>
                        <li>Qwerty Corp</li>
                        <li>ZAQ PVT</li>
                    </ul>
                </div>
                <div className="divthree">
                    <ul style={{listStyle:"none"}}>
                        <h4>Stack</h4>
                        <hr></hr>
                        <li>HTML5,CSS,JS</li>
                        <li>React</li>
                        <li>Angular</li>
                        <li>NodeJS</li>
                        <li>Django</li>
                    </ul>
                </div>
                <div className="divfour">
                    <ul style={{listStyle:"none"}}>
                        <h4>About Being Geeky</h4>
                        <hr></hr>
                        <li>About CEO</li>
                        <li>About Team</li>
                        <li>Location</li>
                        <li>Working Atmosphere</li>
                        <li>Contact Being Geeky</li>
                    </ul>
                </div>
            </div>
    )
}
