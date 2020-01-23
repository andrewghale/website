import React from 'react';
import PropTypes from 'prop-types';
import { socialLinks, socialLinksWhite, date } from '../utils';

const Footer = ({ lightLogo, pageName }) => {
  const icons = lightLogo ? socialLinksWhite : socialLinks;

    const handlePageName = (pageName) => {
        if (pageName === "number-machine") {
            return("nm-footer");
        } else if (pageName === "counter") {
            return("counter-footer");
        } else if (pageName === "to-do-list") {
            return("to-do-footer");
        }
    }

  return (
      <footer className={ `footer ${handlePageName(pageName)} `}>
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