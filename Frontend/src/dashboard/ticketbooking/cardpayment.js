import React, { useState } from "react";
import "./card.css";
import mastercard from "../../images/Mastercard-entry-left.png";
import visa from "../../images/Visa-entry-left.png";

const CardPayment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const formatExpiryDate = (input) => {
    const formattedInput = input.replace(/\D/g, '').slice(0, 4);
    if (formattedInput.length > 2) {
        return  `${formattedInput.slice(0, 2)}/${formattedInput.slice(2)}`;
    }
    return formattedInput;
  };

  const handleExpiryDateChange = (e) => {
    const formattedExpiryDate = formatExpiryDate(e.target.value);
    setExpiryDate(formattedExpiryDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Card Number', cardNumber);
    console.log('Expiry Date', expiryDate);
    console.log('CVV', cvv);
  };

  return (
    <div className="row w-100 justify-content-center">
      {/* order summary */}
      <div className="col-md-3">
        <div className="card w-100 pb-3 pl-3 pr-3" style={{ maxWidth: "300px", backgroundColor: "black", color: "white" }}>
          <div className="card-body">
            <div className="card-title center">Ticket Summary</div>
          </div>
            <hr className="hr" style={{borderColor: "white", marginTop: "-15px"}} />
            <div className="row">
                <div className="col-md-6">
                    <div>Journey To</div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div>Train:</div>
                </div>
                <div className="col">
                    <div>048A</div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div>Name:</div>
                </div>
                <div className="col">
                    <div>BSP Train</div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div>Departure Date:</div>
                </div>
                <div className="col">
                    <div>Monday, January 8, 2024</div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div>Departure Time:</div>
                </div>
                <div className="col">
                    <div>8:30 AM</div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div>Destination:</div>
                </div>
                <div className="col">
                    <div>Lagos</div>
                </div>
            </div>
            <hr className="hr" style={{borderColor: "white"}} />
            <div className="row">
                <div className="col-md-6">
                    <div>Passengers</div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div>1 Adult</div>
                </div>
                <div className="col">
                    <div>$50</div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div>0 Children</div>
                </div>
                <div className="col">
                    <div>$0</div>
                </div>
            </div>
            <hr className="hr" style={{borderColor: "white"}} />
            <div className="row">
                <div className="col">
                    <div style={{ fontSize: "20px", color: "green"}}>Total</div>
                </div>
                <div className="col">
                    <div style={{ fontSize: "20px", color: "green"}}>$50.00</div>
                </div>
            </div>
        </div>
      </div>

      {/* payment section */}
      <div className="col-md-6">
        <div className="card w-100" style={{ maxWidth: "500px" }}>
          <div className="card-body">
            <h5 className="card-title">Enter your card details to pay</h5>
            <div className="row d-flex align-items-center mt-3">
                <div className="col-md-8">
                    <input type="radio"/>
                    <label className="ml-1">Pay with Mastercard and Visa</label>
                </div>
                <div className="col-md-1">
                    <img src={mastercard} alt="mastercard"></img>
                </div>
                <div className="col-md-1">
                    <img src={visa} alt="visa"></img>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <label>
                            <span></span> Card Number
                        </label>
                        <input
                         type="text"
                         className="form-control"
                         value={cardNumber}
                         onChange={(e) => setCardNumber(e.target.value)}
                         placeholder="0000 0000 0000 0000"
                         maxLength="16"
                         required
                        />
                    </div>
                    <div className="col-md-6">
                        <label>
                            <span></span> Card Holder Name
                        </label>
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <label>
                            <span></span> Expiry Date
                        </label>
                        <input
                         type="text"
                         className="form-control"
                         value={expiryDate}
                         onChange={handleExpiryDateChange}
                         placeholder="MM/YY"
                         maxLength="5"
                         required
                        />
                    </div>
                    <div className="col-md-6">
                        <label>
                            <span></span> CVV
                        </label>
                        <input
                         type="text"
                         className="form-control"
                         value={cvv}
                         onChange={(e) => setCvv(e.target.value)}
                         placeholder="123"
                         maxLength="3"
                         required
                        />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12">
                        <button className="form-control bg-green white">
                            Make your payment
                        </button>
                    </div>

                </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPayment;
