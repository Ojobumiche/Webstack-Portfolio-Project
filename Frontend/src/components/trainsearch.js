import React, { useState } from "react";
import { BiTransferAlt } from "react-icons/bi";



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
        <div className="down-4 flex">
         <label className="offsearch">
            From:
            <input className="inputsearch"
             type="text"
             value={from}
             onChange={(e) => setFrom(e.target.value)}
            />
         </label>
         <div className="px25 circle white"><BiTransferAlt /></div>
         <label className="mg-3">
            To:
            <input className="inputsearch"
             type="text"
             value={to}
             onChange={(e) => setTo(e.target.value)}
            />
         </label>
         <label className="mg-3">
            Departure Time:
            <input className="inputsearch"
             type="text"
             value={departuretime}
             onChange={(e) => setDepartureTime(e.target.value)}
            />
         </label>
         <button className="but" onClick={handleSearch}>Search</button>
        </div>   
       </div>
    </>)
}

export default Trainsearch;