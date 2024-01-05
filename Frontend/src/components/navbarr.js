import React from 'react';
import { Link } from 'react-router-dom';
import trainlogo from '../images/Artboard 1.png';

const Navbarhome = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark text-dark" style={{ backgroundColor: "#f1fef4" }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img className="logo horizontal-logo" style={{width: "120px", height: "50px"}} src={trainlogo} alt="bsplogo" />
          </Link>
          <button className="navbar-toggler btn-outline-dark btn" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/our-team">
                  Our Team
                </Link>
              </li>
            </ul>
            <div className="ml-auto">
              <Link to="/login">
                <button className="btn btn-success mr-2">Login</button>
              </Link>
              <Link to="/signup">
                <button className="btn btn-success">Create free account</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbarhome;
