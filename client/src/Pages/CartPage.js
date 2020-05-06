import React from 'react';
import { Cart } from '../Components/Cart/Cart';
import ProductsCarousel from '../Components/Carousels/ProductsCarousel/ProductsCarousel';
import Footer from '../Components/Footer/Footer';

const CartPage = () => {
	return (
		<div>
			<Cart />
			<ProductsCarousel />
			<Footer />
		</div>
	);
};

export default CartPage;
