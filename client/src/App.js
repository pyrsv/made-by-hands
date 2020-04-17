import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import ListOfItems from './Pages/ListOfItems';
import Cart from './Pages/Cart';
import Filter from './Pages/Filter';
import Profile from './Pages/Profile';
import Header from './Components/Header';
import Button from './Components/UI/Button';
import Multicarousel from './Components/Carousels/Multicarousel';

function App() {
	return (
		<div>
			<AppContainer>
				<Header />
				<MulticarouselContainer>
					<Multicarousel />
				</MulticarouselContainer>
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
			</AppContainer>
		</div>
	);
}

const AppContainer = styled.div`
	width: 90%;
	margin: auto;
`;
const MulticarouselContainer = styled.div`
	margin: 20px 0 20px 0;
`;

export default App;
