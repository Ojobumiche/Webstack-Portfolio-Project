import React from "react";
import Navbarhome from "../components/navbarr";
import trainpic from "../images/trainticket.png";
import TrainSearchBox from "../components/searchtrain";
import desktop from "../images/desktop-computer-svgrepo-com.svg";
import office from "../images/office-svgrepo-com.svg";
import worldwide from "../images/worldwide-security-svgrepo-com.svg";
import trainbooking from "../images/trainbooking.jpg";
import Footerbar from "../components/footerr";


const Home = () => {
    return ( <>
      <Navbarhome/>
      <div className="container-fluid pb-5" style={{backgroundColor: "#f1fef4"}}>
        <div className="container-md">
            <div className="row ml-md-3 ml-sm-1 ml-xs-1">
                <div className="col">
                    <div className="px50 xs-px30 bold pt-5">Simple, secure, and reliable
                        direct booking
                    </div>
                    <div className="mb-1 px20">We save your time both while purchasing the checkings and during the travel.</div>
                    <div className="d-flex">
                     <button className="btn btncreate btn-success mt-3" style={{paddingTop: "15px", paddingBottom: "15px", paddingLeft: "15px", paddingRight: "15px", width: "250px", fontSize: "18px"}}>Create a free account</button>
                     <div className="align-items-center mt-3 text-success" style={{paddingTop: "15px", paddingBottom: "15px", paddingLeft: "15px", paddingRight: "15px", width: "250px", fontSize: "18px"}}>or Contact Us</div>
                    </div>
                </div>
                <div className="col">
                    <div className="pt-5"><img className="img-fluid" src={trainpic} alt="train"/></div>
                </div>
            </div>
        </div>
        <TrainSearchBox/>
      </div>
      <div className="col-md-8 mx-auto mt-4">
        <div className="mx-auto" style={{fontSize: "30px"}}>E-Tickets Advantage</div>
        <div className="row mt-2">
            <div className="col">
                <div className="card mx-auto mt-3" style={{width: "300px", paddingTop: "15px"}}>
                    <img className="card-img-top mx-auto" style={{width: "80px", height: "80px"}} src={desktop} alt="desktop"/>
                    <div className="card-body">
                        <p className="card-text">It's very easy to order a train ticket online. E-tickets cannot be lost or forgotten at home, or even
                        at work place. With your browser, you can print it out.</p>
                    </div>

                </div>

            </div>
            <div className="col">
                <div className="card mx-auto mt-3" style={{width: "300px", paddingTop: "15px"}}>
                    <img className="card-img-top mx-auto" style={{width: "80px", height: "80px"}} src={office} alt="office"/>
                    <div className="card-body">
                        <p className="card-text">There's no need to go to the ticket office additionally before your trip. Save your money and nerves.
                        Right from the comfort of your home book a ticket</p>
                    </div>

                </div>

            </div>
            <div className="col">
                <div className="card mx-auto mt-3" style={{width: "300px", paddingTop: "15px"}}>
                    <img className="card-img-top mx-auto" style={{width: "80px", height: "80px"}} src={worldwide} alt="worldwide"/>
                    <div className="card-body">
                        <p className="card-text">To order tickets all you need is internet, a couple minutes and a payment card. Grab bonuses and discounts.
                        Because you snooze, you lose. Order for a train ticket today.</p>
                    </div>

                </div>

            </div>

        </div>
      </div>
      <div className="col-md-12">
        <div><img className="img-fluid" src={trainbooking} alt="trainbooking"/></div>

      </div>
      <Footerbar/>
      
    
    </>)
}

export default Home;