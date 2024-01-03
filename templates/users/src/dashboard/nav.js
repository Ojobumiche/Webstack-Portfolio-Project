import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import user from "../images/mayowa.jpg";

const Navdash = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <>
      <nav className="navdash">
        <Link to="/" className="nav_brand">
          <div className="white">BSP Train</div>
        </Link>
        <div className="byright white">
          <img className="userpicture" src={user} alt="" />
          <div className="mg-5">Akintoye Mayowa</div>
          <div className="angle-icon" onClick={toggleDropdown}>
            {dropdownVisible ? <FaAngleUp /> : <FaAngleDown />}
          </div>
          <ul className={`dropdown ${dropdownVisible ? "active" : ""}`}>
            <li className="dropdown-item">Profile</li>
            <li className="dropdown-item">Settings</li>
            <li className="dropdown-item">Logout</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navdash;
