import React from "react";
import Navbarhome from "./navbarr";
import mayowa from "../images/mayowa.jpg";
import joshua from "../images/joshua.jpg";
import Footerbar from "./footerr";

const Ourteamm = () => {
    return (
        <>
            <Navbarhome />
            <div className="container-fluid px-3 center white" style={{ backgroundColor: "green", paddingTop: "15px", paddingBottom: "15px" }}>
                Our Team
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center mt-3">
                        <div className="px20 mb-3">MEET OUR WEB DEVELOPERS</div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="card" style={{ backgroundColor: "#f8f8f6" }}>
                            <img className="card-img-top" src={mayowa} alt="Mayowa" />
                            <div className="card-body">
                                <div className="text-center px-3 bold">Akintoye Mayowa</div>
                                <div className="text-center px-2">Frontend Software Engineer</div>
                                <div className="text-center px-2 green"><i className="fas fa-envelope"></i> akintoyemayowa1@gmail.com</div>
                                <div className="text-center px-2"><i className="fab fa-github"></i> MayowaDeveloper2</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="card" style={{ backgroundColor: "#f8f8f6" }}>
                            <img className="card-img-top" src={joshua} alt="Joshua" />
                            <div className="card-body">
                                <div className="text-center px-3 bold">Joshua Monday</div>
                                <div className="text-center px-2">Backend Software Engineer</div>
                                <div className="text-center px-2 green"><i className="fas fa-envelope"></i> bumiche@gmail.com</div>
                                <div className="text-center px-2"><i className="fab fa-github"></i> Ojobumiche</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footerbar />
        </>
    );
};

export default Ourteamm;
