import React from "react";
import trainlogoo from "../images/trainlogooo.svg";

const Footerbar = () => {
  return (
    <>
      <div className="container-fluid pt-1" style={{backgroundColor: "#f1fef4"}}>
        <div className="row mt-5">
          <div className="col-md-4 mb-4">
            <img className="img-fluid" src={trainlogoo} alt="trainlogoo" style={{ width: "60px", height: "60px" }} />
            <p className="mt-3">
              BSP Train is the one-stop destination for hassle-free train bookings. We are dedicated to providing you with a seamless and convenient way to plan your train journeys right from the palm of your hand.
            </p>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Menu Links</h5>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>About Us</li>
              <li>Our Team</li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Contact Links</h5>
            <address>
              <i className="fas fa-map-marker-alt"></i> P.M.B 1515<br />
              BSP Train Service, Ikorodu, Lagos, Nigeria
            </address>
            <p>
              <i className="fas fa-envelope"></i> info@bsptrain.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footerbar;
