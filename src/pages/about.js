import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header';
import Footer from '../components/footer';

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
                            Hello, I`&apos;m a Bristol-based front end developer. I have been teaching myself since September `&apos;17.
                      </p>
                      <p className="text">
                            I`&apos;m also a professional BMX rider. I have performed for films, schools, events and even on a cruise ship;
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
  match: PropTypes.string
}

export default About;
