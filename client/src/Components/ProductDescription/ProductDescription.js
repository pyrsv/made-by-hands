import React, { useEffect } from 'react';
import LayoutContainer from '../LayoutContainer/LayoutContainer';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getCart } from '../../store/actions/descriptionCardAction';
import { ProductDescriptionContainer, MinHeight } from './Cart/styled';
import Cart from './Cart/Cart';

const ProductDescription = ({ cartNoParam }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCart(cartNoParam));
	}, [dispatch]);

	const item = useSelector(state => state.descriptionCard.card);
	const {
		imageUrls,
		description,
		name,
		previousPrice,
		currentPrice,
		isInCart,
		parameters,
		isFavorite,
	} = item;

	return (
		<ProductDescriptionContainer>
			<LayoutContainer>
				{!item.itemNo ? (
					<MinHeight />
				) : (
					<Cart
						imageUrls={imageUrls}
						description={description}
						name={name}
						previousPrice={previousPrice}
						currentPrice={currentPrice}
						isInCart={isInCart}
						parameters={parameters}
						isFavorite={isFavorite}
					/>
				)}
			</LayoutContainer>
		</ProductDescriptionContainer>
	);
};

ProductDescription.propTypes = {
	cartNoParam: PropTypes.string.isRequired,
};

export default ProductDescription;
