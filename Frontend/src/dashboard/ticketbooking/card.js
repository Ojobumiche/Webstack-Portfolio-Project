import React, { useState } from "react";
import "./card.css";
import mastercard from "../../images/Mastercard-entry-left.png";
import visa from "../../images/Visa-entry-left.png"

const CardPaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const formatExpiryDate = (input) => {
    const formattedInput = input.replace(/\D/g, '').slice(0, 4);
    if (formattedInput.length > 2) {
      return `${formattedInput.slice(0, 2)}/${formattedInput.slice(2)}`;
    }
    return formattedInput;
  };

  const handleExpiryDateChange = (e) => {
    const formattedExpiryDate = formatExpiryDate(e.target.value);
    setExpiryDate(formattedExpiryDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Card Number:', cardNumber);
    console.log('Expiry Date:', expiryDate);
    console.log('CVV:', cvv);
  };

  return (
    
    <div className="card w-100" style={{ maxWidth: "500px" }}>
      <div className="card-body">
        <h5 className="card-title">Enter your card details to pay</h5>
        <div className="row d-flex align-items-center mt-3">
          <div className="col-md-8">
            <input type="radio" />
            <label className="ml-1">Pay with Mastercard and Visa</label>
          </div>
          <div className="col-md-2">
            <img src={mastercard} alt="mastercard"></img>
          </div>
          <div className="col-md-2">
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
                placeholder="1234 5678 9012 3456"
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
  );
};

export default CardPaymentForm;
