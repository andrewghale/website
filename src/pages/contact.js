import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header';
import Footer from '../components/footer';

const Contact = ({ match }) => {
  const { path } = match;

  return (
      <Fragment>
          <Header lightLogo={path !== '/' ? true : false} />
          <div className="contact">
              <div className="_reveal-page page-content">
                  <h1 className="page-title">Contact</h1>
                  <div className="page-text">
                      <p className="text">
                                Send me a message if you would like to either collaborate
                                or have a bespoke website built!
                      </p>
                  </div>
                  <div className="page-text contact-info">
                      <span className="white-highlight">andyhale47@gmail.com</span>
                      {/* <div id="map" className="reveal-map">
                            </div> */}
                  </div>
              </div>
          </div>
          <Footer lightLogo={path !== '/' ? true : false} />
      </Fragment>
  )
}

Contact.propTypes = {
  path: PropTypes.string,
  match: PropTypes.string
}

export default Contact;