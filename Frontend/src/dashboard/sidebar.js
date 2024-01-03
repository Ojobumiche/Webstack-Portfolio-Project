import React from 'react';
import {
    FaTh,
    FaTicketAlt,
} from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";

import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
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
            <div className="sidebar">
                {menuItem.map((item, index) => (
                    <NavLink
                        to={item.path}
                        key={index}
                        className="linkside"
                        activeClassName="active"
                    >
                        <div className="iconb white">{item.icon}</div>
                        <div className="link_text white">
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
