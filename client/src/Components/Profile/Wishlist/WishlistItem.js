import React from 'react';
import {
	WishlistItemImage,
	WishlistItemContainer,
	ButtonInWishlist,
	WishlistItemInfo,
	WishlistItemPrice,
	WishlistItemName,
	DeleteItemFromWishlist,
	WishlistItemImageContainer,
} from './styles';
import Button from '../../UI/Button/Button';
import CloseBtn from '../../UI/CloseButton/CloseButton';
import { useDispatch } from 'react-redux';
import { setProductToCart } from '../../../store/actions/catalogActions';
import { addToCart } from '../../../store/actions/cartActions';
import { deleteFromWishlist } from '../../../store/actions/wishActions';
import PropTypes from 'prop-types';

const WishlistItem = ({ name, currentPrice, image, isInCart, id, itemNo }) => {
	const dispatch = useDispatch();

	const handleCartButtonClick = () => {
		dispatch(addToCart(id, itemNo));
		dispatch(setProductToCart(id));
	};

	return (
		<>
			<WishlistItemContainer>
				<WishlistItemImageContainer>
					<WishlistItemImage src={image} alt={name} />
				</WishlistItemImageContainer>
				<WishlistItemInfo>
					<div>
						<WishlistItemName>{name}</WishlistItemName>
					</div>
					<div>
						<WishlistItemPrice>
							<>
								<span>{currentPrice}₴</span>
							</>
						</WishlistItemPrice>
					</div>
				</WishlistItemInfo>
				<ButtonInWishlist>
					<Button
						type="wide"
						color="dark"
						text={isInCart ? 'In Cart' : 'Buy'}
						icon="shopping-cart"
						onClick={handleCartButtonClick}
						disabled={isInCart}
						iconPrefix="fas"
					/>
				</ButtonInWishlist>
				<DeleteItemFromWishlist>
					<CloseBtn
						onClick={() => dispatch(deleteFromWishlist(id))}
						size="22"
					/>
				</DeleteItemFromWishlist>
			</WishlistItemContainer>
		</>
	);
};

export default WishlistItem;
WishlistItem.propTypes = {
	id: PropTypes.string.isRequired,
	itemNo: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	currentPrice: PropTypes.number.isRequired,
	isInCart: PropTypes.bool.isRequired,
};
