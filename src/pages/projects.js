import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/header';
import Footer from '../components/footer';

const About = ({ match }) => {
  const { path } = match;
  return (
      <Fragment>
        <Header lightLogo={path !== '/'} />
        <div className="projects">
          <div className="page-content">
            <h1 className="page-title">Projects</h1>
            <div className="projects-text">
            <Link activeClassName='no-link' className="tag" to="/numbermachine">
              <div className="project-thumb number-machine">
                <div className="title-container">
                  <h3 className="project-title">Number Machine</h3>
                </div>
              </div>
            </Link>
            <Link activeClassName='no-link' className="tag" to="/counter">
              <div className="project-thumb counter">
                <div className="title-container">
                  <h3 className="project-title">Counter</h3>
                </div>
              </div>
            </Link>
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
