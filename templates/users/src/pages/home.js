import React from "react";
import Navbar from "../components/navbar";
import Trainsearch from "../components/trainsearch";
import Footer from "../components/footer";

const Home = () => {
    return ( <>
      <Navbar/>
      <div className="bg-landing">
          <div className="my-col-10 off-1 down-4">
              <div className="my-col-7 oxygenB white px15">Embark on a seamless journey with our user-friendly train booking platform, where
                  every click brings you closer to your next adventure. Whether you're a solo traveler,
                  planning a family gertaway, or organizing a group trip, we've got your ticket to hassle-free
                  bookings and unforgettable experiences.
              </div>
              <Trainsearch/>

          </div>
      </div>
      <Footer/>
    
    </>)
}

export default Home;