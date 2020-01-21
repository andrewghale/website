import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
    <nav className="main-nav">
        <NavLink id="no-link" className="tag" to="/">Home</NavLink>
        <NavLink className="tag" to="/about">About</NavLink>
        <NavLink className="tag" to="/projects">Projects</NavLink>
        <NavLink className="tag" to="/contact">Contact</NavLink>
    </nav>
);

export default Nav;