import React from "react";
import mayowa from "../images/mayowa.jpg";
import joshua from "../images/Joshua Monday.jfif";
import Navbarhome from "./navbarr";
import Footerbar from "./footerr";


const OurTeam = () => {
    return (
        <>
        <Navbarhome/>
        <div className="my-bottom-20 px20 bo center white bg-green">
            Our Team
        </div>
        <div className="my-col-8 off-1 px20 down-2"> MEET OUR WEB DEVELOPERS
        </div>
        <div className="my-col-10 down-2 my-bottom-90 off-1">
            <div className="my-col-3 ourteam">
                <div><img className="pic" src={mayowa} alt=""/></div>
                <div className="center px15 bold">Akintoye Mayowa</div>
                <div className="center px10">Frontend Software Engineer</div>
                <div className="px10 green center"><i className="fas fa-envelope"></i> akintoyemayowa1@gmail.com</div>
                <div className="px10 center"><i className="fab fa-github"></i> MayowaDeveloper2</div>
            </div>
            <div className="my-col-3 mg-10 ourteam">
                <div><img className="pic" src={joshua} alt=""/></div>
                <div className="center px15 bold">Joshua Monday</div>
                <div className="center px10">Backend Software Engineer</div>
                <div className="px10 green center"><i className="fas fa-envelope"></i> bumiche@gmail.com</div>
                <div className="px10 center"><i className="fab fa-github"></i> Ojobumiche</div>
            </div>
        </div>
        <Footerbar/>
        </>
    )
}

export default OurTeam;