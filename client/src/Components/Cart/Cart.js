import React from 'react';
// import { useSelector, useDispatch } from 'react-redux'
import ProductsCarousel from '../Carousels/ProductsCarousel/ProductsCarousel';
import { CartContainer } from './styles';

export const Cart = () => {
	// const dispatch = useDispatch()
	//     const currentCart = useSelector(state=>state.cartReducer.currentCart)
	// console.log(currentCart)
	return (
		<>
			<CartContainer>content</CartContainer>
			<ProductsCarousel />
			<div>It is CartPage</div>;
		</>
	);
};
