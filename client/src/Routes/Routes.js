import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import CartPage from '../Pages/CartPage';
import CatalogPage from '../Pages/CatalogPage';
import ProfilePage from '../Pages/ProfilePage';
import IndexPage from '../Pages/IndexPage';
import ProductPage from '../Pages/ProductPage';
import SearchPage from '../Pages/SearchPage';
import SalesPage from '../Pages/SalesPage';
import NoMatchPage from '../Pages/NoMatchPage';
import ProtectedRoute from '../HOC/ProtectedRoute/ProtectedRoute';
import AuthModal from '../Components/AuthModal/AuthModal';
import CorporateOrders from '../Components/Footer/FooterComponents/CorporateOrders/CorporateOrders';
import CooperationsWithUs from '../Components/Footer/CooperationWithUs/CooperationWithUs';

const Routes = () => {
	const location = useLocation();
	const background = location.state && location.state.background;
	return (
		<>
			<Switch location={background || location}>
				<Route exact path="/">
					<IndexPage />
				</Route>
				<Route exact path="/Corporate_orders">
					<CorporateOrders />
				</Route>
				<Route exact path="/Cooperation_with_us">
					<CooperationsWithUs />
				</Route>
				<Route path="/cart">
					<CartPage />
				</Route>
				<Route path="/catalog">
					<CatalogPage />
				</Route>
				<Route path="/search">
					<SearchPage />
				</Route>
				<Route path="/sales">
					<SalesPage />
				</Route>
				<ProtectedRoute path="/profile">
					<ProfilePage />
				</ProtectedRoute>
				<Route
					path="/products/:itemNo"
					render={({ match }) => {
						return (
							match && <ProductPage productNoParam={match.params.itemNo} />
						);
					}}
				/>

				<Route path="*">
					<NoMatchPage />
				</Route>
			</Switch>

			{background && (
				<Route path="/login">
					<AuthModal />
				</Route>
			)}
		</>
	);
};

export default Routes;
