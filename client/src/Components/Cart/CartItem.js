import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	CartItemContainer,
	CartItemImage,
	CartItemInfo,
	CartItemPrice,
	CartItemQuantity,
	QuantityButton,
	QuantityContainer,
	DeleteItemFromCart,
	ColorValue,
	CartItemColor,
	CartItemPricePerOne,
} from './styles';
import PropTypes from 'prop-types';
import CloseButton from '../UI/CloseButton/CloseButton';
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
	price,
	quantity,
	cartQuantity,
	color,
}) => {
	const btn = useRef();
	const isCartFetching = useSelector(state => state.cartReducer.isCartFetching);
	const dispatch = useDispatch();

	return (
		<>
			<CartItemContainer>
				<DeleteItemFromCart ref={btn}>
					<CloseButton
						disabled={isCartFetching}
						onClick={() => dispatch(deleteAllTheSameItems(id, itemNo, btn))}
					/>
				</DeleteItemFromCart>
				<CartItemImage src={img} alt={name} />
				<CartItemInfo>
					<span>{name}</span>
					<CartItemColor>
						color: <ColorValue>{color}</ColorValue>
					</CartItemColor>
				</CartItemInfo>
				<QuantityContainer>
					<QuantityButton
						disabled={cartQuantity === 1 || isCartFetching}
						onClick={() => dispatch(deleteFromCart(id, itemNo))}
					>
						-
					</QuantityButton>
					<CartItemQuantity>{cartQuantity}</CartItemQuantity>
					<QuantityButton
						disabled={cartQuantity >= quantity || isCartFetching}
						onClick={() => dispatch(addToCart(id, itemNo))}
					>
						+
					</QuantityButton>
				</QuantityContainer>
				<CartItemPrice>
					{price * cartQuantity}₴
					<CartItemPricePerOne>
						{cartQuantity} x {price}₴
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
	price: PropTypes.number.isRequired,
	cartQuantity: PropTypes.number.isRequired,
	quantity: PropTypes.number.isRequired,
	color: PropTypes.string.isRequired,
};
