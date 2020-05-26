import React from 'react';
import { Cart } from '../Components/Cart/Cart';
import ProductsCarouselIndex from '../Components/Carousels/ProductCarouselIndex/ProductCarouselIndex';

const CartPage = () => {
	return (
		<div>
			<Cart />
			<ProductsCarouselIndex />
		</div>
	);
};

export default CartPage;
