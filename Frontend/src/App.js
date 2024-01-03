import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home";
import "./all.css";
import "./index.css";
import "./typography.css";
import Login from "./components/login";
import signup from "./components/signup";
import OurTeam from "./components/ourteam";
import Dashboard from "./dashboard/dashboard";
import Ticketbuy from "./dashboard/ticketbooking/finalbuyticket";
import Footerbar from "./components/footerr";

function App() {

  return (
    <>
       <BrowserRouter>
         <Routes>
           <Route path="/" exact Component={Home} />
           <Route path="/about" Component={Footerbar} />
           <Route path="/login" Component={Login} />
           <Route path="/signup" Component={signup} />
           <Route path="/our-team" Component={OurTeam} />
           <Route path="/wp-admin/dashboard" Component={Dashboard} />
           <Route path="/wp-admin/buy-ticket" Component={Ticketbuy} />

         </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;