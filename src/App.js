import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';

function Hats() {
	return <h1>HATS PAGE</h1>;
}

function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/shop/hats" component={Hats} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
