import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import BookList from './components/BookList';
import SingleBook from './components/SingleBook';
import EditBook from './components/EditBook';
import AddBook from './components/AddBook';
import Login from './components/Login';
import Register from './components/Register';


const App = () => {

	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/books' component={BookList} />
				<Route exact path='/books/:id' component={SingleBook} />
				<Route exact path='/books/:id/update' component={EditBook} />
				<Route exact path='/books/new' component={AddBook} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/register' component={Register} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
