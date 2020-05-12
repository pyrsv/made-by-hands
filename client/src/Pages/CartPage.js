import React from 'react';
import { Cart } from '../Components/Cart/Cart';
import ProductsCarouselIndex from '../Components/Carousels/ProductCarouselIndex/ProductCarouselIndex';
import Footer from '../Components/Footer/Footer';

const CartPage = () => {
	return (
		<div>
			<Cart />
			<ProductsCarouselIndex />
			<Footer />
		</div>
	);
};

export default CartPage;
