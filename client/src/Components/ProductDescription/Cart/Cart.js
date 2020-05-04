import React from 'react';
import Button from '../../UI/Button/Button';
import FavoriteHeart from '../../UI/FavoriteHeart/FavoriteHeart';
import DescriptionPageCarousel from '../../Carousels/DescriptionPageCarousel/DescriptionPageCarousel';
import PropTypes from 'prop-types';
import Parametrs from '../Parametrs/Parametrs';
import {
	GridContainer,
	DescriptionArea,
	TextDescription,
	BlockText,
	NameOfProduct,
	OldPrice,
	Price,
} from './styled';

const Cart = ({
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
					{previousPrice && <OldPrice>{previousPrice}€</OldPrice>}
					<Price discounted={previousPrice && true}>{currentPrice}€</Price>
				</BlockText>
				<BlockText>
					<Button
						type="default"
						color="dark"
						text={isInCart ? 'In Cart' : 'Buy'}
						onClick={onAddToCart}
					/>
				</BlockText>
				<BlockText>
					{parameters && <Parametrs parameters={parameters} />}
				</BlockText>
			</div>
		</GridContainer>
	);
};

Cart.propTypes = {
	description: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
	previousPrice: PropTypes.number.isRequired,
	currentPrice: PropTypes.number.isRequired,
	parameters: PropTypes.arrayOf(PropTypes.string).isRequired,
	isInCart: PropTypes.bool,
	isFavorite: PropTypes.bool,
	onAddToCart: PropTypes.func,
	onAddToFavorites: PropTypes.func,
};

Cart.defaultProps = {
	isInCart: false,
	isFavorite: false,
	onAddToCart: () => {},
	onAddToFavorites: () => {},
};

export default Cart;
