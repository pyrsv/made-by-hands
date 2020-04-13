import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ListOfItems from './Components/Pages/ListOfItems';
import Cart from './Components/Pages/Cart';
import Filter from './Components/Pages/Filter';
import Profile from './Components/Pages/Profile';
import Header from './Components/Header';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/">
					<ListOfItems />
				</Route>
				<Route path="/cart">
					<Cart />
				</Route>
				<Route path="/filter">
					<Filter />
				</Route>
				<Route path="/profile">
					<Profile />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
