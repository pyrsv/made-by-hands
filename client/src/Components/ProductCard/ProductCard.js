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
	id,
	itemNo,
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
						onClick={() => onAddToCart(id, itemNo)}
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
	id: PropTypes.string.isRequired,
	itemNo: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	oldPrice: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
	price: PropTypes.number.isRequired,
	isInCart: PropTypes.bool,
	isFavorite: PropTypes.bool,
	onAddToCart: PropTypes.func,
	onAddToFavorites: PropTypes.func,
	type: PropTypes.oneOf(['light', 'olive']),
};

ProductCard.defaultProps = {
	type: 'light',
	oldPrice: null,
	isInCart: false,
	isFavorite: false,
	onAddToCart: () => {},
	onAddToFavorites: () => {},
};

export default ProductCard;
