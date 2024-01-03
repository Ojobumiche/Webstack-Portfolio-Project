import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";


const About = () => {
    return (
        <>
        <Navbar/>
        <div className="my-bottom-20 px20 bo center white bg-green">
            About
        </div>
        <div className="my-col-8 off-1 my-bottom-80  down-2">BSP Train was established in the year 2023 by two entrepreneurs, Akintoye Mayowa and Joshua for ALX Final Project portfolio. BSP Train offers railway transportation service to all Nigerians.
            We are the number one reliable train booking ticket platform in Nigeria. With our web application, you can conveniently plan your train journeys right from the
            palm of your hand.
        </div>
        <Footer/>
        </>
    )
}

export default About;