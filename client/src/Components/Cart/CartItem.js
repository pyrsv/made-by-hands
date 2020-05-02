import React from 'react';
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

export const CartItem = ({
	// itemNo,
	// id,
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
	// console.log(itemNo)
	return (
		<>
			<CartItemContainer>
				<CartItemImage src={img} alt={name} />
				<CartItemInfo>
					<span>{name}</span>
					<span style={{ marginTop: '43px' }}>color: {color}</span>{' '}
				</CartItemInfo>
				<QuantityContainer>
					<DecreaseQuantity>-</DecreaseQuantity>
					<CartItemQuantity>{cartQuantity}</CartItemQuantity>
					<IncreaseQuantity>+</IncreaseQuantity>
				</QuantityContainer>
				<CartItemPrice>
					{price}₴ <CartItemOldPrice>{oldPrice}</CartItemOldPrice>
				</CartItemPrice>
			</CartItemContainer>
		</>
	);
};

CartItem.propTypes = {
	// id: PropTypes.string.isRequired,
	// itemNo: PropTypes.string.isRequired,
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
