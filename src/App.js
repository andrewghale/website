import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Contact from './pages/contact';
import Index from './pages/index';
import About from './pages/about';
import './styles/scss/app.scss';

function App() {
  return (
      <HashRouter>
          <Switch>
              <Route exact path="/" component={Index} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
          </Switch>
      </HashRouter>
  );
}

export default App;
