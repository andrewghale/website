import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Index from './pages';
import About from './pages/about';
import Projects from './pages/projects';
import NumberMachine from './pages/numbermachine';
import Counter from './pages/counter';
import ToDonts from './pages/todonts';
import Contact from './pages/contact';
import './styles/app.scss';

const App = () => (
	<HashRouter>
		<Switch>
			<Route exact path="/" component={Index} />
			<Route path="/about" component={About} />
			<Route path="/projects" component={Projects} />
			<Route path="/numbermachine" component={NumberMachine} />
			<Route path="/counter" component={Counter} />
			<Route path="/todonts" component={ToDonts} />
			<Route path="/contact" component={Contact} />
		</Switch>
	</HashRouter>
);

export default App;
