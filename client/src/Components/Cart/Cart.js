import React from 'react';
import { useSelector } from 'react-redux';
import ProductsCarousel from '../Carousels/ProductsCarousel/ProductsCarousel';
import { CartContainer } from './styles';
import { CartItem } from './CartItem';

export const Cart = () => {
	// const dispatch = useDispatch()
	const currentCart = useSelector(state => state.cartReducer.currentCart);

	// const filtered = currentCart.filter(item=>{
	// 	const equal = currentCart.filter(
	// 		i=>{return i._id===item._id}
	// 		)

	// })
	// console.log(filtered)

	return (
		<>
			<CartContainer>
				{currentCart.map(({ product }) => {
					return (
						<CartItem
							key={product.itemNo}
							id={product._id}
							name={product.name}
							img={product.image}
							price={product.currentPrice}
							oldPrice={product.previousPrice}
							type="olive"
							itemNo={product.itemNo}
						>
							{product.name}
						</CartItem>
					);
				})}
			</CartContainer>
			<ProductsCarousel />
			<div>It is CartPage</div>;
		</>
	);
};
