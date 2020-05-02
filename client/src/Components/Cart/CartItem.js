import React from 'react';
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
} from './styles';
import PropTypes from 'prop-types';
import {
	AddToCartActionCreator,
	DeleteFromCartActionCreator,
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
	name = name[0].toUpperCase() + name.slice(1);
	const dispatch = useDispatch();
	return (
		<>
			<CartItemContainer>
				<CartItemImage src={img} alt={name} />
				<CartItemInfo>
					<span>{name}</span>
					<span style={{ marginTop: '43px' }}>color: {color}</span>{' '}
				</CartItemInfo>
				<QuantityContainer>
					<DecreaseQuantity
						onClick={() => dispatch(DeleteFromCartActionCreator(id, itemNo))}
					>
						-
					</DecreaseQuantity>
					<CartItemQuantity>{cartQuantity}</CartItemQuantity>
					<IncreaseQuantity
						onClick={() => dispatch(AddToCartActionCreator(id, itemNo))}
					>
						+
					</IncreaseQuantity>
				</QuantityContainer>
				<CartItemPrice>
					{price}₴ <CartItemOldPrice>{oldPrice}</CartItemOldPrice>
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
