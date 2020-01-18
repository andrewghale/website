import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
    <nav className="main-nav">
        <NavLink id="no-link" activeClassName='is-active' className="tag" to="/">Home</NavLink>
        <NavLink activeClassName='no-link' className="tag" to="/about">About</NavLink>
        <NavLink activeClassName='no-link' className="tag" to="/projects">Projects</NavLink>
        <NavLink activeClassName='no-link' className="tag" to="/numbermachine">NumberMachine</NavLink>
        <NavLink activeClassName='no-link' className="tag" to="/contact">Contact</NavLink>
    </nav>
);

export default Nav;