import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
	CartContainer,
	CartItemListContainer,
	SumContainer,
	CartIsEmpty,
} from './styles';
import { CartItem } from './CartItem';
import LayoutContainer from '../LayoutContainer/LayoutContainer';
import Button from '../UI/Button/Button';
import Title from '../UI/Title/title';

export const Cart = () => {
	const currentCart = useSelector(state => state.cartReducer.currentCart);

	let sumPrice = currentCart.reduce((total, item) => {
		total += item.product.currentPrice * item.cartQuantity;
		return total;
	}, 0);

	sumPrice = sumPrice === 0 ? undefined : sumPrice;

	return (
		<>
			<CartContainer>
				<LayoutContainer>
					<Title text="Cart" color="dark" />
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
									quantity={product.quantity}
									cartQuantity={cartQuantity}
									color={product.color}
								>
									{product.name}
								</CartItem>
							);
						})}
					</CartItemListContainer>
					{sumPrice && <SumContainer>Total: {sumPrice}₴</SumContainer>}
					{sumPrice && (
						<SumContainer>
							<NavLink to="/checkout">
								<Button
									text="Proceed to checkout"
									onClick={() => {}}
									color="dark"
								/>
							</NavLink>
						</SumContainer>
					)}
					{!sumPrice && <CartIsEmpty>Cart is Empty</CartIsEmpty>}

					{/* {isCheckout.showed && (
						<Checkout sumPrice={sumPrice} goods={currentCart} />
					)} */}
				</LayoutContainer>
			</CartContainer>
		</>
	);
};
