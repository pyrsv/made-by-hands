import React from 'react';
import { useSelector } from 'react-redux';
import WishlistItem from './WishlistItem';
import { WishlistContainer } from './styles';

const Wishlist = () => {
	const wishlist = useSelector(state => state.wishlistReducer.wishlist);
	return (
		<WishlistContainer>
			{wishlist.map(item => {
				return (
					<WishlistItem
						key={item._id}
						name={item.name}
						color={item.color}
						currentPrice={item.currentPrice}
						image={item.imageUrls[0]}
						id={item._id}
						itemNo={item.itemNo}
						isInCart={item.isInCart}
					/>
				);
			})}
		</WishlistContainer>
	);
};

export default Wishlist;
