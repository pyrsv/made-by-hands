import React from 'react';
import { Cart } from '../Components/Cart/Cart';
import ProductsCarousel from '../Components/Carousels/ProductsCarousel/ProductsCarousel';

const CartPage = () => {
	return (
		<div>
			<Cart />
			<ProductsCarousel />
		</div>
	);
};

export default CartPage;
