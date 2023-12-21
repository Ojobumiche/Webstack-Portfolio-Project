import React from 'react';
import trainlogo from "../images/trainlogo.svg"

const Footer = () => {


  return (
    <>
        <div className="my-mother bg-color-code-2 my-bottom-70 xs-down-6 down-4">
          <div className="my-col-10 xs-10 textleft off-1 xs-down-5">
            <div className="my-col-4 xs-8">
              <div className="my-col-4 xs-off-3"><img className="biologo" src={trainlogo} alt="" /></div>
              <div className=" genetext px12 off-1">BSP Train is the one stop destination for hassle-free train bookings.
              We are dedicated to providing you with a seamless and convenient way to plan your train journeys right from the palm of your hand.</div>
            
            </div>
            <div className="my-col-4 px13 off-1 xs-down-6">
              <div className="my-col-10 xs-down-4 xs-10">
              <span className="color-code-1 bold px13">Menu Links</span>
              <div className="px12 down-4">
                <div>Home</div>
                <div>About Us</div>
                <div>Our Team</div>
                <div>My Booking</div>
              </div>
              </div>
            </div>
            <div className="my-col-3 xs-down-4 px13">
              <div className="my-col-10  xs-down-4 xs-10 off-2">
                <span className="color-code-1 bold px13"> Contact Links</span>
                <div className="px12 down-5"><i className="fas fa-map-marker-alt"></i> P.M.B 1515</div>
                <div className="xs-down-1 down-3 px12">BSP Train Service, Ikorodu, Lagos, Nigeria</div>
                <div className="xs-down-1 down-3 px12"><i className="fas fa-envelope"></i> info@bsptrain.com</div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Footer;