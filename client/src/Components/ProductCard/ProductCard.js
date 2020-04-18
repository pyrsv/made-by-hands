import React from 'react';
import PropTypes from 'prop-types';
import Button from '../UI/Button/Button';
import FavoriteHeart from '../UI/FavoriteHeart/FavoriteHeart';
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

const ProductCard = ({
	name,
	img,
	oldPrice,
	price,
	onAddToCart,
	type,
	isInCart,
	isFavorite,
	onAddToFavorites,
}) => {
	return (
		<Card>
			<CardImage src={img} alt={name} />
			<CardInfo type={type}>
				<CardInfoRow>
					<ProductName>{name}</ProductName>
					<FavoriteHeart onClick={onAddToFavorites} isFavorite={isFavorite} />
				</CardInfoRow>
				<CardInfoRow>
					<Button
						type="default"
						color="dark"
						text={isInCart ? 'In Cart' : 'Buy'}
						onClick={onAddToCart}
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
	name: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	oldPrice: PropTypes.string,
	price: PropTypes.string.isRequired,
	isInCart: PropTypes.bool.isRequired,
	isFavorite: PropTypes.bool.isRequired,
	onAddToCart: PropTypes.func.isRequired,
	onAddToFavorites: PropTypes.func.isRequired,
	type: PropTypes.oneOf(['light', 'olive']),
};

ProductCard.defaultProps = {
	type: 'light',
	oldPrice: null,
};

export default ProductCard;
