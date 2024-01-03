import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home";
import "./all.css";
import "./index.css";
import "./typography.css";
import About from "./components/about";
import Login from "./components/login";
import signup from "./components/signup";
import Dashboard from "./dashboard/dashboard";
import BuyTicketPage from "./dashboard/buyticket";

function App() {

  return (
    <>
       <BrowserRouter>
         <Routes>
           <Route path="/" exact Component={Home} />
           <Route path="/about" Component={About} />
           <Route path="/login" Component={Login} />
           <Route path="/signup" Component={signup} />
           <Route path="/our-team" Component={Dashboard} />
           <Route path="/wp-admin/buy-ticket" Component={BuyTicketPage} />

         </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;