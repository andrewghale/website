import React, { Fragment } from 'react';
import Typed from 'react-typed';
import Header from '../components/header';
import Footer from '../components/footer';

const Index = () => (
    <Fragment>
        <Header />
        <div className="home">
            <div className="_reveal-page home-page-content">
                <h1 className="main-title">Andy Hale</h1>
                <h2 className="subtitle">Front End Developer</h2>
                <div id="typewriter">
                    <Typed
                        strings={[
                          'HTML / S(CSS)',
                          'Javascript',
                          'Wordpress',
                          'PHP',
                          'Gulp'
                        ]}
                        typeSpeed={40}
                        backSpeed={40}
                        loop >
                    </Typed>
                </div>
            </div>
        </div>
        <Footer animate />
    </Fragment>
)

export default Index;