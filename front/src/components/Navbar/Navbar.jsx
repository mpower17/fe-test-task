import React from 'react';
import {NavLink} from "react-router-dom";

let Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/game">TicTacToe</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Game</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/history">History</NavLink>
                    </li>
                </ul>
            </div>
        </nav>)
}

export default Navbar;
