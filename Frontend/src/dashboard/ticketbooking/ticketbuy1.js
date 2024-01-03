import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


const TicketForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberValid, setPhoneNumberValid] = useState(true);

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
    setPhoneNumberValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  const states = [
    'Lagos', 'Abuja', 'Kaduna', 'Kwara'
  ];


  
  return (
    <>
      <div className="container">
        <form>
          <h1>BSP Train Ticket Booking Form</h1>
          <div className="row mt-3">
            <div className="col-md-3">
              <label htmlFor="firstName">
                <span className="text-danger">*</span> First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="lastName">
                <span className="text-danger">*</span> Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <label htmlFor="email">
                <span className="text-danger">*</span> Email
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <label htmlFor="phonenumber">
                <span className="text-danger">*</span> Phone Number
              </label>
              <div>
                <PhoneInput
                  country={'ng'}
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  inputProps={{
                    required: true,
                    className: `form-control`,
                  }}
                />
                {!phoneNumberValid && (
                  <div className="invalid-feedback d-block">
                    Please enter a valid phone number.
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
                <label htmlFor="address">
                    <span className="text-danger">*</span> Address
                </label>
                <input
                 type="text"
                 placeholder="Address"
                 id="address"
                 className="form-control"
                
                />
            </div>

          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <label htmlFor="gender">
                <span className="text-danger">*</span> Gender
              </label>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    className="form-check-input"
                  />
                  <label className="form-check-label" htmlFor="male">Male</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    className="form-check-input"
                  />
                  <label className="form-check-label" htmlFor="female">Female</label>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <label htmlFor="journeyfrom">
                <span className="text-danger">*</span> Journey From
              </label>
              <select className="form-control overflow-auto">
              <option selected disabled>Select State</option>
                {states.map((state, index) => (
                  <option key={index}>{state}</option>
                ))}
              </select>
            </div>

          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <label htmlFor="journeyto">
                <span className="text-danger">*</span> Journey To
              </label>
              <select className="form-control">
               <option selected disabled>Select State</option>
                {states.map((state, index) => (
                  <option key={index}>{state}</option>
                ))}
              </select>

            </div>

          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <label htmlFor="departuredate">
                <span className="text-danger">*</span> Departure Date
              </label>
              <input
                type="date"
                id="departuredate"
                name="departuredate"
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <label htmlFor="departuretime">
                <span className="text-danger">*</span> Departure Time
              </label>
              <input
               type="time"
               id="time"
               name="departuretime"
               className="form-control"
              />

            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <label htmlFor="agreement">
                <span className="text-danger">*</span> When you apply for BSP Train Ticket application,
                the personal data entries will be collected. By undersigning, "I agree" you give permission
                to process your personal detail entered within the application for the purpose of creating a train ticket.
              </label>
              <div>
              <div className="form-check">
                  <input
                    type="radio"
                    id="agree"
                    name="agreement"
                    className="form-check-input"
                  />
                  <label className="form-check-label" htmlFor="agree">I agree</label>
              </div>
              <div className="form-check">
                <input
                 type="radio"
                 id="notagree"
                 name="agreement"
                 className="form-check-input"
                />
                <label className="form-check-label" htmlFor="notagree">I do not agree</label>
              </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <button className="form-control bg-green white">
                Submit your application
              </button>

            </div>

          </div>
        </form>
      </div>
    </>
  );
};

export default TicketForm;
