import React from "react";
import Navdash from "./nav";
import Sidebar from "./sidebar";

const Dashboard = () => {
    return (
        <>
        <Navdash />
        <div className="my-col-10 off-1 down-1">
            <div>get</div>
        </div>
        <Sidebar />

        </>
    )
};

export default Dashboard;