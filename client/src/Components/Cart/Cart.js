import React from 'react';
import { useSelector } from 'react-redux';
import ProductsCarousel from '../Carousels/ProductsCarousel/ProductsCarousel';
import { CartContainer } from './styles';
import { CartItem } from './CartItem';

export const Cart = () => {
	// const dispatch = useDispatch()
	const currentCart = useSelector(state => state.cartReducer.currentCart);
	// console.log(currentCart)

	// const filtered = currentCart.filter(item=>{
	// 	const equal = currentCart.filter(
	// 		i=>{return i._id===item._id}
	// 		)

	// })
	// console.log(filtered)

	return (
		<>
			<CartContainer>
				{currentCart.map(
					({
						name,
						currentPrice,
						previousPrice,
						_id,
						imageUrls: [image],
						itemNo,
					}) => {
						return (
							<CartItem
								key={itemNo}
								id={_id}
								name={name}
								img={image}
								price={currentPrice}
								oldPrice={previousPrice}
								type="olive"
								itemNo={itemNo}
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
