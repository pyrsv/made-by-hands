import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ListOfItems from './Pages/ListOfItems';
import Cart from './Pages/Cart';
import Filter from './Pages/Filter';
import Profile from './Pages/Profile';
import Header from './Components/Header';
import ProductCard from './Components/ProductCard';

const mock = {
	name: 'Karl Kani Signature corduroy tape waist bag in camel',
	currentPrice: 25.0,
	categories: 'waist bags',
	imageUrls: [
		'https://res.cloudinary.com/dnorz3pyf/image/upload/v1586854755/waist%20bags/13977708-1-camelblack_ncxpsa.jpg',
		'https://res.cloudinary.com/dnorz3pyf/image/upload/v1586854755/waist%20bags/13977708-2_prydxs.jpg',
		'https://res.cloudinary.com/dnorz3pyf/image/upload/v1586854755/waist%20bags/13977708-3_yx1emi.jpg',
		'https://res.cloudinary.com/dnorz3pyf/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1586854755/waist%20bags/13977708-3_yx1emi.jpg',
		'https://res.cloudinary.com/dnorz3pyf/image/upload/v1586854755/waist%20bags/13977708-4_gnqr8z.jpg',
	],
	quantity: 50,
	color: 'yellow',
	productUrl: '/waist-bags',
	brand: 'Karl Kani',
	parametrs: [
		'Adjustable body strap',
		'Secure clasp fastening',
		'External pocket',
		'Zip closure',
	],
	description: [
		'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur temporibus ea amet numquam nihil in officiis explicabo pariatur totam nam, veritatis, ratione veniam maiores deserunt vitae voluptas nesciunt sed inventore. ',
	],
};

const {
	name,
	currentPrice,
	imageUrls: [image],
} = mock;

function App() {
	return (
		<div>
			<Header />
			<div style={{ width: '300px' }}>
				<ProductCard
					name={name}
					price={currentPrice}
					img={image}
					type="olive"
				/>
			</div>

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
