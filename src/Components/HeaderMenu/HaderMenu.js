import React from 'react';
import { NavLink } from 'react-router-dom';
import './HeaderMenu.css';

const HaderMenu = () => {
    return (
        <div className="menu">
            <nav>
                <NavLink  to="/services">Services</NavLink>
                <NavLink to="/doctors">Doctors</NavLink>
                <NavLink  to="/about">About us</NavLink>
            </nav>
        </div>
    );
};

export default HaderMenu;