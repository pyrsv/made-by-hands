import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import CartPage from './Pages/CartPage';
import CatalogPage from './Pages/CatalogPage';
import ProfilePage from './Pages/ProfilePage';
import IndexPage from './Pages/IndexPage';
import ProductPage from './Pages/ProductPage';
import Header from './Components/Header/Header';
import AppContainer from './Components/AppContainer/AppContainer';
import ProtectedRoute from './Components/PrivateRoute/PrivateRoute';
import { getUser } from './store/actions/authActions';

import Wishlist from './Components/Wishlist/Wishlist';

import {
	setHeaderMobile,
	setMobile,
	setTablet,
} from './store/actions/UIActions';

const App = () => {
	const dispatch = useDispatch();

	const handleWindowResize = () => {
		if (window.innerWidth <= 992) {
			dispatch(setHeaderMobile(true));
		} else {
			dispatch(setHeaderMobile(false));
		}

		if (window.innerWidth <= 768) {
			dispatch(setTablet(true));
		} else {
			dispatch(setTablet(false));
		}

		if (window.innerWidth <= 576) {
			dispatch(setMobile(true));
		} else {
			dispatch(setMobile(false));
		}
	};

	useEffect(() => {
		handleWindowResize();

		dispatch(getUser());

		window.addEventListener('resize', handleWindowResize);
		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	return (
		<AppContainer>
			<Header />
			<Switch>
				<Route exact path="/">
					<IndexPage />
				</Route>
				<Route path="/cart">
					<CartPage />
				</Route>
				<Route path="/catalog">
					<CatalogPage />
				</Route>
				<ProtectedRoute path="/profile">
					<ProfilePage />
				</ProtectedRoute>

				<Route path="/wishlist">
					<Wishlist />
				</Route>
				<Route
					path="/products/:itemNo"
					render={({ match }) => {
						return (
							match && <ProductPage productNoParam={match.params.itemNo} />
						);
					}}
				/>
			</Switch>
		</AppContainer>
	);
};

export default App;
