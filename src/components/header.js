import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import logoLight from '../assets/img/logo-light.svg';
import logo from '../assets/img/logo.svg';
import Nav from './nav';

const Header = ({ lightLogo, pageName }) => {

    const handlePageName = (pageName) => {
        if (pageName === "number-machine") {
            return("nm-header");
        } else if (pageName === "to-do-list") {
            return("to-do-header");
        }
    }

    return (
        <header className={ `site-header ${handlePageName(pageName)}`}>
            <div className="logo-holder">
                <NavLink to="/">
                <img
                    className="home-logo"
                    src={lightLogo === true ? logoLight : logo}
                    alt="logo"
                />
                </NavLink>
            </div>
            <Nav />
        </header>
        )
    }


Header.propTypes = {
  lightLogo: PropTypes.bool,
  pageName: PropTypes.string
}

export default Header;
