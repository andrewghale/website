import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = ({ match }) => {
  const { path } = match;
  return (
      <Fragment>
          <Header lightLogo={path !== '/'} />
          <div className="about">
              <div className="page-content">
                  <h1 className="page-title">About</h1>
                  <div className="page-text">
                      <p className="text">
                            Hello, I'm a Bristol-based front end developer. I have been teaching myself since September '17.
                      </p>
                      <p className="text">
                            I'm also a professional BMX rider. I have performed for films, schools, events and even on a cruise ship;
                            see my Instagram for a taste of what I do!
                      </p>
                  </div>
              </div>
          </div>
          <Footer lightLogo={path !== '/'} />
      </Fragment>
  );
};

About.propTypes = {
  path: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
}

export default About;
