import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
	CartContainer,
	CartItemListContainer,
	SumContainer,
	CartIsEmpty,
} from './styles';
import { CartItem } from './CartItem';
import LayoutContainer from '../LayoutContainer/LayoutContainer';
import Button from '../UI/Button/Button';
import Checkout from './Checkout';
import Title from '../UI/Title/title';

export const Cart = () => {
	const currentCart = useSelector(state => state.cartReducer.currentCart);

	let sumPrice = currentCart.reduce((total, item) => {
		total += item.product.currentPrice * item.cartQuantity;
		return total;
	}, 0);

	sumPrice = sumPrice === 0 ? undefined : sumPrice;

	const [isCheckout, toggleCheckout] = useState({ showed: false });

	const checkoutToggler = () => {
		toggleCheckout(prevState => ({
			showed: !prevState.showed,
		}));
	};
	const goods = currentCart.map(item => {
		return {
			id: item.product._id,
			cartQuantity: item.cartQuantity,
		};
	});

	return (
		<>
			<CartContainer>
				<LayoutContainer>
					{isCheckout.showed ? (
						<Title text="Checkout" color="dark" />
					) : (
						<Title text="Cart" color="dark" />
					)}
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
					{sumPrice && <SumContainer>Total: {sumPrice}₴</SumContainer>}
					{sumPrice && (
						<SumContainer>
							{!isCheckout.showed && (
								<Button text="Proceed to checkout" onClick={checkoutToggler} />
							)}
						</SumContainer>
					)}
					{!sumPrice && <CartIsEmpty>Cart is Empty</CartIsEmpty>}

					{isCheckout.showed && <Checkout sumPrice={sumPrice} goods={goods} />}
				</LayoutContainer>
			</CartContainer>
		</>
	);
};
