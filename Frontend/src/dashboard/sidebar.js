import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaTicketAlt,
} from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";

import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/wp-admin/dashboard",
            name: "Dashboard",
            icon: <FaTh />
        },
        {
            path: "/wp-admin/buy-ticket",
            name: "Buy Ticket",
            icon: <FaTicketAlt />
        },
        {
            path: "/wp-admin/settings",
            name: "Settings",
            icon: <IoSettings />
        },
        {
            path: "/wp-admin/logout",
            name: "Logout",
            icon: <BiLogOut />
        }
    ];

    return (
        <div className="container">
            <div style={{ width: isOpen ? "200px" : "50px", height: "678px" }} className="sidebar">
                <div className="top_section">
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {menuItem.map((item, index) => (
                    <NavLink
                        to={item.path}
                        key={index}
                        className="linkside"
                        activeClassName="active"
                    >
                        <div className="iconb">{item.icon}</div>
                        <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
                            {item.name}
                        </div>
                    </NavLink>
                ))}
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;
