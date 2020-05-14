import React, { memo } from 'react';
import Button from '../../UI/Button/Button';
import FavoriteHeart from '../../UI/FavoriteHeart/FavoriteHeart';
import DescriptionPageCarousel from '../../Carousels/DescriptionPageCarousel/DescriptionPageCarousel';
import PropTypes from 'prop-types';
import Parametrs from '../Parametrs/Parametrs';
import Rating from '../Rating/Rating';
import Comments from '../Comments/Comments';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { addToCart } from '../../../store/actions/cartActions';
import {
	setProductToCart,
	setProductToWishlist,
	setCurrentProductId,
} from '../../../store/actions/catalogActions';
import {
	addToWishlist,
	deleteFromWishlist,
} from '../../../store/actions/wishActions';

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
	parameters,
	id,
	itemNo,
	isFavorite,
	isInCart,
	onAddCart,
	onAddFavor,
}) => {
	const dispatch = useDispatch();
	const location = useLocation();
	const user = useSelector(state => state.auth.currentUser);

	const handleCartButtonClick = () => {
		dispatch(addToCart(id, itemNo));
		dispatch(setProductToCart(id));
		onAddCart(id, itemNo);
	};

	const handleHeartButtonClick = () => {
		dispatch(setProductToWishlist(id));
		if (!isFavorite) {
			dispatch(addToWishlist(id));
			onAddFavor(id, isFavorite);
		} else {
			dispatch(deleteFromWishlist(id));
			onAddFavor(id, isFavorite);
		}
	};

	return (
		<GridContainer>
			<div>
				<DescriptionPageCarousel imageUrls={imageUrls} />
				<DescriptionArea>
					<TextDescription>{description}</TextDescription>
				</DescriptionArea>
			</div>
			<div>
				<BlockText flex>
					<NameOfProduct>{name}</NameOfProduct>
					{user ? (
						<span>
							<FavoriteHeart
								isFavorite={isFavorite}
								onClick={() => handleHeartButtonClick(id)}
							/>
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
							<FavoriteHeart
								isFavorite={isFavorite}
								onClick={() => {
									dispatch(setCurrentProductId(id));
								}}
							/>
						</NavLink>
					)}
				</BlockText>
				<BlockText>
					<Rating id={id} />
				</BlockText>
				<BlockText>
					{previousPrice && <OldPrice>{previousPrice}€</OldPrice>}
					<Price discounted={previousPrice && true}>{currentPrice}€</Price>
				</BlockText>
				<BlockText>
					<Parametrs parameters={parameters} />
				</BlockText>
				<BlockText>
					<Button
						type="default"
						color="dark"
						text={isInCart ? 'In Cart' : 'Buy'}
						onClick={() => handleCartButtonClick(id)}
						disabled={isInCart}
					/>
				</BlockText>
				<BlockText>
					<Comments id={id} />
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
	itemNo: PropTypes.number.isRequired,
	onAddCart: PropTypes.func.isRequired,
	onAddFavor: PropTypes.func.isRequired,
};

Product.defaultProps = {
	isInCart: false,
	isFavorite: false,
	previousPrice: null,
};

export default memo(Product);
