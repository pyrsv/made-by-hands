import React from 'react';
import Button from '../../UI/Button/Button';
import FavoriteHeart from '../../UI/FavoriteHeart/FavoriteHeart';
import DescriptionPageCarousel from '../../Carousels/DescriptionPageCarousel/DescriptionPageCarousel';
import PropTypes from 'prop-types';
import Parametrs from '../Parametrs/Parametrs';
import Rating from '../Rating/Rating';

import {
	GridContainer,
	DescriptionArea,
	TextDescription,
	BlockText,
	NameOfProduct,
	OldPrice,
	Price,
} from './styles';

const Product = ({
	imageUrls,
	description,
	name,
	previousPrice,
	currentPrice,
	isInCart,
	parameters,
	isFavorite,
	onAddToFavorites,
	onAddToCart,
	id,
}) => {
	return (
		<GridContainer>
			<div>
				{imageUrls && <DescriptionPageCarousel imageUrls={imageUrls} />}
				<DescriptionArea>
					<TextDescription>{description}</TextDescription>
				</DescriptionArea>
			</div>
			<div>
				<BlockText flex>
					<NameOfProduct>{name}</NameOfProduct>
					<span>
						<FavoriteHeart isFavorite={isFavorite} onClick={onAddToFavorites} />
					</span>
				</BlockText>
				<BlockText>
					<Rating id={id} />
				</BlockText>
				<BlockText>
					{previousPrice && <OldPrice>{previousPrice}€</OldPrice>}
					<Price discounted={previousPrice && true}>{currentPrice}€</Price>
				</BlockText>
				<BlockText>
					{parameters && <Parametrs parameters={parameters} />}
				</BlockText>
				<BlockText>
					<Button
						type="default"
						color="dark"
						text={isInCart ? 'In Cart' : 'Buy'}
						onClick={onAddToCart}
					/>
				</BlockText>
			</div>
		</GridContainer>
	);
};

Product.propTypes = {
	id: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
	previousPrice: PropTypes.number,
	currentPrice: PropTypes.number.isRequired,
	parameters: PropTypes.arrayOf(PropTypes.string).isRequired,
	isInCart: PropTypes.bool,
	isFavorite: PropTypes.bool,
	onAddToCart: PropTypes.func,
	onAddToFavorites: PropTypes.func,
};

Product.defaultProps = {
	isInCart: false,
	isFavorite: false,
	previousPrice: null,
	onAddToCart: () => {},
	onAddToFavorites: () => {},
};

export default Product;
