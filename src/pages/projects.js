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
            <Link to="/numbermachine">
              <div className="project-thumb number-machine-thumb" />
            </Link>
            <Link to="/counter">
              <div className="project-thumb counter-thumb">
                <div className="title-container">
                  <h3 className="project-title">The Count</h3>
                </div>
              </div>
            </Link>
            <Link to="/todolist">
              <div className="project-thumb to-do-list-thumb" />
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
