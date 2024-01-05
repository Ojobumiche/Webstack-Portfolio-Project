import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home";
import "./all.css";
import "./index.css";
import "./typography.css";
import signup from "./components/signup";
import Dashboard from "./dashboard/dashboard";
import Ticketbuy from "./dashboard/ticketbooking/finalbuyticket";
import About from "./components/about";
import Ourteamm from "./components/ourteamm";
import Loginn from "./components/loginn";

function App() {

  return (
    <>
       <BrowserRouter>
         <Routes>
           <Route path="/" exact Component={Home} />
           <Route path="/about" Component={About} />
           <Route path="/login" Component={Loginn} />
           <Route path="/signup" Component={signup} />
           <Route path="/our-team" Component={Ourteamm} />
           <Route path="/wp-admin/dashboard" Component={Dashboard} />
           <Route path="/wp-admin/buy-ticket" Component={Ticketbuy} />

         </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;