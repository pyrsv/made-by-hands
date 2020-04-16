import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ListOfItems from './Pages/ListOfItems';
import Cart from './Pages/Cart';
import Filter from './Pages/Filter';
import Profile from './Pages/Profile';
import Header from './Components/Header';
import Button from './Components/UI/Button';
import Multicarousel from './Components/Carousels/Multicarousel';
import { getItemsAction } from './store/actions/getItemsAction';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getItemsAction());
	}, [dispatch]);
	return (
		<div>
			<Header />
			<Multicarousel />
			<Button text="Отправить" color="light" icon="envelope" />
			<Button text="Подробнее" color="dark" />
			<Button text="Отправить" color="light" type="wide" />

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
