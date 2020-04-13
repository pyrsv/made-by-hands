import React from 'react';

import { Route, Link, Switch } from 'react-router-dom';
import ListOfItems from './Components/Pages/ListOfItems'
import Cart from './Components/Pages/Cart'
import Filter from './Components/Pages/Filter'
import Profile from './Components/Pages/Profile'



function App() {
	return (
		<div>
			<nav className="navigation">
				<Link to="">Home </Link>
				<Link to="/cart">Cart </Link>
				<Link to="/filter">Filter </Link>
				<Link to="/profile">Profile </Link>
			</nav>
			<Switch>
				<Route exact path="/" >
				<ListOfItems/>
				</Route>
				<Route path="/cart" >
				<Cart/>
				</Route>
				<Route path="/filter" >
				<Filter/>	
				</Route>
				<Route path="/profile" >
				<Profile/>	
				</Route>
			</Switch>
		</div>
	);
}

export default App;
