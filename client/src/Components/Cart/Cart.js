import React from 'react';
import { useSelector } from 'react-redux';
import ProductsCarousel from '../Carousels/ProductsCarousel/ProductsCarousel';
import { CartContainer } from './styles';
import { CartItem } from './CartItem';

export const Cart = () => {
	// const dispatch = useDispatch()
	const currentCart = useSelector(state => state.cartReducer.currentCart);
	// console.log(currentCart)
	return (
		<>
			<CartContainer>
				{currentCart.map(
					({
						name,
						currentPrice,
						previousPrice,
						_id,
						itemNo,
						imageUrls: [image],
					}) => {
						return (
							<CartItem
								key={_id}
								id={_id}
								name={name}
								img={image}
								price={currentPrice}
								oldPrice={previousPrice}
								itemNo={itemNo}
								type="olive"
							>
								{name}
							</CartItem>
						);
					}
				)}
			</CartContainer>
			<ProductsCarousel />
			<div>It is CartPage</div>;
		</>
	);
};
