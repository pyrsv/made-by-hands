import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import CartPage from './Pages/CartPage';
import CatalogPage from './Pages/CatalogPage';
import ProfilePage from './Pages/ProfilePage';
import IndexPage from './Pages/IndexPage';
import ProductPage from './Pages/ProductPage';
import Header from './Components/Header/Header';
import AppContainer from './Components/AppContainer/AppContainer';
import ProtectedRoute from './HOC/ProtectedRoute/ProtectedRoute';
import AuthModal from './Components/AuthModal/AuthModal';
import Wishlist from './Components/Wishlist/Wishlist';

const App = () => {
	const location = useLocation();
	const background = location.state && location.state.background;

	return (
		<AppContainer>
			<Header />
			<Switch location={background || location}>
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

			{background && (
				<Route path="/login">
					<AuthModal />
				</Route>
			)}
		</AppContainer>
	);
};

export default App;
