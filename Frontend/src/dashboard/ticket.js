import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../buyticket.css';
import Navdash from './nav';
import Sidebar from './sidebar';

const BuyTicketPage = () => {
  const navigate = useNavigate();
  const [selectedSeat, setSelectedSeat] = useState(null);

  const handleSeatSelection = (seatNumber) => {
    setSelectedSeat(seatNumber);
  };

  const isAvailableSeat = (seatNumber) => [2, 5, 10, 15].includes(seatNumber);

  const handleBuyTicket = () => {
    if (selectedSeat && isAvailableSeat(selectedSeat)) {
      alert(`Seat ${selectedSeat} is available. Redirecting to checkout...`);
      navigate('/checkout');
    } else {
      alert('Please select an available seat coloured green in order to buy the ticket.');
    }
  };

  return (
    <>
    <Navdash />  
        <div className='off-4'>
            <h1>Buy Ticket - Lagos to Kaduna</h1>
            <p>Select your seat:</p>
            <div className="seat-map">
            <div className="seat-row">
                {/* Seats 1 to 10 */}
                {Array.from({ length: 10 }, (_, index) => (
                <div
                    key={index}
                    className={`seat ${selectedSeat === index + 1 ? 'selected' : ''} ${
                    isAvailableSeat(index + 1) ? 'available' : ''
                    }`}
                    onClick={() => handleSeatSelection(index + 1)}
                >
                    {index + 1}
                </div>
                ))}
            </div>
            <div className="seat-row">
                {/* Seats 11 to 20 */}
                {Array.from({ length: 10 }, (_, index) => (
                <div
                    key={index + 10}
                    className={`seat ${selectedSeat === index + 11 ? 'selected' : ''} ${
                    isAvailableSeat(index + 11) ? 'available' : ''
                    }`}
                    onClick={() => handleSeatSelection(index + 11)}
                >
                    {index + 11}
                </div>
                ))}
            </div>
            </div>
            <button className="buttonticket" onClick={handleBuyTicket}>
            Buy Ticket
            </button>
        </div> 
    <Sidebar />
    </>
  );
};

export default BuyTicketPage;
