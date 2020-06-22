import React, { memo } from 'react';
import Button from '../../UI/Button/Button';
import FavoriteHeart from '../../UI/FavoriteHeart/FavoriteHeart';
import DescriptionPageCarousel from '../../Carousels/DescriptionPageCarousel/DescriptionPageCarousel';
import PropTypes from 'prop-types';
import Parametrs from '../Parametrs/Parametrs';
import Rating from '../Rating/Rating';
import Comments from '../Comments/Comments';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import {
	GridContainer,
	DescriptionArea,
	TextDescription,
	BlockText,
	NameOfProduct,
	OldPrice,
	Price,
	TitleContainer,
	AllInfo,
} from './styles';

const Product = ({
	imageUrls,
	description,
	name,
	previousPrice,
	currentPrice,
	parameters,
	id,
	isFavorite,
	isInCart,
	onAddCart,
	onAddFavor,
}) => {
	const location = useLocation();
	const user = useSelector(state => state.auth.currentUser);
	return (
		<GridContainer>
			<DescriptionPageCarousel imageUrls={imageUrls} />
			<TitleContainer>
				<BlockText flex>
					<NameOfProduct>{name}</NameOfProduct>
					{user ? (
						<span>
							<FavoriteHeart isFavorite={isFavorite} onClick={onAddFavor} />
						</span>
					) : (
						<NavLink
							to={{
								pathname: '/login',
								state: {
									background: location,
								},
							}}
						>
							<FavoriteHeart isFavorite={isFavorite} />
						</NavLink>
					)}
				</BlockText>
			</TitleContainer>
			<DescriptionArea>
				<TextDescription>{description}</TextDescription>
			</DescriptionArea>
			<AllInfo>
				<BlockText>
					<Rating id={id} />
				</BlockText>
				<BlockText>
					{previousPrice && <OldPrice>{previousPrice}₴</OldPrice>}
					<Price discounted={previousPrice && true}>{currentPrice}₴</Price>
				</BlockText>
				<BlockText>
					<Parametrs parameters={parameters} />
				</BlockText>
				<BlockText>
					<Button
						type="default"
						color="dark"
						text={isInCart ? 'In Cart' : 'Buy'}
						onClick={onAddCart}
						disabled={isInCart}
					/>
				</BlockText>
				<BlockText>
					<Comments id={id} />
				</BlockText>
			</AllInfo>
		</GridContainer>
	);
};

Product.propTypes = {
	id: PropTypes.string.isRequired,
	description: PropTypes.arrayOf(PropTypes.string).isRequired,
	name: PropTypes.string.isRequired,
	imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
	previousPrice: PropTypes.number,
	currentPrice: PropTypes.number.isRequired,
	parameters: PropTypes.arrayOf(PropTypes.string).isRequired,
	isInCart: PropTypes.bool,
	isFavorite: PropTypes.bool,
	onAddCart: PropTypes.func.isRequired,
	onAddFavor: PropTypes.func.isRequired,
};

Product.defaultProps = {
	isInCart: false,
	isFavorite: false,
	previousPrice: null,
};

export default memo(Product);
