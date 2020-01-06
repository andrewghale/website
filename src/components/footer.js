import React from 'react';
import PropTypes from 'prop-types';
import { socialLinks, socialLinksWhite, date } from '../utils';

const Footer = ({ lightLogo }) => {
  const icons = lightLogo ? socialLinksWhite : socialLinks;

  return (
      <footer className="footer">
          <div className="social-links" id="social-links">
              {icons.map((link, i) => (
                  <div className={`social-link ${link.className}`} key={i} id={link.className}>
                      <div className="link-container">
                          <a rel="noopener noreferrer" href={link.src}>
                              <img src={link.img} alt={`${link.name} logo`} />
                          </a>
                      </div>
                  </div>
              ))}
          </div>
          <p className="copyright">© {date} Andrew Hale</p>
      </footer>
  )
}

Footer.propTypes = {
  lightLogo: PropTypes.bool
}

export default Footer;