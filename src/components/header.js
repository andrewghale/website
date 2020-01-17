import React from 'react';
import PropTypes from 'prop-types';
import logoLight from '../assets/img/logo-light.svg';
import logo from '../assets/img/logo.svg';
import Nav from './nav';

const Header = ({ lightLogo, pageName }) => (
    <header className={ `site-header ${pageName !== "number-machine" ? "" : "nm-header"}`}>
        <div className="logo-holder">
            <img
                className="home-logo" src={lightLogo === true ? logoLight : logo} alt="logo"
            />
        </div>
        <Nav />
    </header>
);

Header.propTypes = {
  lightLogo: PropTypes.bool,
  pageName: PropTypes.string
}

export default Header;
