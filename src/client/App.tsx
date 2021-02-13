import * as React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Navbar from './components/Navbar';

const App = () => {

	const [greeting, setGreeting] = useState<string>('');

	// useEffect(() => {
	// 	(async () => {
	// 		try {
	// 			return null
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	})();
	// }, []);

	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route>
					<div className="min-vh-100 d-flex justify-content-center align-items-center">
						<h1 className="display-1">Welcome to the Bookstore!</h1>
					</div>
				</Route>

			</Switch>
		</BrowserRouter>
	);
};

export default App;
