import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        //Création d'un Menu de navigation
        <div className="navigation">
            <nav className="navbar navbar-expand-lg navbar-dark bg-black">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact to="/" activeClassName="nav-active text-white" className="nav-link">
                                Accueil
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/jobs" activeClassName="nav-active text-white" className="nav-link">
                                Liste de Jobs
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </nav>

        </div>
    );
};

export default Navigation;
