import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CartPage from './Pages/CartPage';
import CatalogPage from './Pages/CatalogPage';
import ProfilePage from './Pages/ProfilePage';
import IndexPage from './Pages/IndexPage';

const App = () => {
	return (
		<div>
			<Switch>
				<Route exact path="/">
					<IndexPage />
				</Route>
				<Route path="/cart">
					<CartPage />
				</Route>
				<Route path="/filter">
					<CatalogPage />
				</Route>
				<Route path="/profile">
					<ProfilePage />
				</Route>
			</Switch>
		</div>
	);
};

export default App;
