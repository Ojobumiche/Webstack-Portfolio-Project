import React, { useState } from "react";
import TicketBox from "../buyticket";
import TicketForm from "./ticketbuy1";
import CardPayment from "./cardpayment";
import CardPaymentForm from "./card";
import MultiStepProgressBar from "./multisteprogressbar";
import Navdash from "../nav";
import Sidebar from "../sidebar";

const Ticketbuy = () => {
  const [page, setPage] = useState("pageone");

  const nextPage = (page) => {
    setPage(page);
  };

  const nextPageNumber = (pageNumber) => {
    switch (pageNumber) {
      case "1":
        setPage("pageone");
        break;
      case "2":
        setPage("pagetwo");
        break;
      case "3":
        setPage("pagethree");
        break;
      case "4":
        alert("Ooops! Seems like you did not fill the form.");
        break;
      default:
        setPage("1");
    }
  };

  return (
    <div>
      <Navdash />  
      <MultiStepProgressBar page={page} onPageNumberClick={nextPageNumber} />
      {
        {
          pageone: <TicketBox onButtonClick={nextPage} />,
          pagetwo: <TicketForm onButtonClick={nextPage} />,
          pagethree: <CardPayment onButtonClick={nextPage} />,
          pagefour: <CardPaymentForm />,
        }[page]
      }
      <Sidebar />
    </div>
  );
}

export default Ticketbuy;
