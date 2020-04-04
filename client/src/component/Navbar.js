import React from "react";
import { Link } from "react-router-dom";
import "./assets/css/Navbar.css";


function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark navColor">
            <Link className="navbarTitle" to='/landing-page'>Symptom Tracker</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav main-navbar">
                    <li className="nav-item">
                        <Link to='/medical-profile' className="navLink">Medical Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/chart' id='chart' className="navLink" >Chart</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/additional-medical-support' className="navLink" >Additional Medical Support</Link>
                    </li>
                </ul>
                <span className="navbar-text nav-icons"><Link to='/new-post' id='newPost' className="nav-link" >🌡</Link></span>
                <span className="navbar-text nav-icons"><Link to='print-out' id='printOut' className="nav-link">🖨</Link></span>
            </div>
        </nav>

    )
}

export default Navbar;
