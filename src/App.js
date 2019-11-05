import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './pages/contact';
import Index from './pages/index';
import About from './pages/about';
import './styles/scss/app.scss';

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/" component={Index} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
          </Switch>
      </Router>
  );
}

export default App;
