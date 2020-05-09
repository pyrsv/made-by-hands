import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Button from '../UI/Button/Button';
import FavoriteHeart from '../UI/FavoriteHeart/FavoriteHeart';
import {
	addToWishlist,
	deleteFromWishlist,
} from '../../store/actions/wishActions';

import {
	Card,
	CardImage,
	CardInfo,
	CardInfoRow,
	OldPrice,
	Price,
	PriceContainer,
	ProductName,
} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions';
import {
	setProductToCart,
	setProductToWishlist,
} from '../../store/actions/catalogActions';

const ProductCard = ({
	id,
	itemNo,
	name,
	img,
	oldPrice,
	price,
	type,
	isFavorite,
	isInCart,
	modalToggler,
}) => {
	const user = useSelector(state => state.auth.currentUser);

	const dispatch = useDispatch();
	const handleCartButtonClick = () => {
		dispatch(addToCart(id, itemNo));
		dispatch(setProductToCart(id));
	};
	const handleHeartButtonClick = () => {
		if (user) {
			dispatch(setProductToWishlist(id));
			if (!isFavorite) dispatch(addToWishlist(id));
			else dispatch(deleteFromWishlist(id));
		} else {
			modalToggler();
		}
	};

	return (
		<Card>
			<CardImage src={img} alt={name} />
			<CardInfo type={type}>
				<CardInfoRow>
					<ProductName>{name}</ProductName>
					<FavoriteHeart
						isFavorite={isFavorite}
						onClick={handleHeartButtonClick}
					/>
				</CardInfoRow>
				<CardInfoRow>
					<Button
						type="default"
						color="dark"
						text={isInCart ? 'In Cart' : 'Buy'}
						onClick={handleCartButtonClick}
						disabled={isInCart}
					/>
					<PriceContainer>
						{oldPrice && <OldPrice>{oldPrice}€</OldPrice>}
						<Price discounted={oldPrice && true}>{price}€</Price>
					</PriceContainer>
				</CardInfoRow>
			</CardInfo>
		</Card>
	);
};

ProductCard.propTypes = {
	modalToggler: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	itemNo: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	oldPrice: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
	price: PropTypes.number.isRequired,
	isInCart: PropTypes.bool,
	isFavorite: PropTypes.bool,
	type: PropTypes.oneOf(['light', 'olive']),
};

ProductCard.defaultProps = {
	type: 'light',
	oldPrice: null,
	isInCart: false,
	isFavorite: false,
};

export default memo(ProductCard);
