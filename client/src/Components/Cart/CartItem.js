import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
	CartItemContainer,
	CartItemImage,
	CartItemInfo,
	CartItemPrice,
	CartItemQuantity,
	DecreaseQuantity,
	IncreaseQuantity,
	QuantityContainer,
	CartItemOldPrice,
	DeleteItemFromCart,
	CartItemColor,
	CartItemPricePerOne,
} from './styles';
import PropTypes from 'prop-types';
import {
	addToCart,
	deleteFromCart,
	deleteAllTheSameItems,
} from '../../store/actions/cartActions';

export const CartItem = ({
	itemNo,
	id,
	name,
	img,
	oldPrice,
	price,
	// type,
	// isInCart,
	// isFavorite,
	cartQuantity,
	color,
}) => {
	const btn = useRef();

	const dispatch = useDispatch();
	return (
		<>
			<CartItemContainer>
				<DeleteItemFromCart
					ref={btn}
					onClick={() => dispatch(deleteAllTheSameItems(id, itemNo, btn))}
				>
					X
				</DeleteItemFromCart>
				<CartItemImage src={img} alt={name} />
				<CartItemInfo>
					<span>{name}</span>
					<CartItemColor>color: {color}</CartItemColor>{' '}
				</CartItemInfo>
				<QuantityContainer>
					<DecreaseQuantity
						disabled={cartQuantity === 1}
						onClick={() => dispatch(deleteFromCart(id, itemNo))}
					>
						-
					</DecreaseQuantity>
					<CartItemQuantity>{cartQuantity}</CartItemQuantity>
					<IncreaseQuantity onClick={() => dispatch(addToCart(id, itemNo))}>
						+
					</IncreaseQuantity>
				</QuantityContainer>
				<CartItemPrice>
					{price * cartQuantity}₴{' '}
					{oldPrice && (
						<CartItemOldPrice>{oldPrice * cartQuantity}</CartItemOldPrice>
					)}
					<CartItemPricePerOne>
						<span>{price}₴</span> <span>x</span> <span>{cartQuantity}</span>
					</CartItemPricePerOne>
				</CartItemPrice>
			</CartItemContainer>
		</>
	);
};

CartItem.propTypes = {
	id: PropTypes.string.isRequired,
	itemNo: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	oldPrice: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
	price: PropTypes.number.isRequired,
	cartQuantity: PropTypes.number.isRequired,
	color: PropTypes.string.isRequired,
};
CartItem.defaultProps = {
	oldPrice: null,
};
