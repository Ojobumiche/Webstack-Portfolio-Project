import React, { useState } from "react";



const Trainsearch = ({ onSearch }) => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [departuretime, setDepartureTime] = useState('');

    const handleSearch = () => {
        const searchData = {
          from,
          to,
          departuretime,
        };
    
        onSearch(searchData);
    };
    return(<>
       <div className="down-4 my-col-10 bg-white my-bottom-50">
        <div className="down-2">
         <label className="off-1">
            From:
            <input
             type="text"
             value={from}
             onChange={(e) => setFrom(e.target.value)}
            />
         </label>
         <label className="mg-3">
            To:
            <input
             type="text"
             value={to}
             onChange={(e) => setTo(e.target.value)}
            />
         </label>
         <label className="mg-3">
            Departure Time:
            <input
             type="text"
             value={departuretime}
             onChange={(e) => setDepartureTime(e.target.value)}
            />
         </label>
         <button className="mg-3" onClick={handleSearch}>Search</button>
        </div>   
       </div>
    </>)
}

export default Trainsearch;