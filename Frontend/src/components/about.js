import React from "react";
import Navbarhome from "./navbarr";
import Footerbar from "./footerr";


const About = () => {
    return (
        <>
        <Navbarhome/>
        <div className="container-fluid px20 center white" style={{backgroundColor: "green", paddingTop: "15px", paddingBottom: "15px"}}>
            About
        </div>
        <div className="col-md-8 mt-3" style={{marginBottom: "240px"}}>
            <div className="ml-3">BSP Train was established in the year 2023 by two software engineering developers, Akintoye Mayowa and Joshua as their ALX Final Project portfolio. BSP Train offers railway transportation service to all Nigerians.
                We are the number one reliable train booking ticket platform in Nigeria. With our web application, you can conveniently plan your train journeys right from the
                palm of your hand.
            </div>

        </div>
        <Footerbar/>
        </>
    )
}

export default About;