import React, { useState } from "react";
import {FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../navbar.css";


function Navbar() {
    const [active, setActive] = useState("nav_menu");
    const [showTimesIcon, setShowTimesIcon] = useState(false);
    const navToggle = () => {
        if (active === "nav_menu") {
            setActive("nav_menu nav_active");
        } else setActive("nav_menu");

        setShowTimesIcon(!showTimesIcon);
    }


return (
    <nav className="nav">
        <Link to="/" className="nav_brand">
            <div>BSP Train</div>
        </Link>
        <ul className={active}>
            <li className="nav_iem">
                <Link to="/" className="nav_link">
                    Home
                </Link>
            </li>
            <li className="nav_iem">
                <Link to="/about" className="nav_link">
                    About
                </Link>
            </li>
            <li className="nav_iem">
                <Link to="/our-team" className="nav_link">
                    Our Team
                </Link>
            </li>
            <li className="nav_iem">
                <Link to="/my-booking" className="nav_link">
                    My Booking
                </Link>
            </li>
            <li className="nav_login">
                <Link to="/login" className="nav_linklog">
                    Login
                </Link>
            </li>
            <li className="nav_iem">
                <Link to="/signup" className="nav_linklogin">
                    Create free account
                </Link>
            </li>
        </ul>
        <div onClick={navToggle} className="nav__toggler">
          {showTimesIcon ? <FaTimes className="menu-icon" /> : <FaBars className="menu-icon" />}
        </div>

    </nav>
)
}

export default Navbar;