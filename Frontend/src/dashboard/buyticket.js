import React from 'react';
import { IoMdTrain } from 'react-icons/io';

const TicketBox = () => {
  const fixedFrom = 'Lagos';
  const fixedTo = 'Abuja';
  const fixedPrice = 50;
  const takeOffTime = '10:00 AM';
  const arrivalTime = '12:00 PM';

  return (
    <div className="offset-md-1">
      <div className="card border-dark" style={{ width: '40rem' }}>
        <div className="card-body">
          <div className="row">
            <div className="col">
              <div style={{ fontSize: '60px' }}>
                <IoMdTrain />
              </div>
              <p className="bold">105A</p>
              <p>Nigerian Train Express</p>
            </div>
            <div className="col">
              <p>From: {fixedFrom}</p>
              <p>To: {fixedTo}</p>
            </div>
            <div className="col">
              <p>Take Off Time: {takeOffTime}</p>
              <p>Arrival Time: {arrivalTime}</p>
            </div>
            <div className="col">
              <p className="text-primary" style={{ fontSize: '50px' }}>
                ${fixedPrice}
                <span className="text-muted" style={{ fontSize: '20px'}}>/person</span>
              </p>
            </div>
          </div>

          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default TicketBox;
