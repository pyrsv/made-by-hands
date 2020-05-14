import React, { useEffect, useState } from 'react';
import LayoutContainer from '../LayoutContainer/LayoutContainer';
import PropTypes from 'prop-types';
import axios from 'axios';
import { ProductDescriptionContainer, MinHeight } from './Product/styles';
import Product from './Product/Product';
import { checkProductsForCartAndFavorites } from '../../utils/API';
import { addToCart } from '../../store/actions/cartActions';
import { useDispatch } from 'react-redux';
import {
	setProductToCart,
	setProductToWishlist,
} from '../../store/actions/catalogActions';
import {
	addToWishlist,
	deleteFromWishlist,
} from '../../store/actions/wishActions';

const ProductDescription = ({ productNoParam }) => {
	const [item, setItem] = useState({});
	const dispatch = useDispatch();

	const getProduct = param => {
		axios.get(`/products/${param}`).then(res => {
			checkProductsForCartAndFavorites(res.data).then(product => {
				setItem(product[0]);
			});
		});
	};

	const handleCartButtonClick = (id, itemNo) => {
		dispatch(addToCart(id, itemNo));
		dispatch(setProductToCart(id));
		setItem({ ...item, isInCart: !item.isInCart });
	};

	const handleHeartButtonClick = (id, isFavorite) => {
		dispatch(setProductToWishlist(id));
		if (!isFavorite) {
			dispatch(addToWishlist(id));
			setItem({ ...item, isFavorite: !item.isFavorite });
		} else {
			dispatch(deleteFromWishlist(id));
			setItem({ ...item, isFavorite: !item.isFavorite });
		}
	};

	useEffect(() => {
		getProduct(productNoParam);
	}, [productNoParam, item.isInCart, item.isFavorite]);

	return (
		<ProductDescriptionContainer>
			<LayoutContainer>
				{!item._id ? (
					<MinHeight />
				) : (
					<Product
						onAddCart={() => handleCartButtonClick(item._id, item.itemNo)}
						onAddFavor={() => handleHeartButtonClick(item._id, item.isFavorite)}
						imageUrls={item.imageUrls}
						description={item.description}
						name={item.name}
						previousPrice={item.previousPrice}
						currentPrice={item.currentPrice}
						isInCart={item.isInCart}
						parameters={item.parameters}
						isFavorite={item.isFavorite}
						itemNo={item.itemNo}
						id={item._id}
					/>
				)}
			</LayoutContainer>
		</ProductDescriptionContainer>
	);
};

ProductDescription.propTypes = {
	productNoParam: PropTypes.string.isRequired,
};

export default ProductDescription;
