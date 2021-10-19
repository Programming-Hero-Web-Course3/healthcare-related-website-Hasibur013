import React from 'react';
import { NavLink } from 'react-router-dom';

const HaderMenu = () => {
    return (
        <div>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/doctors">Doctors</NavLink>
            <NavLink to="/about">About us</NavLink>
        </div>
    );
};

export default HaderMenu;