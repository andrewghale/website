import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header';
import Footer from '../components/footer';

const About = ({ match }) => {
  const { path } = match;
  return (
      <Fragment>
            <Header lightLogo={path !== '/'} />
            <p className="projects-text">
              <span role="img" aria-label="construction">🚧</span>
              Recent projects will be added soon!
              <span role="img" aria-label="construction">🚧</span>
            </p>
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
