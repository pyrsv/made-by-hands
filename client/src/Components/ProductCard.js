import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './UI/Button';
import FavoriteHeart from './UI/FavoriteHeart';

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

const Card = styled.div`
	font-family: 'Raleway', sans-serif;
	color: ${props => props.theme.mainDark};
`;

const CardImage = styled.img`
	width: 100%;
	height: 315px;
	object-fit: cover;
	vertical-align: middle;
`;
const CardInfo = styled.div`
	background-color: ${props =>
		props.type === 'light' ? props.theme.lightPink : props.theme.mainOlive};
	padding: 16px 12px 19px;
`;

const ProductName = styled.p`
	font-family: Raleway;
	font-weight: 600;
	font-size: 22px;
	line-height: 25px;
	max-width: 85%;
	min-height: 46px;
	margin-bottom: 10px;
	line-height: 22px;
`;

const PriceContainer = styled.div`
	position: relative;
	text-align: right;
`;

const Price = styled.span`
	display: inline-block;
	font-family: 'Open Sans', sans-serif;
	width: 100%;
	color: ${props =>
		props.discounted ? props.theme.accentRed : props.theme.mainDark};
	font-size: 24px;
`;

const OldPrice = styled.span`
	display: inline-block;
	font-size: 14px;
	text-decoration-line: line-through;
	position: absolute;
	top: -15px;
	left: 0;
`;

const CardInfoRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

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
