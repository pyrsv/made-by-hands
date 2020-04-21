import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import CartPage from './Pages/CartPage';
import CatalogPage from './Pages/CatalogPage';
import ProfilePage from './Pages/ProfilePage';
import IndexPage from './Pages/IndexPage';
import { getUser } from './store/actions/authActions';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => dispatch(getUser()));

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
