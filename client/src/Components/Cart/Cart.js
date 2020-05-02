import React from 'react';
import { useSelector } from 'react-redux';
import ProductsCarousel from '../Carousels/ProductsCarousel/ProductsCarousel';
import { CartContainer, CartItemListContainer, SumContainer } from './styles';
import { CartItem } from './CartItem';
import LayoutContainer from '../LayoutContainer/LayoutContainer';
import Button from '../UI/Button/Button';

export const Cart = () => {
	// const dispatch = useDispatch()
	const currentCart = useSelector(state => state.cartReducer.currentCart);

	const sumPrice = currentCart.reduce((total, item) => {
		total += item.product.currentPrice;
		return total;
	}, 0);

	return (
		<>
			<CartContainer>
				<LayoutContainer>
					<CartItemListContainer>
						{currentCart.map(({ cartQuantity, product }) => {
							return (
								<CartItem
									key={product.itemNo}
									id={product._id}
									name={product.name}
									img={product.imageUrls[0]}
									price={product.currentPrice}
									oldPrice={product.previousPrice}
									type="olive"
									itemNo={product.itemNo}
									cartQuantity={cartQuantity}
									color={product.color}
								>
									{product.name}
								</CartItem>
							);
						})}
					</CartItemListContainer>
					<SumContainer>Total: {sumPrice}₴</SumContainer>
					<SumContainer>
						<Button text="Checkout" />
					</SumContainer>
				</LayoutContainer>
			</CartContainer>
			<ProductsCarousel />
			<div>It is CartPage</div>;
		</>
	);
};
